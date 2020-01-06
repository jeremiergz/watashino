const React = require('react');
const ThemingManager = require('./src/components/core/ThemingManager').default;

exports.wrapRootElement = ({ element }) => {
  return <ThemingManager>{element}</ThemingManager>;
};
