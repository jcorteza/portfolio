'use client'

import { useState } from 'react';
import EmblemLink from './EmblemLink';
import InternalLinkMenu from './InternalLinkMenu';
import clsx from 'clsx';

export default function NavBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <div className={clsx(
            'w-full sm:relative sm:bg-transparent sm:flex sm:justify-center',
            {
                'fixed z-200 bg-press-bg': isMenuOpen
            }
        )}>
            <div className="relative max-w-5xl h-16 sm:h-19 w-full flex items-end justify-between">
                <EmblemLink closeMenuAction={() => setMenuOpen(false)} />
                <nav className={clsx(
                    'sm:bg-transparent sm:flex sm:relative sm:w-auto sm:flex-row sm:h-auto sm:top-0 sm:p-0 sm:justify-end sm:mr-5',
                    {
                        'bg-press-bg absolute w-full top-full h-[calc(100dvh-(--spacing(16)))] flex flex-col justify-center p-5': isMenuOpen,
                        'hidden': !isMenuOpen
                    }
                )}>   
                    <InternalLinkMenu isHeaderNav={true} closeMenuAction={() => setMenuOpen(false)} />
                </nav>
                <button
                    aria-label={`${isMenuOpen ? 'Close' : 'Open'} Nav Menu`}
                    aria-controls="navMenu"
                    aria-expanded={isMenuOpen}
                    className="sm:hidden mr-5 flex items-center gap-1 font-bold py-2 text-body-text"
                    onClick={() => setMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? 'Close' : 'Menu'}
                    {isMenuOpen ?
                        <svg aria-hidden xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="shrink-0 size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg> :
                        <svg aria-hidden xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="shrink-0 size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>}
                </button>
            </div>
        </div>
    );
}