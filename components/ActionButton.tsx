'use client'

import clsx from "clsx";
import { ACTIVE_INNER_SHADOW, FOCUS, NAV_LINK_PADDING } from "../lib/styles";

type Props = {
    isActive?: boolean;
    isInline?: boolean;
    disableActive?: boolean;
    handleClickAction: () => void;
    children: React.ReactNode;
}
export default function ActionButton({ isActive, isInline, disableActive, handleClickAction, children }: Props) {
    return (
        <button
            aria-disabled={disableActive && isActive}
            aria-pressed={isActive}
            type="button"
            className={clsx(
                'shrink-0 w-fit flex items-center px-4 py-2 font-bold cursor-pointer leading-none',
                FOCUS,
                NAV_LINK_PADDING,
                ACTIVE_INNER_SHADOW,
                {
                    'bg-surface hover:bg-tag-bg active:bg-brand-sage text-body-text': !isActive,
                    'bg-body-text text-surface': isActive,
                    'border border-card-edge rounded-sm ': !isInline
                }
            )}
            onClick={handleClickAction}>
            {children}
        </button>
    );
}