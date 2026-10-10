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
        'w-full md:w-fit text-center cursor-pointer px-4 py-2 rounded-sm border border-card-edge font-bold',
        FOCUS,
        ACTIVE_INNER_SHADOW,
        {
            'bg-accent hover:bg-accent-hover active:bg-accent-hover text-surface': !isSecondaryAction,
            'bg-surface hover:bg-tag-bg active:bg-brand-sage text-body-text': isSecondaryAction
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