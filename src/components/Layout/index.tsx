import React, { HTMLAttributes } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../../theme';
import Footer from '../Footer';
import Header from '../Header';
import Box from '../primitives/Box';
import Content from './Content';

type LayoutProps = HTMLAttributes<HTMLDivElement>;

const GlobalStyle = createGlobalStyle`
    html, body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        > * {
            color: ${theme.colors.text};
            font-family: ${theme.fonts.main};
            font-weight: ${theme.fontWeights.regular};
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

const Layout = ({ children }: LayoutProps) => (
    <ThemeProvider theme={theme}>
        <>
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
            <GlobalStyle />
        </>
    </ThemeProvider>
);

Layout.displayName = 'Layout';

Layout.Content = Content;

export { LayoutProps };
export default Layout;
