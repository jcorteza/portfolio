import type { Metadata } from 'next';
import { Special_Gothic } from 'next/font/google';
import './globals.css';
import { ROLE } from './conts';
import NavBar from './_components/NavBar';
import Footer from './_components/Footer';

// const specialGothCond = Special_Gothic_Condensed_One({
//   variable: '--font-special-gothic-condensed',
//   weight:'400',
//   subsets: ['latin'],
//   fallback: ['Arial', 'Helvetica', 'sans-serif']
// });

const specialGoth = Special_Gothic({
  variable: '--font-special-gothic',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: ROLE,
  description: `Learn about Josephine Cortez-Ayala, ${ROLE}`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${specialGoth.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col gap-15 py-5">
        <NavBar />
        {children}
        <hr aria-hidden className='mx-35' />
        <Footer />
      </body>
    </html>
  );
}
