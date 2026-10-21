'use client'

import clsx from 'clsx';
import { FOCUS, FORM_INPUT, HOVER_INNER_SHADOW } from '../lib/styles'

type Props = {
    ref?: React.RefObject<HTMLInputElement | null>;
    name: string;
    disabled: boolean;
    describedBy?: string;
    required?: boolean;
    invalid?: boolean;
    isForEmail?: boolean;
    value?: string;
    isHoneyPot?: boolean;
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
    isHoneyPot=false,
    value,
    onChangeAction
}: Props) {
    return (
        <input
            ref={ref}
            aria-describedby={describedBy}
            aria-invalid={invalid}
            aria-hidden={isHoneyPot ? true : undefined}
            required={required}
            tabIndex={isHoneyPot ? -1 : undefined}
            value={value}
            name={name}
            type={isForEmail ? 'email' : 'text'}
            autoComplete={isHoneyPot ? 'off' : isForEmail ? 'email' : 'name'}
            readOnly={disabled}
            onChange={onChangeAction}
            className={clsx(
                FORM_INPUT,
                FOCUS,
                {
                    // [HOVER_INNER_SHADOW]: !disabled,
                    'cursor-default': disabled
                }
            )} />
    )
}