/* eslint-disable react/display-name */
import Code from 'components/Code';
import Heading from 'components/Heading';
import Link from 'components/Link';
import Paragraph from 'components/Paragraph';
import Box from 'components/primitives/Box';
import React, { createElement } from 'react';
import rehype2react from 'rehype-react';
import styled from 'styled-components';
import themeJSON from '../../../content/theme/index.json';

const VerticalHR = styled(Box)`
  box-sizing: border-box;
`;

// @ts-ignore
const astRenderer = new rehype2react({
  components: {
    a: ({ children, href }: { children: React.ReactNode; href: string }) => (
      <Link aria-label={`Go to ${href}`} external to={href} variant="underlined">
        {children}
      </Link>
    ),
    blockquote: ({ children }) => (
      <Box as="blockquote" color="gray" fontStyle="italic" paddingX={4} position="relative">
        <VerticalHR
          border={`2px solid ${themeJSON.colors.gray}`}
          borderRadius={4}
          height="100%"
          left={0}
          position="absolute"
        />
        {children}
      </Box>
    ),
    code: ({ children, className }) => (
      <Code className={className} textAlign="left">
        {children}
      </Code>
    ),
    h1: ({ children }) => <Heading variant="h1">{children}</Heading>,
    h2: ({ children }) => <Heading variant="h2">{children}</Heading>,
    h3: ({ children }) => <Heading variant="h3">{children}</Heading>,
    h4: ({ children }) => <Heading variant="h4">{children}</Heading>,
    hr: () => <Box as="hr" border={`2px solid ${themeJSON.colors.gray}`} borderRadius={4} marginX={4} marginY={5} />,
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
