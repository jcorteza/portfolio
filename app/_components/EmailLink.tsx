'use client'

import clsx from 'clsx';
import { ACTIVE_INNER_SHADOW, CARD_EXTERNAL_LINK, FOCUS, NAV_COLORS_BASE, NAV_COLORS_INACTIVE } from '../../lib/styles';

export default function EmailLink({ isFooterMenu }: { isFooterMenu?: boolean }) {
    return (
        <a
            className={clsx(
                'inline-block',
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
                window.open('mailto:josephinecrtza+portfolio@gmail.com');
            }}>
            Email
        </a>
    );
}