const React = require('react');
const ThemeProvider = require('./src/components/providers/ThemeProvider').default;
const ThemeToggle = require('./src/components/providers/ThemeProvider/ThemeToggle').default;

exports.wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      <ThemeToggle />
      {element}
    </ThemeProvider>
  );
};
