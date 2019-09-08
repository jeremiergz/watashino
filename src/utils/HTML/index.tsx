/* eslint-disable react/display-name */
import React, { createElement } from 'react';
import RehypeReact from 'rehype-react';
import styled from 'styled-components';
import Box from '../../components/primitives/Box';
import Code from '../../components/widgets/Code';
import Heading from '../../components/widgets/Heading';
import InlineCode from '../../components/widgets/InlineCode';
import Link from '../../components/widgets/Link';
import Paragraph from '../../components/widgets/Paragraph';
import theme from '../../theme';

const VerticalHR = styled(Box)`
    box-sizing: border-box;
`;

const astRenderer = new RehypeReact({
    components: {
        a: ({ children, href }) => (
            <Link external to={href}>
                {children}
            </Link>
        ),
        blockquote: ({ children }) => (
            <Box as="blockquote" color="gray" fontStyle="italic" paddingX={4} position="relative">
                <VerticalHR
                    border={`2px solid ${theme.colors.gray}`}
                    borderRadius={4}
                    height="100%"
                    left={0}
                    position="absolute"
                />
                {children}
            </Box>
        ),
        code: ({ children, className }) => (className ? <Code>{children}</Code> : <InlineCode>{children}</InlineCode>),
        h1: ({ children }) => <Heading variant="h1">{children}</Heading>,
        h2: ({ children }) => <Heading variant="h2">{children}</Heading>,
        h3: ({ children }) => <Heading variant="h3">{children}</Heading>,
        h4: ({ children }) => <Heading variant="h4">{children}</Heading>,
        hr: () => <Box as="hr" border={`2px solid ${theme.colors.gray}`} borderRadius={4} marginX={4} marginY={5} />,
        p: Paragraph,
    },
    createElement: createElement,
}).Compiler;

/**
 * Renders given HTML AST to React components.
 *
 * @param html the HTML AST to process
 */
function renderASTToJSX(html: unknown) {
    return astRenderer(html);
}

export { renderASTToJSX };
