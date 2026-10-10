'use server'

import { headers } from 'next/headers';
import { emailContactRequest } from './email';
import { MessageStatus } from './types';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis'

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.fixedWindow(3, '1h'),
    timeout: 5000
});

export const processContactRequest = async (initialState: MessageStatus, form?: FormData) => {
    if (!form) {
        return MessageStatus.NOT_APPLICABLE;
    }

    const isResubmitting = initialState === MessageStatus.POSSIBLE_SPAM;
    const formLoadToSubmit = form.get('loadToSubmitTime')?.valueOf();
    if (!isResubmitting && (form.get('url') || !formLoadToSubmit)) {
        console.debug('Spam received');
        return MessageStatus.SUCCESS;
    }

    console.debug(`Form load to submit time took ${formLoadToSubmit} ms`);
    if (!isResubmitting && formLoadToSubmit && Number(formLoadToSubmit) < 3000) {
        return MessageStatus.POSSIBLE_SPAM;
    }

    const name = form.get('name')?.toString().trim();
    const email = form.get('email')?.toString().trim();
    const message = form.get('message')?.toString().trim();

    try {
        if (!name || !email || !message) {
            throw new Error('Missing contact form fields.');
        }

        const headerStore = await headers();
        const forwardedFor = headerStore.get('x-forwarded-for');
        const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : headerStore.get('x-real-ip');
        const ratelimitResponse = ratelimit.limit(ip || email);
        if (!(await ratelimitResponse).success) {
            return MessageStatus.RATE_LIMITED;
        }

        // await emailContactRequest(name, email, message);
        return MessageStatus.SUCCESS;
    } catch (error) {
        console.error('Unexpected error processing contact form', error);
        return MessageStatus.ERROR;
    }
};