import { useState, useEffect } from 'react'

type AvailableTheme = 'light' | 'dark'

export const useThemeMode = () => {
  const localTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState<AvailableTheme>('light');

  const setMode = (mode: AvailableTheme) => {
    localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light')
  }

  useEffect(() => {
    localTheme && setMode(localTheme as AvailableTheme);
  }, [localTheme]);

  return { theme, themeToggler };
}