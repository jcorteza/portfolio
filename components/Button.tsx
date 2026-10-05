'use client'

import clsx from 'clsx';
import { ACTIVE_INNER_SHADOW } from '../app/styles';

type Props = {
    isSecondaryAction?: boolean;
    children: React.ReactNode;
    handleClickAction: () => void;
}

export default function Button({ isSecondaryAction, children, handleClickAction }: Props) {
    return (
        <button
            className={clsx(
                'px-4 py-2 rounded-sm border border-brand-ink font-bold',
                ACTIVE_INNER_SHADOW,
                {
                    'bg-accent hover:bg-accent-hover active:bg-accent-hover text-white': !isSecondaryAction,
                    'bg-white hover:bg-brand-mint active:bg-brand-sage text-brand-ink': isSecondaryAction
                }
            )}
            onClick={handleClickAction}>
            {children}
        </button>
    )
}