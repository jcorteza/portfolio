'use client'

import { specialGoth, specialGothCond } from '../lib/styles';
import Footer from './_components/Footer';
import NavBar from './_components/NavBar';
import StatusCard from './_components/StatusCard';
import './globals.css';
import Script from 'next/script';

export default function GlobalNotfound() {
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
                    <StatusCard status={404} />
                    <hr aria-hidden className="text-card-edge" />
                    <Footer />
                </div>
            </body>
        </html>
    )
}