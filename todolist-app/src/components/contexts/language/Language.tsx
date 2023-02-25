import {createContext, useState} from "react";
import {IntlProvider} from "react-intl";
import  messagesEn from './locales.en.json';
import  messagesCs from './locales.cs.json';

type LanguageContextType = {
    locale: string;
    changeLang: (newValue: string) => void;
};

export const LanguageContext = createContext<LanguageContextType>({
    locale: "en",
    changeLang: (newValue: string) => {},
});

type languageProps = {
    children: React.ReactNode
}


function LanguageProvider(props: languageProps) {
    const [locale, setLocale] = useState("en");

    const changeLang = (newValue: string) => {
        setLocale(newValue);
    };

    return (
        <LanguageContext.Provider value={{ locale, changeLang }}>
            <IntlProvider
                locale={locale}
                messages={locale === "en" ? messagesEn : messagesCs}
                defaultLocale={"en"}
            >
                {props.children}
            </IntlProvider>
        </LanguageContext.Provider>
    );
}

export default LanguageProvider;