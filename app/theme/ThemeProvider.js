import React, { createContext, useState } from 'react';

// Criação do contexto
export const ThemeContext = createContext();

// Provedor do Tema
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const lightTheme = {
    backgroundColor: '#ffffff',
    color: '#000000',
  };

  const darkTheme = {
    backgroundColor: '#121212',
    color: '#ffffff',
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ theme: isDarkMode ? darkTheme : lightTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
