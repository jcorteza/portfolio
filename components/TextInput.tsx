'use client'

import clsx from 'clsx';
import { FOCUS, FORM_INPUT, HOVER_INNER_SHADOW } from '../lib/styles'

type Props = {
    ref: React.RefObject<HTMLInputElement | null>;
    name: string;
    disabled: boolean;
    describedBy?: string;
    required?: boolean;
    invalid?: boolean;
    isForEmail?: boolean;
    value?: string;
    onChangeAction?: React.ChangeEventHandler<HTMLInputElement, HTMLInputElement>
}

export default function TextInput({
    ref,
    name,
    disabled,
    describedBy,
    required=false,
    invalid=false,
    isForEmail=false,
    value,
    onChangeAction
}: Props) {
    return (
        <input
            ref={ref}
            aria-describedby={describedBy}
            aria-invalid={invalid}
            required={required}
            value={value}
            name={name}
            type={isForEmail ? 'email' : 'text'}
            autoComplete={isForEmail ? 'email' : 'name'}
            readOnly={disabled}
            onChange={onChangeAction}
            className={clsx(
                FORM_INPUT,
                FOCUS,
                {
                    [HOVER_INNER_SHADOW]: !disabled,
                    'cursor-default': disabled
                }
            )} />
    )
}