import React, { useContext } from 'react';
import { LanguageContext } from './Language';
import { FormattedMessage } from 'react-intl';

function SwitchLanguageButton() {
    const { locale, changeLang } = useContext(LanguageContext);

    const switchLanguage = () => {
        changeLang(locale === 'en' ? 'cs' : 'en');
    };

    return (
        <button onClick={switchLanguage}>
            <FormattedMessage id={'label.switchLanguage'}></FormattedMessage>
        </button>
    );
}
export default SwitchLanguageButton;
