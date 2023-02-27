import {useContext} from "react";
import {ThemeContext, themeOptions} from "./Theme";


function SwitchThemeButton(){
    const { theme, setTheme } = useContext(ThemeContext);


    return(
        <>
            {Object.entries(themeOptions).map(([key, color]) => (
                <button
                    key={key}
                    style={{ backgroundColor: color }}
                    onClick={() => setTheme(key)}
                    disabled={theme === key}
                >
                    {key}
                </button>
            ))}
        </>
    );
}

export default SwitchThemeButton;