import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';

type themeProviderProps = {
    children: React.ReactNode;
};

type Theme = {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>> | ((value: string) => void);
};

export const ThemeContext = createContext<Theme | null>(null);

export const themeOptions: { [key: string]: string } = {
    green: '#67AB47',
    blue: '#3F51B5',
    orange: '#FF5722',
    purple: '#9C27B0',
    yellow: '#FFC107',
    pink: '#E91E63',
};

function ThemeProvider(props: themeProviderProps) {
    const [theme, setTheme] = useState('green');

    useEffect(() => {
        document.documentElement.style.setProperty('--primary-color', themeOptions[theme]);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>{props.children}</ThemeContext.Provider>
    );
}
export default ThemeProvider;
