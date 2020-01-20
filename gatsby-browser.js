const React = require('react');
const ThemingManager = require('./src/components/core/ThemingManager').default;
const ThemeToggle = require('./src/components/core/ThemingManager/ThemeToggle').default;

exports.wrapRootElement = ({ element }) => {
  return (
    <ThemingManager>
      <ThemeToggle />
      {element}
    </ThemingManager>
  );
};
