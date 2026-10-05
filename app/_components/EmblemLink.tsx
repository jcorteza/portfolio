import Link from 'next/link';
import Image from 'next/image';
import emblem from '../jc-emblem-outline.png';
import emblemNight from '../jc-emblem-outline-night.png';
import clsx from 'clsx';
import { ACTIVE_INNER_SHADOW, NAV_COLORS_BASE, NAV_COLORS_INACTIVE } from '../styles';
 
export default function EmblemLink({  widthNHeight }: { widthNHeight?: number }) {
    return (
        <Link href="/" prefetch={false} className={clsx('w-fit inline-block px-2', NAV_COLORS_BASE, ACTIVE_INNER_SHADOW, NAV_COLORS_INACTIVE)}>
            <Image loading='eager' className='dark:hidden' src={emblem} alt='Homepage' width={widthNHeight ?? 50} height={widthNHeight ?? 50} />
            <Image loading='eager' className='not-dark:hidden' src={emblemNight} alt='Homepage' />
        </Link>
    );
}