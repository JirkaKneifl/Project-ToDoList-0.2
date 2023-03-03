import {useContext, useEffect} from "react";
import {ThemeContext, themeOptions} from "./Theme";
import {FormattedMessage} from "react-intl";
import "./SwitchThemeButton.css";


function SwitchThemeButton(){
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() =>{
        const savedTheme = localStorage.getItem("theme");
        if(savedTheme && Object.keys(themeOptions).includes(savedTheme)){
            setTheme(savedTheme);
        }
    }, []);

    const handleThemeChange = (newTheme: string) => {
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }

    return(
        <>
            {Object.entries(themeOptions).map(([key, color]) => (
                <button
                    key={key}
                    style={{ backgroundColor: color }}
                    onClick={() => handleThemeChange(key)}
                    disabled={theme === key}
                    className={"color-button"}
                ></button>
            ))}
        </>
    );
}

export default SwitchThemeButton;