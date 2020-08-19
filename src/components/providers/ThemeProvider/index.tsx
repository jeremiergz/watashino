import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme, Theme } from 'theme';

const defaultMode = 'light';
const localStorageKey = 'theme:mode';

const ThemeContext = createContext<{ mode: ThemeMode; theme: Theme; toggle: () => void }>({
  mode: defaultMode,
  theme: LightTheme,
  toggle: () => null,
});

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const isBrowser = typeof window !== 'undefined';
  const [isInitialized, setIsInitialized] = useState(false);
  const [mode, setMode] = useState<ThemeMode>(defaultMode);
  const toggle = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
  };
  const theme = mode === 'light' ? LightTheme : DarkTheme;
  useEffect(() => {
    if (isBrowser && isInitialized) localStorage.setItem(localStorageKey, mode);
  }, [mode]);
  useEffect(() => {
    const storedMode = (isBrowser && (localStorage.getItem(localStorageKey) as ThemeMode)) || defaultMode;
    setMode(storedMode);
    setIsInitialized(true);
  }, []);
  return (
    <ThemeContext.Provider value={{ mode, theme, toggle }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeProvider.displayName = 'ThemeProvider';

/**
 * Returns the theming context that allows retrieval of theme & toggling theme mode.
 */
function useTheming() {
  return useContext(ThemeContext);
}

export { useTheming };
export type ThemeProviderProps = PropsWithChildren<{}>;
export default ThemeProvider;
