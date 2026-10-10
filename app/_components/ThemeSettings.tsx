'use client'

import { useEffect, useState } from 'react';
import ActionButton from '../../components/ActionButton';

enum ThemeOption {
    LIGHT = 'light',
    DARK = 'dark'
}

const THEME_SETTING = 'theme';

export default function ThemeSettings() {
    const [themeState, setThemeState] = useState<ThemeOption>();
    const isDefaultTheme = !themeState;
    const isLightTheme = themeState === ThemeOption.LIGHT;
    const isDarkTheme = themeState === ThemeOption.DARK;

    useEffect(() => {
        const theme = localStorage.getItem(THEME_SETTING);
        if (theme) {
            setThemeState(ThemeOption[theme.toUpperCase() as keyof typeof ThemeOption]);
        }
    }, []);

    const updateTheme = (newTheme?: ThemeOption) => {
        if (newTheme === themeState) {
            return;
        }

        const htmlClasses = document.getElementsByTagName('html')[0].classList;
        if (htmlClasses.contains(ThemeOption.DARK)) htmlClasses.remove(ThemeOption.DARK);
        if (htmlClasses.contains(ThemeOption.LIGHT)) htmlClasses.remove(ThemeOption.LIGHT);

        if (!newTheme) {
            setThemeState(undefined);
            localStorage.removeItem(THEME_SETTING);
            return;
        }

        setThemeState(newTheme);
        localStorage.setItem(THEME_SETTING, newTheme);
        htmlClasses.add(newTheme);
    };

    return(
        <div className="flex flex-col gap-1">
            <div className="text-sm uppercase font-bold">Theme</div>
            <ul className="w-fit inline-flex border border-card-edge not-last">
                <li className="border-r border-card-edge">
                    <ActionButton
                        isActive={isDefaultTheme}
                        isInline
                        disableActive
                        handleClickAction={() => updateTheme()}>
                        System
                    </ActionButton>
                </li>
                <li className="border-r border-card-edge">
                    <ActionButton
                        isActive={isLightTheme}
                        isInline
                        disableActive
                        handleClickAction={() => updateTheme(ThemeOption.LIGHT)}>
                        Light
                    </ActionButton>
                </li>
                <li>
                    <ActionButton
                        isActive={isDarkTheme}
                        isInline
                        disableActive
                        handleClickAction={() => updateTheme(ThemeOption.DARK)}>
                        Dark
                    </ActionButton>
                </li>
            </ul>
        </div>
    );
}