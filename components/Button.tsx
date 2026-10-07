'use client'

import clsx from 'clsx';
import { ACTIVE_INNER_SHADOW, FOCUS } from '../lib/styles';

type Props = {
    isDisabled?: boolean;
    isSubmit?: boolean;
    isSecondaryAction?: boolean;
    children: React.ReactNode;
    handleClickAction?: () => void;
}

export default function Button({ children, handleClickAction, isSubmit=false, isDisabled=false, isSecondaryAction=false }: Props) {
    return (
        <button
            type={isSubmit ? 'submit' : 'button'}
            className={clsx(
                'w-fit px-4 py-2 rounded-sm border font-bold',
                FOCUS,
                ACTIVE_INNER_SHADOW,
                {
                    'bg-accent hover:bg-accent-hover active:bg-accent-hover text-white': !isSecondaryAction && !isDisabled,
                    'bg-white hover:bg-brand-mint active:bg-brand-sage text-brand-ink': isSecondaryAction && !isDisabled,
                    'bg-accent/50 text-white': !isSecondaryAction && isDisabled,
                    'bg-white text-brand-ink/50': isSecondaryAction && isDisabled,
                    'border-brand-ink cursor-pointer': !isDisabled,
                    'border-brand-ink/50': isDisabled
                }
            )}
            onClick={handleClickAction}>
            {children}
        </button>
    )
}