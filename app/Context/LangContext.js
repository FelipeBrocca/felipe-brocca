"use client"
import { createContext, useContext, useState } from "react";

const langContext = createContext();

export const useLang = () => {
    const context = useContext(langContext)
    return context
}

export const LangProvider = ({ children }) => {
    
    
    const [language, setLanguage] = useState('es')

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage)
    }

    return (
        <langContext.Provider
            value={{
                language,
                changeLanguage
            }}
        >
            {children}
        </langContext.Provider>
    )
}