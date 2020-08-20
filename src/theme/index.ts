import { createGlobalStyle } from 'styled-components';

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

const breakpoints = ['320px', '375px', '425px', '768px', '1024px', '1200px', '1440px', '2560px'] as const;
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

const colors = {
  black: '#212121',
  dark: '#424242',
  error: '#f44336',
  gray: '#757575',
  info: '#2196f3',
  lightgray: '#e0e0e0',
  primary: '#31859a',
  secondary: '#17365c',
  success: '#4caf50',
  vsCodeDark: '#1e1e1e',
  white: '#fafafa',
} as const;

const fonts = {
  main: "'Open Sans', sans-serif",
} as const;

const fontWeights = {
  bold: 800,
  regular: 400,
  'semi-bold': 600,
} as const;

const DarkTheme = {
  background: colors.black,
  breakpoints,
  colors: {
    ...colors,
    text: colors.white,
  },
  fonts,
  fontWeights,
  svg: colors.white,
  type: 'dark',
};

const LightTheme = {
  background: colors.white,
  breakpoints,
  colors: {
    ...colors,
    text: '#262626',
  },
  fonts,
  fontWeights,
  svg: '#262626',
  type: 'light',
};

type Theme = typeof DarkTheme | typeof LightTheme;
type ThemeProps = {
  background?: string;
  colors?: keyof Theme['colors'] | 'inherit';
  fontWeight?: keyof Theme['fontWeights'];
  svg?: string;
  type?: 'light' | 'dark';
};

export { colors, DarkTheme, GlobalStyle, LightTheme, Theme, ThemeProps };
