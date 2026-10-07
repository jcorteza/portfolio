'use server'

import { MessageStatus } from "./types";

export const processContactRequest = async (initialState: MessageStatus, form?: FormData) => {
    if (!form) {
        return MessageStatus.NOT_APPLICABLE;
    }

    console.log('process contact request');
    return MessageStatus.SUCCESS;
};