import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';

export type Theme = keyof typeof themeOptions;

type themeProviderProps = {
    children: React.ReactNode;
};

type ThemeState = {
    theme: Theme;
    setTheme: (value: Theme) => void;
};

export const ThemeContext = createContext<ThemeState>({
    theme: 'green',
    setTheme: (value: Theme) => {},
});

export const themeOptions = {
    green: '#67AB47',
    blue: '#3F51B5',
    orange: '#FF5722',
    purple: '#9C27B0',
    yellow: '#FFC107',
    pink: '#E91E63',
} as const;

function ThemeProvider(props: themeProviderProps) {
    const [theme, setTheme] = useState<Theme>('green');

    function setThemeAndSave(value: Theme) {
        localStorage.setItem('theme', value);
        setTheme(value);
    }

    useEffect(() => {
        if (localStorage.getItem('access_token')) {
            localStorage.getItem('theme') && setTheme(localStorage.getItem('theme') as Theme);
        }
    }, []);

    useEffect(() => {
        document.documentElement.style.setProperty('--primary-color', themeOptions[theme]);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme: setThemeAndSave }}>
            {props.children}
        </ThemeContext.Provider>
    );
}
export default ThemeProvider;
