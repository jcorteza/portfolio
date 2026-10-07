import clsx from "clsx";
import HeroActions from "./_components/HeroActions";
import { CARD_BASE, DECORATIVE_TAG, TEXT } from "../utils/styles";
import ContactForm from "./contact/_components/ContactForm";

export default function Home() {
    return (
        <main className={clsx('relative grow flex flex-col justify-between gap-10')}>
            <div className={clsx(
                'sticky top-[10svh] grow flex flex-col justify-end gap-5 h-[80svh]',
                {
                    'opacity-0': false
                }
            )}>
                <div className="hero-fade">
                    <h1>
                        <div className={DECORATIVE_TAG}>Josephine Cortez-Ayala</div>
                        <div className="text-brand-ink text-9xl uppercase tracking-tighter font-bold font-[var(--font-title),_sans-serif]">Full-Stack Software Engineer</div>
                    </h1>
                    <p className="text-brank-ink text-lg w-1/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <HeroActions />
                </div>
            </div>
            <div className={clsx(CARD_BASE, 'relative z-10 flex flex-col gap-10')}>
                <div className="w-full flex gap-5">
                    <div className="flex flex-col gap-3 text-brand-ink">
                        <h2 className={TEXT.cardTitle}>About</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </div>
                    <div className="border w-md">where image would go</div>
                </div>
                <hr aria-hidden />
                <div className="flex flex-col gap-3 text-brand-ink">
                    <h2 className={TEXT.cardTitle}>Contact</h2>
                    <ContactForm />
                </div>
            </div>
        </main>
    );
}