import React, { createContext, FunctionComponent, PropsWithChildren, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme, Theme } from '../../../theme';

const defaultMode = 'light';
const localStorageKey = 'theme.mode';

const ThemingManagerContext = createContext<{ mode: ThemeMode; theme: Theme; toggle: () => void }>({
  mode: defaultMode,
  theme: LightTheme,
  toggle: () => null,
});

const ThemingManager: FunctionComponent<ThemingManagerProps> = ({ children }) => {
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

/**
 * Returns the theming context that allows retrieval of theme & toggling theme mode.
 */
function useTheming() {
  return useContext(ThemingManagerContext);
}

export { useTheming };
export type ThemingManagerProps = PropsWithChildren<{}>;
export default ThemingManager;
