import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from '../../contexts/ThemeProvider';
import { Icon, SunIcon, MoonIcon } from './styles';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Switch
      onChange={toggleTheme}
      checked={theme.title === 'dark'}
      handleDiameter={20}
      checkedIcon={
        <Icon>
          <MoonIcon size="16" />
        </Icon>
      }
      onColor={theme.colors.secundary}
      uncheckedIcon={
        <Icon>
          <SunIcon size="16" />
        </Icon>
      }
      offColor={'#7b1e40'}
    />
  );
};

export default ThemeToggler;
