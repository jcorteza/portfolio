'use client'

import Footer from './_components/Footer';
import NavBar from './_components/NavBar';
import StatusCard from './_components/StatusCard';
import { Metadata } from 'next';
import './globals.css';
import { specialGoth, specialGothCond } from '../lib/styles';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Site Error',
  description: 'There was an unexpected site error.',
}

export default function GlobalError({
    error,
    retry
}: { 
    error: Error & { digest?: string }
    retry: () => void;
}) {
    return (
        <html
            lang="en"
            className={`${specialGoth.variable} ${specialGothCond.variable} h-full antialiased`}
            suppressHydrationWarning
        >
            <body className="min-h-full min-w-0 flex justify-center items-stretch">
                <Script strategy='beforeInteractive' src='/loadThemeSetting.mjs' />
                <div className="relative min-h-full min-w-0 flex flex-col gap-5 md:gap-10 w-5xl px-5 py-5">
                    <NavBar/>
                    <StatusCard status={500} retryAction={retry} />
                    <hr aria-hidden className="text-card-edge" />
                    <Footer />
                </div>
            </body>
        </html>
    )
}