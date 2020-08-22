const { default: InstallPWA } = require('components/InstallPWA');
const { default: ThemeProvider } = require('components/providers/ThemeProvider');
const { default: ThemeToggle } = require('components/providers/ThemeProvider/ThemeToggle');
const React = require('react');

exports.wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      <InstallPWA />
      <ThemeToggle />
      {element}
    </ThemeProvider>
  );
};
