import Footer from 'components/Footer';
import Header from 'components/Header';
import Box from 'components/primitives/Box';
import { useTheme } from 'components/providers/ThemeProvider';
import React, { HTMLAttributes } from 'react';
import Content from './Content';

const Layout: React.FC<LayoutProps> & { Content: typeof Content } = ({ children }) => {
  const { theme } = useTheme();
  return (
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
    </>
  );
};

Layout.Content = Content;
Layout.displayName = 'Layout';

export type LayoutProps = HTMLAttributes<HTMLDivElement>;
export default Layout;
