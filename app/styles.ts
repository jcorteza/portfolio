import clsx from "clsx";

export const PAGE_PADDING_X = 'px-35';

export const HOVER_INNER_SHADOW = 'hover:shadow-[inset_0_0_0_1px_var(--color-brand-ink)]';
export const ACTIVE_INNER_SHADOW = 'active:shadow-[inset_0_0_0_1px_var(--color-brand-ink)]';

export const NAV_COLORS_BASE = 'hover:bg-brand-mint active:bg-press-bg border';
export const NAV_COLORS_ACTIVE = 'bg-white border-brand-ink';
export const NAV_COLORS_INACTIVE = 'cursor-pointer border-transparent hover:border-brand-ink active:border-brand-ink';
export const NAV_LINK_PADDING = 'px-4 py-3 block';

export const CARD_BASE = 'bg-white shadow-lg p-10';
export const CARD_EXTERNAL_LINK_MENU = 'text-accent hover:text-accent-hover active:text-accent-active hover:underline active:underline';

export const FORM_INPUT = clsx('border border-brand-ink px-3 py-2', HOVER_INNER_SHADOW);

export const TEXT = {
    cardTitle: 'uppercase font-bold font-[var(--font-title),_sans-serif] tracking-tighter text-5xl',
    cardSubtitle: 'font-bold font-[var(--font-title),_sans-serif] tracking-tighter text-2xl'
};

export const THEME_BUTTON_STYLE = {
    active: 'cursor-default pointer-events-none bg-brand-ink text-white',
    inactive: 'cursor-pointer bg-white text-brand-ink'
};