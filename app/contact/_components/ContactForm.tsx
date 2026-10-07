'use client'

import clsx from 'clsx';
import { FOCUS, FORM_INPUT, HOVER_INNER_SHADOW } from '../../../lib/styles';
import LabeledField from '../../../components/LabeledField';
import TextInput from '../../../components/TextInput'
import Button from '../../../components/Button';
import ErrorIcon from './ErrorIcon';
import SuccessIcon from './SuccessIcon';
import PauseIcon from './PauseIcon';
import { RefObject, startTransition, useActionState, useMemo, useRef, useState } from 'react';
import { processContactRequest } from '../../../lib/actions';
import { MessageStatus } from '../../../lib/types';

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

const Status = (status: MessageStatus, errors?: ErrorContext[]) => {
    const errorMessage = errors && errors.length === 1 ? `There is ${errors.length} problem with your message` :
        errors && errors.length > 1 ? `There are ${errors.length} problems with your message` : '';

    return (
        <div
            role={status === MessageStatus.ERROR ? 'alert' : 'status'}
            className={clsx(
                'flex border border-l-5 cursor-default',
                {
                    'gap-2 px-3 py-2 mb-5': status !== MessageStatus.NOT_APPLICABLE,
                    'border-transparent': status === MessageStatus.NOT_APPLICABLE,
                    'border-error': status === MessageStatus.ERROR,
                    'border-brand-ink': status === MessageStatus.PROCESSING,
                    'border-success': status === MessageStatus.SUCCESS
                }
            )}>
            {
                status === MessageStatus.SUCCESS ? <SuccessIcon /> :
                    status === MessageStatus.ERROR ? <ErrorIcon /> :
                        status === MessageStatus.PROCESSING ? <PauseIcon /> : null
            }
            <div>
                <span className="font-bold text-brand-ink font-[var(--font-title),_sans-serif] tracking-tight">
                    {
                        status === MessageStatus.SUCCESS ? 'Message sent' :
                            status === MessageStatus.ERROR && errors ? errorMessage :
                                status === MessageStatus.PROCESSING ? 'Sending your message': ''
                    }
                </span>
                {status === MessageStatus.ERROR && errors &&
                    <ul className="flex flex-col gap-2 text-error">
                        {errors.map(({ error, fieldRef }, idx) => 
                            <li key={idx} className="hover:text-accent-hover active:text-accent-active">
                                <button className={clsx(FOCUS, 'cursor-pointer underline')} onClick={() => fieldRef.current?.focus()} type="button">{error}</button> 
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
        const nameInvalid = !nameInput?.checkValidity();
        const emailInvalid = !emailInput?.checkValidity();
        const messageInvalid = !messageInput?.checkValidity();

        if (nameInvalid) {
            if (nameInput?.validity.valueMissing) {
                setNameError('Enter your name');
            }
        }

        if (emailInvalid) {
            if (emailInput?.validity.valueMissing) {
                setEmailError('Enter your email address');
            } else if (emailInput?.validity.typeMismatch) {
                setEmailError('Enter an email like name@email.com');
            }
        }

        if (messageInvalid) {
            if (messageInput?.validity.valueMissing) {
                setMessageError('Enter your message');
            }
        }

        if (nameInvalid || emailInvalid || messageInvalid   ) {
            console.log('form invalid');
            return false;
        }
        return true;
    };

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

                    if (isFormValid()) {
                        startTransition(() => {
                            processForm(new FormData(event.currentTarget))
                        });
                    }
                }}
                className="min-w-0 shrink max-w-md flex flex-col gap-3">
                <div>
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
                <div>
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
                <div>
                    <LabeledField heading="Message" required>
                        <textarea
                            aria-describedby={messageErrorId}
                            ref={messageRef}
                            name="message"
                            disabled={isDisabled}
                            required
                            aria-invalid={!!messageError}
                            className={clsx(FORM_INPUT, FOCUS, 'h-35', { [HOVER_INNER_SHADOW]: !isDisabled, 'pointer-default': isDisabled })} />
                    </LabeledField>
                    {InlineError(messageErrorId, messageError)}
                </div>
                <Button isSubmit isDisabled={isDisabled}>Send message</Button>
            </form>
        </div>
    );
}