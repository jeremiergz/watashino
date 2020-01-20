import React, { createContext, PropsWithChildren, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme, Theme } from '../../../theme';

type ThemingManagerProps = PropsWithChildren<{}>;

const defaultMode = 'light';
const localStorageKey = 'theme.mode';

const ThemingManagerContext = createContext<{ mode: ThemeMode; theme: Theme; toggle: () => void }>({
  mode: defaultMode,
  theme: LightTheme,
  toggle: () => null,
});

function useTheming() {
  return useContext(ThemingManagerContext);
}

const ThemingManager = ({ children }: ThemingManagerProps) => {
  const isBrowser = typeof window !== 'undefined';
  const storedMode = (isBrowser && (localStorage.getItem(localStorageKey) as ThemeMode)) || defaultMode;
  const [mode, setMode] = useState<ThemeMode>(storedMode);
  const toggle = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    if (isBrowser) localStorage.setItem(localStorageKey, newMode);
  };
  const theme = mode === 'light' ? LightTheme : DarkTheme;
  return (
    <ThemingManagerContext.Provider value={{ mode, theme, toggle }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemingManagerContext.Provider>
  );
};

ThemingManager.displayName = 'ThemingManager';

export { useTheming };
export default ThemingManager;
