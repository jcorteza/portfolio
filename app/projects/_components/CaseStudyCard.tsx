import clsx from 'clsx';
import { CARD_BASE, DECORATIVE_TAG } from '../../../lib/styles';

export default function CaseStudyCard({ children, cardNo }: { children: React.ReactNode; cardNo: string; }) {
    return (
        <li className={clsx(CARD_BASE, 'flex flex-col gap-4')}>
            <div aria-hidden className={DECORATIVE_TAG}>{cardNo}</div>
            {children}
        </li>
    );
}