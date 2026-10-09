'use server'

import { MessageStatus } from "./types";

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

        return MessageStatus.SUCCESS;
    } catch (error) {
        console.error('Unexpected error processing contact form', error);
        return MessageStatus.ERROR;
    }
};