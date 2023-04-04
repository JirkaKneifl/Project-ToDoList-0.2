import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import LanguageProvider from './components/contexts/language/Language';
import ThemeProvider from './components/contexts/theme/Theme';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = '214225127993-gdge2v3ad1da01k1qd9aqnft1phgu0pn.apps.googleusercontent.com' || '';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <GoogleOAuthProvider clientId={clientId}>
                <LanguageProvider>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </LanguageProvider>
            </GoogleOAuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
