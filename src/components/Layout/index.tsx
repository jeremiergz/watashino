import React, { HTMLAttributes } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../../theme';
import Box from '../primitives/Box';
import Content from './Content';
import Header from './Header';

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
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 rgba(49, 133, 154, 0.5);
        }
        70% {
            box-shadow: 0 0 0 10px rgba(49, 133, 154, 0);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(49, 133, 154, 0);
        }
    }
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

const Layout = ({ children }: LayoutProps) => (
    <ThemeProvider theme={theme}>
        <>
            <Header />
            <Box
                as="main"
                maxWidth={theme.breakpoints[3]}
                margin="auto"
                textAlign="center"
                paddingX={{ _: 16, tablet: 32 }}
                paddingBottom={{ _: 16, tablet: 32 }}
            >
                {children}
            </Box>
            <GlobalStyle />
        </>
    </ThemeProvider>
);

Layout.displayName = 'Layout';

Layout.Content = Content;

export { LayoutProps };
export default Layout;
