import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import LanguageProvider from './components/contexts/language/Language';
import ThemeProvider from './components/contexts/theme/Theme';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;

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
