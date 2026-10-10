'use client'

import clsx from 'clsx';
import { FOCUS, FORM_INPUT, HOVER_INNER_SHADOW } from '../../../lib/styles';
import LabeledField from '../../../components/LabeledField';
import TextInput from '../../../components/TextInput'
import Button from '../../../components/Button';
import ErrorIcon from './ErrorIcon';
import SuccessIcon from './SuccessIcon';
import PauseIcon from './PauseIcon';
import { RefObject, startTransition, useActionState, useEffect, useMemo, useRef, useState } from 'react';
import { processContactRequest } from '../../../lib/actions';
import { MessageStatus } from '../../../lib/types';
import EmailLink from '../../_components/EmailLink';

const InlineError = (id: string, text: string) => (
    <div id={id} className={clsx('flex items-start gap-2 text-sm', { 'pt-1': text })}>
        {text && <ErrorIcon />}
        <span className="mt-[2px] text-error">{text}</span>
    </div>
);

type ErrorContext = {
    error: string;
    fieldRef: RefObject<HTMLInputElement | HTMLTextAreaElement | null>;
}

const Status = (status: MessageStatus, errors: ErrorContext[]) => {
    const errorMessage = errors && errors.length === 1 ? `There is ${errors.length} problem with your message` :
        errors && errors.length > 1 ? `There are ${errors.length} problems with your message` : '';
    const isErrorState = errors.length > 0 || status === MessageStatus.ERROR || status === MessageStatus.POSSIBLE_SPAM || status === MessageStatus.RATE_LIMITED;
    const icon = status === MessageStatus.SUCCESS ? <SuccessIcon /> :
        isErrorState ? <ErrorIcon /> :
            status === MessageStatus.PROCESSING ? <PauseIcon /> : null;
    let heading: React.ReactNode = errors.length > 0 ? errorMessage : '';
    if (errors.length === 0) {
        switch (status) {
            case MessageStatus.SUCCESS:
                heading = 'Message sent';
                break;
            case MessageStatus.POSSIBLE_SPAM:
                heading = 'That was quick! Resubmit to verify you\'re not a bot.';
                break;
            case MessageStatus.RATE_LIMITED:
                heading = (
                    <>
                        You&rsquo;ve reached the limit for contact requests. Try again in an hour or <EmailLink altText='reach me by email' /> instead.
                    </>
                );
                break;
            case MessageStatus.ERROR:
                heading = 'Something went wrong. Try again';
                break;
            case MessageStatus.PROCESSING:
                heading = 'Sending your message';
                break;
        }
    }

    return (
        <div
            role={isErrorState ? 'alert' : 'status'}
            className={clsx(
                'flex border border-l-5 cursor-default',
                {
                    'gap-2 px-3 py-2 mb-5': status !== MessageStatus.NOT_APPLICABLE || errors.length > 0,
                    'border-transparent': status === MessageStatus.NOT_APPLICABLE && errors.length === 0,
                    'border-error': isErrorState,
                    'border-brand-ink': status === MessageStatus.PROCESSING,
                    'border-success': status === MessageStatus.SUCCESS
                }
            )}>
            {icon}
            <div className="flex flex-col gap-2">
                <span className="font-bold text-brand-ink font-title">
                    {heading}
                </span>
                {errors.length > 0 &&
                    <ul className="flex flex-col gap-1.5 text-error">
                        {errors.map(({ error, fieldRef }, idx) => 
                            <li key={idx} className="hover:text-accent-hover active:text-accent-active">
                                <button className={clsx(FOCUS, 'cursor-pointer hover:underline active:underline focus-visible:underline' )} onClick={() => fieldRef.current?.focus()} type="button">{error}</button> 
                            </li>
                        )}
                    </ul>
                }
            </div>
        </div>
    );
};

export default function ContactForm() {
    const [state, processForm, isProcessing] = useActionState<Promise<MessageStatus>, FormData | undefined>(processContactRequest, MessageStatus.NOT_APPLICABLE);
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const nameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const messageRef = useRef<HTMLTextAreaElement | null>(null);
    const formLoadedTS = useRef<number | null>(null);
    const nameErrorId = 'nameError';
    const emailErrorId = 'emailError';
    const messageErrorId = 'messageError';
    const isDisabled = state === MessageStatus.SUCCESS || isProcessing;
    const errors = useMemo(() => {
        const workingErrors = [];
        if (nameError) {
            workingErrors.push({ fieldRef: nameRef, error: nameError });
        }

        if (emailError) {
            workingErrors.push({ fieldRef: emailRef, error: emailError });
        }

        if (messageError) {
            workingErrors.push({ fieldRef: messageRef, error: messageError });
        }
        return workingErrors;
    }, [nameError, emailError, messageError]);

    const isFormValid = () => {
        setNameError('');
        setEmailError('');
        setMessageError('');

        const nameInput = nameRef.current;
        const emailInput = emailRef.current;
        const messageInput = messageRef.current;
        const isNameEmpty = nameInput?.value.trim().length === 0;
        const isEmailEmpty = emailInput?.value.trim().length === 0;
        const isMessageEmpty = messageInput?.value.trim().length === 0;
        const nameInvalid = isNameEmpty || !nameInput?.checkValidity();
        const emailInvalid = isEmailEmpty || !emailInput?.checkValidity();
        const messageInvalid = isMessageEmpty || !messageInput?.checkValidity();

        if (nameInvalid) {
            if (isNameEmpty || nameInput?.validity.valueMissing) {
                setNameError('Enter your name');
            }
        }

        if (emailInvalid) {
            if (isEmailEmpty || emailInput?.validity.valueMissing) {
                setEmailError('Enter your email address');
            } else if (emailInput?.validity.typeMismatch) {
                setEmailError('Enter an email like name@email.com');
            }
        }

        if (messageInvalid) {
            if (isMessageEmpty || messageInput?.validity.valueMissing) {
                setMessageError('Enter your message');
            }
        }

        if (nameInvalid) {
            nameInput?.focus();
        } else if (emailInvalid) {
            emailInput?.focus();
        } else if (messageInvalid) {
            messageInput?.focus();
        }

        if (nameInvalid || emailInvalid || messageInvalid) {
            return false;
        }
        return true;
    };

    useEffect(() => {
        formLoadedTS.current = Date.now();

        return () => { formLoadedTS.current = null;}
    }, []);

    return (
        <div>
            {Status(isProcessing ? MessageStatus.PROCESSING : state, errors)}
            <form
                noValidate
                onSubmit={(event) => {
                    event.preventDefault();
                    if (isDisabled) {
                        return;
                    }

                    if (state !== MessageStatus.POSSIBLE_SPAM) startTransition(() => processForm(undefined));
                    if (isFormValid()) {
                        startTransition(() => {
                            const form = new FormData(event.currentTarget);
                            form.append('loadToSubmitTime', `${formLoadedTS.current ? Date.now() - formLoadedTS.current : NaN}`);
                            processForm(form)
                        });
                    }
                }}
                className="relative min-w-0 shrink max-w-md flex flex-col gap-3">
                <div id='nameField'>
                    <LabeledField heading="Name" required>
                        <TextInput
                            describedBy={nameErrorId}
                            ref={nameRef}
                            name="name"
                            disabled={isDisabled}
                            required
                            invalid={!!nameError} />
                    </LabeledField>
                    {InlineError(nameErrorId, nameError)}
                </div>
                <div id='emailField'>
                    <LabeledField heading="Email" required>
                        <TextInput
                            describedBy={emailErrorId}
                            ref={emailRef}
                            name="email"
                            isForEmail
                            disabled={isDisabled}
                            required
                            invalid={!!emailError} />
                    </LabeledField>
                    {InlineError(emailErrorId, emailError)}
                </div>
                <div aria-hidden id="urlField">
                    <LabeledField heading="Url" required>
                        <TextInput
                            isHoneyPot
                            name="url"
                            disabled={false}
                            required
                            invalid={false} />
                    </LabeledField>
                </div>
                <div id="messageField">
                    <LabeledField heading="Message" required>
                        <textarea
                            aria-describedby={messageErrorId}
                            ref={messageRef}
                            name="message"
                            disabled={isDisabled}
                            required
                            aria-invalid={!!messageError}
                            className={clsx(FORM_INPUT, FOCUS, 'h-35', { [HOVER_INNER_SHADOW]: !isDisabled, 'cursor-default': isDisabled })} />
                    </LabeledField>
                    {InlineError(messageErrorId, messageError)}
                </div>
                <Button isSubmit isDisabled={isDisabled}>{state === MessageStatus.POSSIBLE_SPAM ? 'Resubmit' :  'Send message'}</Button>
            </form>
        </div>
    );
}