'use client'

import { FORM_INPUT } from '../utils/styles'

type Props = {
    name: string;
    disabled: boolean;
    describedBy?: string;
    required?: boolean;
    invalid?: boolean;
    isForEmail?: boolean;
    value?: string;
    onChangeAction?: React.ChangeEventHandler<HTMLInputElement, HTMLInputElement>
}

export default function TextInput({ name, disabled, describedBy, required=false, invalid=false, isForEmail=false, value, onChangeAction }: Props) {
    return (
        <input
            aria-describedby={describedBy}
            aria-invalid={invalid}
            required={required}
            value={value}
            name={name}
            type={isForEmail ? 'email' : 'text'}
            autoComplete={isForEmail ? 'email' : 'name'}
            readOnly={disabled}
            onChange={onChangeAction}
            className={FORM_INPUT} />
    )
}