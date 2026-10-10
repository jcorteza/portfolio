import clsx from 'clsx';
import { CARD_BASE, TEXT } from '../../lib/styles';
import ExternalLinkMenu from '../_components/ExternalLinkMenu';
import ContactForm from './_components/ContactForm';

export default function Contact() {
    const ExternalLinks = (
        <>
            <h2 className={TEXT.cardSubtitle}>Prefer to skip the form?</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <ExternalLinkMenu isFooterMenu={false} />
        </>
    );

    return (
        <main className="">
            <div className={clsx(CARD_BASE, 'flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-10 text-body-text')}>
                <div className='min-w-0 shrink flex flex-col justify-stretch gap-5'>
                    <div className='grow flex flex-col gap-3'>
                        <h1 className={TEXT.cardTitle}>Contact</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <hr aria-hidden />
                    <div className='hidden min-w-0 shrink md:flex flex-col gap-3'>
                        {ExternalLinks}
                    </div>
                </div>
                <ContactForm />
                <div className='md:hidden min-w-0 shrink flex flex-col gap-3'>
                    {ExternalLinks}
                </div>
            </div>
        </main>
    )
}