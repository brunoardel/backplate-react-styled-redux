import { ThemeProvider } from 'styled-components';
import usePeristedState from '../utils/usePersistedState';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

export function Theme({ children }) {
  const [theme] = usePeristedState('theme', light);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export function useTheme() {
  const [theme, setTheme] = usePeristedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return { toggleTheme, title: theme.title, colors: theme.colors };
}
