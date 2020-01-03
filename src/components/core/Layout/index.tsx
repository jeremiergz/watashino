import React, { HTMLAttributes, useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme, Theme } from '../../../theme';
import Box from '../../primitives/Box';
import Footer from '../Footer';
import Header from '../Header';
import ThemeToggle from '../ThemeToggle';
import Content from './Content';

type LayoutProps = HTMLAttributes<HTMLDivElement>;

const GlobalStyle = createGlobalStyle`
    html, body {
        background-color: ${({ theme }: { theme: Theme }) => theme.background};
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        > * {
            color: ${({ theme }: { theme: Theme }) => theme.colors.text};
            font-family: ${({ theme }: { theme: Theme }) => theme.fonts.main};
            font-weight: ${({ theme }: { theme: Theme }) => theme.fontWeights.regular};
        }
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
`;

const Layout = ({ children }: LayoutProps) => {
  const isBrowser = typeof window !== 'undefined';
  const storedTheme = (isBrowser && (localStorage.getItem('theme') as ThemeType)) || 'light';
  const [theme, setTheme] = useState<ThemeType>(storedTheme);
  const saveTheme = (type: ThemeType) => {
    setTheme(type);
    if (isBrowser) localStorage.setItem('theme', type);
  };
  const selectedTheme = theme === 'light' ? LightTheme : DarkTheme;
  return (
    <ThemeProvider theme={selectedTheme}>
      <>
        <ThemeToggle setTheme={saveTheme} />
        <Header />
        <Box
          as="main"
          margin="auto"
          maxWidth={selectedTheme.breakpoints[3]}
          paddingBottom={{ _: 78, tablet: 108 }}
          paddingX={{ _: 16, tablet: 32 }}
          textAlign="center"
        >
          {children}
        </Box>
        <Footer />
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
};

Layout.displayName = 'Layout';

Layout.Content = Content;

export { LayoutProps };
export default Layout;
