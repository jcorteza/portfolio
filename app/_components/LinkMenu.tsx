'use client'

import clsx from 'clsx';
import Link from 'next/link';
import { NAV_LINK_PADDING, NAV_COLORS_BASE, NAV_COLORS_ACTIVE, NAV_COLORS_INACTIVE, ACTIVE_INNER_SHADOW } from '../styles';
import { usePathname } from 'next/navigation';

const HOME = '/';
const PROJECTS = '/projects';
const CONTACT = '/contact';
const FOOTER_PADDING = 'inline-block p-3';

export default function LinkMenu({ isHeaderNav }: { isHeaderNav: boolean }) {
    const pathname = usePathname();
    return (
        <ul className={clsx(
            'flex text-brand-ink font-bold tracking-tight',
            {
                'gap-1 flex-col': !isHeaderNav,
                'gap-5': isHeaderNav
            }
        )}>
            <li>
                <Link
                    className={clsx(
                        isHeaderNav ? NAV_LINK_PADDING : FOOTER_PADDING,
                        NAV_COLORS_BASE,
                        ACTIVE_INNER_SHADOW,
                        pathname === HOME ? NAV_COLORS_ACTIVE : NAV_COLORS_INACTIVE,
                        {
                            'underline': pathname !== HOME && !isHeaderNav
                        }
                    )}
                    href={HOME}
                    prefetch={false}>
                    Home
                </Link>
            </li>
            <li>
                <Link
                    className={clsx(
                        isHeaderNav ? NAV_LINK_PADDING : FOOTER_PADDING,
                        NAV_COLORS_BASE,
                        ACTIVE_INNER_SHADOW,
                        pathname === PROJECTS ? NAV_COLORS_ACTIVE : NAV_COLORS_INACTIVE,
                        {
                            'underline': pathname !== PROJECTS && !isHeaderNav
                        }
                    )}
                    href={PROJECTS}>
                    Projects
                </Link>
            </li>
            <li>
                <Link
                    className={clsx(
                        isHeaderNav ? NAV_LINK_PADDING : FOOTER_PADDING,
                        NAV_COLORS_BASE,
                        ACTIVE_INNER_SHADOW,
                        pathname === CONTACT ? NAV_COLORS_ACTIVE : NAV_COLORS_INACTIVE,
                        {
                            'underline': pathname !== CONTACT && !isHeaderNav
                        }
                    )}
                    href={CONTACT}
                    prefetch={false}>
                    Contact
                </Link>
            </li>
        </ul>
    );
}