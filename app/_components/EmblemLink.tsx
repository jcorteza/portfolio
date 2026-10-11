import Link from 'next/link';
import clsx from 'clsx';
import { ACTIVE_INNER_SHADOW, FOCUS, NAV_COLORS_BASE, NAV_COLORS_INACTIVE } from '../../lib/styles';
import Emblem from './Emblem';

export default function EmblemLink({ isForFooter, closeMenuAction }: { isForFooter?: boolean; closeMenuAction?: () => void; }) {
    return (
        <Link href="/" prefetch={false} className={clsx(
            'w-fit inline-block px-2',
            FOCUS,
            NAV_COLORS_BASE,
            ACTIVE_INNER_SHADOW,
            NAV_COLORS_INACTIVE,
            {
                'ml-5': !isForFooter
            }
        )}
        onClick={closeMenuAction}>
            <Emblem isForFooter={isForFooter} />
        </Link>
    );
}