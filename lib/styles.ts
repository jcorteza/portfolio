import { Special_Gothic, Special_Gothic_Condensed_One } from 'next/font/google';

export const specialGothCond = Special_Gothic_Condensed_One({
  variable: '--font-special-gothic-condensed',
  weight:'400',
  subsets: ['latin'],
  fallback: ['Helvetica', 'Arial', 'sans-serif']
});

export const specialGoth = Special_Gothic({
    variable: '--font-special-gothic',
    subsets: ['latin'],
    fallback: ['Helvetica', 'Arial', 'sans-serif']
});

export const FOCUS = 'focus:outline-none focus-visible:outline-3 focus-visible:outline-focus-ring focus-visible:outline-offset-3';

export const DECORATIVE_TAG = 'w-fit bg-tag-bg px-3 py-1 inline-block text-tag-ink font-bold uppercase text-sm font-subtitle tracking-wide';

export const HOVER_INNER_SHADOW = 'hover:shadow-[inset_0_0_0_1px_var(--color-card-edge)]';
export const ACTIVE_INNER_SHADOW = 'active:shadow-[inset_0_0_0_1px_var(--color-card-edge)]';

export const NAV_COLORS_BASE = 'hover:bg-tag-bg active:bg-press-bg border';
export const NAV_COLORS_ACTIVE = 'bg-surface border-card-edge';
export const NAV_COLORS_INACTIVE = 'cursor-pointer border-transparent hover:border-card-edge active:border-card-edge';
export const NAV_LINK_PADDING = 'px-4 py-3 block';

export const CARD_BASE = 'min-w-0 bg-surface shadow-lg p-5 sm:p-10';
export const CARD_EXTERNAL_LINK = 'text-accent hover:text-accent-hover active:text-accent-active hover:underline active:underline';

export const PROJECT_SKILL_TAG = 'px-2 py-1 font-bold bg-tag-bg text-tag-ink text-sm font-title';

export const FORM_INPUT = 'min-w-0 border border-card-edge px-3 py-2';

export const TEXT = {
    cardTitle: 'uppercase font-title text-6xl',
    cardSubtitle: 'font-bold text-2xl'
};

export const THEME_BUTTON_STYLE = {
    active: 'cursor-default pointer-events-none bg-body-text text-surface',
    inactive: 'cursor-pointer bg-surface ext-body-text'
};