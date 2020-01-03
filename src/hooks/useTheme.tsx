import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Theme } from '../theme';

const useTheme = () => {
  return useContext<Theme>(ThemeContext);
};

export default useTheme;
