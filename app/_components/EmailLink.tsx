'use client'

import clsx from 'clsx';
import { ACTIVE_INNER_SHADOW, CARD_EXTERNAL_LINK, FOCUS, NAV_COLORS_BASE, NAV_COLORS_INACTIVE } from '../../lib/styles';

export default function EmailLink({ isFooterMenu, altText }: { isFooterMenu?: boolean; altText?: string; }) {
    return (
        <a
            className={clsx(
                'inline-block cursor-pointer',
                FOCUS,
                {
                    'p-3 underline': isFooterMenu,
                    [NAV_COLORS_INACTIVE]: isFooterMenu,
                    [NAV_COLORS_BASE]: isFooterMenu,
                    [ACTIVE_INNER_SHADOW]: isFooterMenu,
                    [CARD_EXTERNAL_LINK]: !isFooterMenu,
                    'focus-visible:underline': !isFooterMenu
                }
            )}
            onClick={(event) => {
                event.preventDefault();
                window.open('mailto:hello@jcortez.dev');
            }}>
            {altText || 'Email'}
        </a>
    );
}