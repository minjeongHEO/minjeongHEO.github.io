'use client';

import { FC, ReactNode, useEffect, useState, createContext } from 'react';

interface DarkModeProviderProps {
  children: ReactNode;
}

interface DarkModeContextProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const defaultValue: DarkModeContextProps = {
  isDarkMode: false,
  toggleDarkMode: () => {},
};

export const DarkModeContext = createContext<DarkModeContextProps>(defaultValue);

const initTheme = (): boolean => {
  if (typeof window === 'undefined') return false;

  const savedTheme = localStorage.getItem('theme');
  return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export const DarkModeProvider: FC<DarkModeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(initTheme());
  const toggleDarkMode = () => setIsDarkMode((mode) => !mode);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const darkModeType = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', darkModeType);
    document.body.className = darkModeType;
  }, [isDarkMode]);

  return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
};
