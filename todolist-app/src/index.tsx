import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import LanguageProvider from "./components/contexts/language/Language";



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
            <BrowserRouter>
                <LanguageProvider>
                    <App />
                </LanguageProvider>
            </BrowserRouter>
    </React.StrictMode>
);
