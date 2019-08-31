import React, { HTMLAttributes } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import theme from '../../theme';
import Content from './Content';
import Header from './Header';

type Props = HTMLAttributes<HTMLDivElement>;

const GlobalStyle = createGlobalStyle`
    html, body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        > * {
            font-family: ${theme.fonts.main.family};
            font-weight: ${theme.fonts.main.weight.regular};
            color: ${theme.colors.text};
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

const Main = styled.main`
    max-width: ${theme.sizes.tablet}px;
    margin: auto;
    text-align: center;
    padding: 0 16px;
    ${theme.breakpoints.minWidth.tablet} {
        padding: 0 32px;
    }
`;

const LayoutComponent = ({ children }: Props) => (
    <>
        <GlobalStyle />
        <Header />
        <Main>{children}</Main>
    </>
);

LayoutComponent.displayName = 'Layout';
LayoutComponent.Content = Content;

export default LayoutComponent;
