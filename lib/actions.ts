'use server'

import { MessageStatus } from "./types";

export const processContactRequest = async (initialState: MessageStatus, form?: FormData) => {
    if (!form) {
        return MessageStatus.NOT_APPLICABLE;
    }

    const name = form.get('name')?.toString().trim();
    const email = form.get('email')?.toString().trim();
    const message = form.get('message')?.toString().trim();

    try {
        if (!name || !email || !message) {
            throw new Error('Missing contact form fields.');
        }

        console.log('process contact request');
        return MessageStatus.SUCCESS;
    } catch (error) {
        console.error('Unexpected error processing contact form', error);
        return MessageStatus.ERROR;
    }
};