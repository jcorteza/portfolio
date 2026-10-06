'use client'

import clsx from 'clsx';
import { NAV_LINK_PADDING, NAV_COLORS_BASE, ACTIVE_INNER_SHADOW, THEME_BUTTON_STYLE } from '../styles';
import { useState } from 'react';

enum ThemeOption {
    DEFAULT = 'default',
    LIGHT = 'light',
    DARK = 'dark'
}

const THEME_SETTING = 'theme';

export default function ThemeSettings() {
    if (typeof window === 'undefined') {
        return null;
    }

    const [themeState, setThemeState] = useState(localStorage.getItem(THEME_SETTING) || ThemeOption.DEFAULT);
    const isDefaultTheme = themeState === ThemeOption.DEFAULT;
    const isLightTheme = themeState === ThemeOption.LIGHT;
    const isDarkTheme = themeState === ThemeOption.DARK;

    return(
        <div className="flex flex-col gap-1 font-bold">
            <div className="text-sm uppercase">Theme</div>
            <ul className="w-fit inline-flex border border-brand-ink rounded-sm tracking-tight not-last">
                <li className="border-r border-brand-ink">
                        <button
                            aria-disabled={isDefaultTheme}
                            tabIndex={isDarkTheme ? -1 : undefined}
                            onClick={() => {
                                setThemeState(ThemeOption.DEFAULT);
                                localStorage.setItem(THEME_SETTING, ThemeOption.DEFAULT);
                            }}
                            className={clsx(
                                NAV_LINK_PADDING,
                                NAV_COLORS_BASE,
                                ACTIVE_INNER_SHADOW,
                                {
                                    [THEME_BUTTON_STYLE.active]: isDefaultTheme,
                                    [THEME_BUTTON_STYLE.inactive]: !isDefaultTheme
                                }
                            )}>
                            System
                        </button>
                </li>
                <li className="border-r border-brand-ink">
                    <button
                        aria-disabled={isLightTheme}
                        tabIndex={isLightTheme ? -1 : undefined}
                        onClick={() => {
                            setThemeState(ThemeOption.LIGHT);
                            localStorage.setItem(THEME_SETTING, ThemeOption.LIGHT);
                        }}
                        className={clsx(
                            NAV_LINK_PADDING,
                            NAV_COLORS_BASE,
                            ACTIVE_INNER_SHADOW,
                            {
                                [THEME_BUTTON_STYLE.active]: isLightTheme,
                                [THEME_BUTTON_STYLE.inactive]: !isLightTheme
                            }
                        )}>
                        Light
                    </button>
                </li>
                <li>
                    <button
                        aria-disabled={isDarkTheme}
                        tabIndex={isDarkTheme ? -1 : undefined}
                        onClick={() => {
                            setThemeState(ThemeOption.DARK);
                            localStorage.setItem(THEME_SETTING, ThemeOption.DARK);
                        }}
                        className={clsx(
                            NAV_LINK_PADDING,
                            NAV_COLORS_BASE,
                            ACTIVE_INNER_SHADOW,
                            {
                                [THEME_BUTTON_STYLE.active]: isDarkTheme,
                                [THEME_BUTTON_STYLE.inactive]: !isDarkTheme
                            }
                        )}>
                        Dark
                    </button>
                </li>
            </ul>
        </div>
    );
}