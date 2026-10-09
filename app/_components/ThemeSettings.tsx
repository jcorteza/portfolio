'use client'

import clsx from 'clsx';
import { NAV_LINK_PADDING, NAV_COLORS_BASE, ACTIVE_INNER_SHADOW, THEME_BUTTON_STYLE, FOCUS } from '../../lib/styles';
import { useEffect, useState } from 'react';
import ActionButton from '../../components/ActionButton';

enum ThemeOption {
    DEFAULT = 'default',
    LIGHT = 'light',
    DARK = 'dark'
}

const THEME_SETTING = 'theme';

export default function ThemeSettings() {
    const [themeState, setThemeState] = useState(ThemeOption.DEFAULT);
    const isDefaultTheme = themeState === ThemeOption.DEFAULT;
    const isLightTheme = themeState === ThemeOption.LIGHT;
    const isDarkTheme = themeState === ThemeOption.DARK;

    useEffect(() => {
        const theme = localStorage.getItem(THEME_SETTING);
        if (theme) {
            setThemeState(theme as ThemeOption);
        }
    }, []);

    return(
        <div className="flex flex-col gap-1">
            <div className="text-sm uppercase font-bold">Theme</div>
            <ul className="w-fit inline-flex border border-brand-ink not-last">
                <li className="border-r border-brand-ink">
                    <ActionButton
                        isActive={isDefaultTheme}
                        isInline
                        disableActive
                        handleClickAction={() => {
                            setThemeState(ThemeOption.DEFAULT);
                            localStorage.setItem(THEME_SETTING, ThemeOption.DEFAULT);
                        }}>
                        System
                    </ActionButton>
                </li>
                <li className="border-r border-brand-ink">
                    <ActionButton
                        isActive={isLightTheme}
                        isInline
                        disableActive
                        handleClickAction={() => {
                            setThemeState(ThemeOption.LIGHT);
                            localStorage.setItem(THEME_SETTING, ThemeOption.LIGHT);
                        }}>
                        Light
                    </ActionButton>
                </li>
                <li>
                    <ActionButton
                        isActive={isDarkTheme}
                        isInline
                        disableActive
                        handleClickAction={() => {
                            setThemeState(ThemeOption.DARK);
                            localStorage.setItem(THEME_SETTING, ThemeOption.DARK);
                        }}>
                        Dark
                    </ActionButton>
                </li>
            </ul>
        </div>
    );
}