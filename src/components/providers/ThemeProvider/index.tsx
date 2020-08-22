import { graphql, useStaticQuery } from 'gatsby';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Theme as StyledTheme } from 'styled-system';

const GlobalStyle = createGlobalStyle`
    html, body {
      background-color: ${({ theme }: { theme: Theme }) => theme.background};
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
      transition: background-color 250ms ease;
    }
    body {
      color: ${({ theme }: { theme: Theme }) => theme.colors.text};
      font-family: ${({ theme }: { theme: Theme }) => theme.fonts.main};
      font-weight: ${({ theme }: { theme: Theme }) => theme.fontWeights.regular};
    }
    #___gatsby {
      position: relative;
      min-height: 100%;
    }
    /* Format Markdown images loaded by gatsby-remark-images */
    .gatsby-resp-image-wrapper {
      .gatsby-resp-image-background-image, .gatsby-resp-image-image {
        border-radius: 8px;
      }
    }
    .grvsc-container {
      text-align: left;
    }
`;

const breakpoints = ['320px', '375px', '425px', '768px', '1024px', '1200px', '1440px', '2560px'];
Object.defineProperties(breakpoints, {
  mobileS: { value: breakpoints[0] },
  mobileM: { value: breakpoints[1] },
  mobileL: { value: breakpoints[2] },
  tablet: { value: breakpoints[3] },
  laptopS: { value: breakpoints[4] },
  laptopM: { value: breakpoints[5] },
  laptopL: { value: breakpoints[6] },
  desktop: { value: breakpoints[7] },
});

const defaultMode = 'light';
const isBrowser = typeof window !== 'undefined';
const localStorageKey = 'theme:mode';

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({ theme: null, toggle: () => null });

const ThemeProvider: React.FC = ({ children }) => {
  const { themeJson } = useStaticQuery<GraphQL.ThemeDataQuery>(graphql`
    query ThemeData {
      themeJson {
        colors {
          black
          dark
          error
          gray
          info
          lightgray
          primary
          secondary
          success
          vsCodeDark
          white
        }
        fontWeights {
          bold
          regular
          semiBold
        }
        fonts {
          main
        }
      }
    }
  `);
  const DarkTheme = useMemo(
    () => ({
      background: themeJson.colors.black,
      breakpoints,
      colors: {
        ...themeJson.colors,
        text: themeJson.colors.white,
      },
      fonts: themeJson.fonts,
      fontWeights: themeJson.fontWeights,
      svg: themeJson.colors.white,
      type: 'dark' as const,
    }),
    [themeJson],
  );
  const LightTheme = useMemo(
    () => ({
      background: themeJson.colors.white,
      breakpoints,
      colors: {
        ...themeJson.colors,
        text: '#262626',
      },
      fonts: themeJson.fonts,
      fontWeights: themeJson.fontWeights,
      svg: '#262626',
      type: 'light' as const,
    }),
    [themeJson],
  );
  const [isInitialized, setIsInitialized] = useState(false);
  const [mode, setMode] = useState<Theme['type']>(defaultMode);
  const toggle = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
  };
  const theme = mode === 'light' ? LightTheme : DarkTheme;
  useEffect(() => {
    if (isBrowser && isInitialized) localStorage.setItem(localStorageKey, mode);
  }, [mode]);
  useEffect(() => {
    const storedMode = (isBrowser && (localStorage.getItem(localStorageKey) as Theme['type'])) || defaultMode;
    setMode(storedMode);
    setIsInitialized(true);
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
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
export type Theme = Omit<StyledTheme, 'breakpoints' | 'colors' | 'fonts' | 'fontWeights'> & {
  background: string;
  breakpoints: string[];
  colors: GraphQL.ThemeDataQuery['themeJson']['colors'] & { text?: string };
  fonts: GraphQL.ThemeDataQuery['themeJson']['fonts'];
  fontWeights: GraphQL.ThemeDataQuery['themeJson']['fontWeights'];
  type: 'dark' | 'light';
};
export type ThemeProps = {
  background?: string;
  colors?: keyof Theme['colors'] | 'inherit';
  fontWeight?: keyof Theme['fontWeights'];
  svg?: string;
  type?: Theme['type'];
};
export default ThemeProvider;
