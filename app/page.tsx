import clsx from "clsx";
import HeroActions from "./_components/HeroActions";
import { CARD_BASE, PAGE_PADDING_X, TEXT } from "./styles";
import ContactForm from "./contact/_components/ContactForm";

export default function Home() {
    return (
        <main className={clsx('relative grow flex flex-col justify-between gap-10', PAGE_PADDING_X)}>
            <div className={clsx(
                'sticky inset-0 grow flex flex-col justify-end gap-5 h-[80svh]',
                {
                    'opacity-0': true
                }
            )}>
                <h1 className="w-fit bg-brand-mint px-3 py-1 inline-block text-brand-forest font-bold uppercase text-sm">Josephine Cortez-Ayala</h1>
                <h2 className="text-brand-ink text-9xl uppercase tracking-tighter font-bold font-[var(--font-title),_sans-serif]">Full-Stack Software Engineer</h2>
                <p className="text-brank-ink text-lg w-1/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <HeroActions />
            </div>
            <div className={clsx(CARD_BASE, 'flex flex-col gap-10')}>
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
                <form className="flex flex-col gap-3 text-brand-ink">
                    <h2 className={TEXT.cardTitle}>Contact</h2>
                    <ContactForm />
                </form>
            </div>
        </main>
    );
}