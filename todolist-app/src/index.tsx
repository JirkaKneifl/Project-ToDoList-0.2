import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import LanguageProvider from "./components/contexts/language/Language";
import ThemeProvider from "./components/contexts/theme/Theme";




const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
            <BrowserRouter>
                <LanguageProvider>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </LanguageProvider>
            </BrowserRouter>
    </React.StrictMode>
);
