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
                'shrink-0 w-full md:w-fit px-4 py-2 rounded-sm border font-bold',
                FOCUS,
                ACTIVE_INNER_SHADOW,
                {
                    'bg-accent hover:bg-accent-hover active:bg-accent-hover text-surface': !isSecondaryAction && !isDisabled,
                    'bg-surface hover:bg-tag-bg active:bg-brand-sage text-body-text': isSecondaryAction && !isDisabled,
                    'bg-accent/50 text-surface': !isSecondaryAction && isDisabled,
                    'bg-surface text-body-text/50': isSecondaryAction && isDisabled,
                    'border-card-edge cursor-pointer': !isDisabled,
                    'border-card-edge/50': isDisabled
                }
            )}
            onClick={handleClickAction}>
            {children}
        </button>
    )
}