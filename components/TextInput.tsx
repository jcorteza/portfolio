'use client'

import { FORM_INPUT } from '../app/styles'

type Props = {
    name: string;
    disabled: boolean;
    describedBy?: string;
    required?: boolean;
    invalid?: boolean;
    isForEmail?: boolean;
}

export default function TextInput({ name, disabled, describedBy, required=false, invalid=false, isForEmail=false }: Props) {
    return (
        <input
            aria-describedby={describedBy}
            aria-invalid={invalid}
            required={required}
            name={name}
            type={isForEmail ? 'email' : 'text'}
            autoComplete={isForEmail ? 'email' : 'name'}
            readOnly={disabled}
            className={FORM_INPUT} />
    )
}