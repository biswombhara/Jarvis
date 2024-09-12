import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import { ThemeProvider } from "@material-tailwind/react";
import ContextProvider from './context/Context.jsx';

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ThemeProvider>
)
