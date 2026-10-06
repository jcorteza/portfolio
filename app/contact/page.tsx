import clsx from 'clsx';
import { CARD_BASE, PAGE_PADDING_X, TEXT } from '../styles';
import ExternalLinkMenu from '../_components/ExternalLinkMenu';
import ContactForm from './_components/ContactForm';

export default function Contact() {
    return (
        <main className={clsx(PAGE_PADDING_X)}>
            <div className={clsx(CARD_BASE, 'grid grid-cols-2 gap-10 text-brand-ink')}>
                <div className='flex flex-col justify-stretch gap-5'>
                    <div className='grow flex flex-col gap-3'>
                        <h2 className={TEXT.cardTitle}>Contact</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <hr />
                    <div className='flex flex-col gap-3'>
                        <h3 className={TEXT.cardSubtitle}>Prefer to skip the form?</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <ExternalLinkMenu isFooterMenu={false} />
                    </div>
                </div>
                <ContactForm />
            </div>
        </main>
    )
}