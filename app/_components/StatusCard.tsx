'use client'

import clsx from 'clsx';
import Link from 'next/link';
import Button from '../../components/Button';
import { CARD_BASE, TEXT, CARD_EXTERNAL_LINK } from '../../lib/styles';
import { useRouter } from 'next/navigation';

type Props = {
    retryAction?: () => void;
    status: number;
}
export default function ErrorCard({ retryAction, status }: Props) {
    const router = useRouter();

    const title = status === 500 ? 'Something went wrong' : status === 404 ? 'Page not found' : '';
    const explanation = status === 500 ? 'The problem is on my end.' : status === 404 ? 'You\'ve found a page I haven\'t built yet.': '';
    const tellMeAboutIt = status === 500 ? 'Retried but still won\'t work?' : status === 404 ? 'Followed a broken link?' : '';

    const handleUrlChange = (url: string) => {
        router.replace(url);
        router.refresh();
    };
 
    return (
        <main className={clsx(CARD_BASE, 'flex flex-col sm:flex-row sm:justify-between sm:items-end')}>
            <div className='md:max-w-[40%] flex flex-col gap-4 text-brand-ink'>
                <h1 className='w-fit inline-block font-bold uppercase text-sm font-[var(--font-title),_sans-serif] tracking-tight'>{`Error ${status}`}</h1>
                <p className={TEXT.cardTitle}>{title}</p>
                <p>{explanation}</p>
                <div className='flex flex-col sm:flex-row gap-3'>
                    {status === 500 && retryAction && <Button handleClickAction={retryAction}>Try again</Button>}
                    <Button handleClickAction={() => handleUrlChange('/')} isSecondaryAction={status === 500 && !!retryAction}>Back to home</Button>
                    {(status === 404 || !retryAction) && <Button handleClickAction={() => handleUrlChange('/projects')} isSecondaryAction >See my projects</Button>}
                </div>
                <p>{tellMeAboutIt}&nbsp;<Link prefetch={false} className={clsx(CARD_EXTERNAL_LINK, 'font-bold')} href='/contact'>Let me know.</Link></p>
            </div>
            <div aria-hidden className="hidden md:block text-ink-muted text-[20vh] font-bold tracking-tighter leading-none">{status}</div>
        </main>
    );
}