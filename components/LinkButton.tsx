'use client'

import clsx from 'clsx';
import { ACTIVE_INNER_SHADOW, FOCUS } from '../lib/styles';
import Link from 'next/link';

type Props = {
    children: React.ReactNode;
    target?: string;
    isSecondaryAction?: boolean;
    isExternalLink?: boolean;
    href: string;
}

export default function LinkButton({ children, target, href, isSecondaryAction=false, isExternalLink=false }: Props) {
    const className = clsx(
        'w-full md:w-fit text-center cursor-pointer px-4 py-2 rounded-sm border border-brand-ink font-bold',
        FOCUS,
        ACTIVE_INNER_SHADOW,
        {
            'bg-accent hover:bg-accent-hover active:bg-accent-hover text-white': !isSecondaryAction,
            'bg-white hover:bg-brand-mint active:bg-brand-sage text-brand-ink': isSecondaryAction
        }
    );

    return isExternalLink ?
        <a
            href={href}
            target={target}
            className={className}>
            {children}
        </a> :
        <Link
            href={href}
            target={target}
            className={className}>
            {children}
        </Link>
}