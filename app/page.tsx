import clsx from 'clsx';
import HeroActions from './_components/HeroActions';
import { CARD_BASE, DECORATIVE_TAG, TEXT } from '../lib/styles';
import ContactForm from './contact/_components/ContactForm';

export default function Home() {
    return (
        <main className="relative grow flex flex-col justify-between gap-3 sm:gap-5 md:gap-10">
            <div className="sticky top-17 md:top-19 grow flex flex-col justify-end h-[calc(100svh-(--spacing(35)))] md:h-[calc(100svh-(--spacing(80)))]">
                <div className="hero-fade flex flex-col gap-2 sm:gap-3 md:gap-5">
                    <h1 className="flex flex-col gap-2 sm:gap-3 md:gap-5">
                        <div className={DECORATIVE_TAG}>Josephine Cortez-Ayala</div>
                        <div className="text-body-text text-[12dvh] leading-[12dvh] md:text-[8.5rem] md:leading-26 uppercase font-title">Full-Stack Software Engineer</div>
                    </h1>
                    <p className="text-brank-ink text-lg w-full md:w-1/2 leading-5.5 sm:leading-6 md:leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <HeroActions />
                </div>
            </div>
            <div className={clsx(CARD_BASE, 'relative z-10 flex flex-col gap-10')}>
                <div className="w-full flex gap-5">
                    <div className="flex flex-col gap-3 text-body-text">
                        <h2 className={TEXT.cardTitle}>About</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </div>
                    {/* <div className="border w-md">where image would go</div> */}
                </div>
                <hr aria-hidden />
                <div className="flex flex-col gap-3 text-body-text">
                    <h2 className={TEXT.cardTitle}>Contact</h2>
                    <ContactForm />
                </div>
            </div>
        </main>
    );
}