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
  error: '#F44336',
  gray: '#757575',
  info: '#2196F3',
  lightgray: '#E0E0E0',
  primary: '#31859A',
  secondary: '#17365C',
  success: '#4CAF50',
  white: '#FAFAFA',
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

export { colors, DarkTheme, LightTheme, Theme, ThemeProps };
