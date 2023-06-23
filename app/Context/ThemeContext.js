"use client"
import { createContext, useContext, useState, useEffect } from "react";

const themeContext = createContext();

export const useTheme = () => {
  const context = useContext(themeContext)
  return context;
}


export const ThemeProvider = ({ children }) => {

  const [isDarkMode, setIsDarkMode] = useState(null);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleChange);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <themeContext.Provider value={{
      isDarkMode,
      setIsDarkMode
    }} >
      {children}
    </themeContext.Provider>
  )
}
