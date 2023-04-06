import { useContext, useEffect } from 'react';
import { ThemeContext, themeOptions, Theme } from './Theme';
import './SwitchThemeButton.css';

function SwitchThemeButton() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <>
            {Object.entries(themeOptions).map(([key, color]) => (
                <button
                    key={key}
                    style={{ backgroundColor: color }}
                    onClick={() => setTheme(key as Theme)}
                    disabled={theme === key}
                    className={'color-button'}
                ></button>
            ))}
        </>
    );
}
export default SwitchThemeButton;
