import React, { useContext } from "react";
import { LanguageContext } from "./Language";

function SwitchLanguageButton() {
    const { locale, changeLang } = useContext(LanguageContext);

    const switchLanguage = () => {
        changeLang(locale === "en" ? "cs" : "en");
    };

    return <button onClick={switchLanguage}>Switch language</button>;
}

export default SwitchLanguageButton;