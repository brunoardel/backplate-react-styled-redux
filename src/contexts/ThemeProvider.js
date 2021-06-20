import React, { createContext } from 'react';
import GlobalStyles from '../styles/global';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import usePersistedState from '../utils/usePersistedState';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
