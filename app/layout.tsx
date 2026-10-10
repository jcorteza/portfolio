import type { Metadata } from 'next';
import './globals.css';
import { ROLE } from './conts';
import NavBar from './_components/NavBar';
import Footer from './_components/Footer';
import { specialGoth, specialGothCond } from '../lib/styles';
import Script from 'next/script';

export const metadata: Metadata = {
    title: ROLE,
    description: `Learn about Josephine Cortez-Ayala, ${ROLE}`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${specialGoth.variable} ${specialGothCond.variable} h-full antialiased`}
            suppressHydrationWarning
        >
            <body className="min-h-full min-w-0 flex justify-center items-stretch">
                <Script strategy='beforeInteractive' src='/loadThemeSetting.mjs' />
                <div className="min-h-full min-w-0 flex flex-col gap-5 md:gap-10 w-5xl px-5 py-5">
                    <NavBar />
                    {children}
                    <hr aria-hidden />
                    <Footer />
                </div>
            </body>
        </html>
    );
}
