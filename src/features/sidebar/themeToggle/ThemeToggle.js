import Styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme, toggleTheme } from './themeToggleSlice.js';

import { Sun } from '../../../assets/icons/Sun';
import { Moon } from '../../../assets/icons/Moon';

const Toggle = Styled.div`
  padding: 10px;
  margin-bottom: 50px;
  cursor: pointer;
`;

export const ThemeToggle = () => {
  const currentTheme = useSelector(selectTheme);
  const dispatch = useDispatch();
  let toggleIcon = <Sun />;
  console.log(currentTheme);

  const handleThemeToggle = () => {
    if (currentTheme === 'lightTheme') {
      dispatch(toggleTheme('darkTheme'));
      toggleIcon = <Moon />;
    } else {
      dispatch(toggleTheme('lightTheme'));
      toggleIcon = <Sun />;
    }
  };

  return <Toggle onClick={handleThemeToggle}>{toggleIcon}</Toggle>;
};
