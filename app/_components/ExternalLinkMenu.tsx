import clsx from 'clsx';
import { NAV_COLORS_INACTIVE, NAV_COLORS_BASE, ACTIVE_INNER_SHADOW, CARD_EXTERNAL_LINK, FOCUS } from '../../lib/styles';

export default function ExternalLinkMenu({ isFooterMenu }: { isFooterMenu: boolean }) {
    return (
        <ul className={clsx(
            'flex flex-col font-bold',
            {
                'gap-3': !isFooterMenu
            }
        )}>
            <li>
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
                    href='https://github.com/jcorteza'
                    target="_blank">
                    Github
                </a>
            </li>
            <li>
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
                    href='https://www.linkedin.com/in/josephine-cortez-ayala/'
                    target="_blank">
                    LinkedIn
                </a>
            </li>
            <li>
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
                    href='mailto:josephinecrtz@yahoo.com'
                    target="_blank">
                    Email
                </a>
            </li>
        </ul>
    );
}