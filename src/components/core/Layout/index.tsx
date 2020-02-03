import React, { HTMLAttributes } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Theme } from '../../../theme';
import InstallPWA from '../../common/InstallPWA';
import Box from '../../primitives/Box';
import Footer from '../Footer';
import Header from '../Header';
import { useTheming } from '../ThemingManager';
import Content from './Content';

type LayoutProps = HTMLAttributes<HTMLDivElement>;

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
        svg {
            fill: ${({ theme }: { theme: Theme }) => theme.colors.text};
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
  const { theme } = useTheming();
  return (
    <>
      <GlobalStyle />
      <Header />
      <Box
        as="main"
        margin="auto"
        maxWidth={theme.breakpoints[3]}
        paddingBottom={{ _: 78, tablet: 108 }}
        paddingX={{ _: 16, tablet: 32 }}
        textAlign="center"
      >
        {children}
      </Box>
      <Footer />
      <InstallPWA />
    </>
  );
};

Layout.displayName = 'Layout';

Layout.Content = Content;

export { LayoutProps };
export default Layout;
