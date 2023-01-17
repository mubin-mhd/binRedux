import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import useDarkMode from '../../hooks/useDarkMode';

function ThemeIcon() {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FiSun size="24" className="top-navigation-icon text-white" />
      ) : (
        <FiMoon size="24" className="top-navigation-icon text-primary" />
      )}
    </span>
  );
}

export default ThemeIcon;
