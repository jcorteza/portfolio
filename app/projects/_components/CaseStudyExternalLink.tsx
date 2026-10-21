import clsx from "clsx";
import { CARD_EXTERNAL_LINK, CARD_DIVIDER } from "../../../lib/styles";

export enum LinkType {
    UPDATE = 'Update',
    DEEP_DIVE = 'Deep dive'
}

type Props = {
    type: LinkType;
    date: string;
    children: React.ReactNode;
    href: string;
}

export default function CaseStudyExternalLink({ type, date, children, href }: Props) {
    return (
        <li className="w-full min-w-0 flex flex-col gap-2">
            <div className="w-full min-w-0 flex flex-col sm:flex-row sm:gap-5 sm:justify-between truncate">
                <a target="_blank" href={href} className={clsx(CARD_EXTERNAL_LINK, 'font-bold underline py-3')}>{children}</a>
                <div className="flex gap-4 text-sm items-center">
                    <p className="w-fit h-fit bg-tag-bg px-3 py-1 text-tag-ink font-bold font-subtitle">{type}</p>
                    <p className="text-body-text">{date}</p>
                </div>
            </div>
            <hr aria-hidden className={CARD_DIVIDER} />
        </li>
    );
}