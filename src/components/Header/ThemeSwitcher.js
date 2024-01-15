import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };
  const applyTheme = (selectedTheme) => {
    const root = document.documentElement;
  
    if (selectedTheme === 'light') {
      root.style.setProperty('--background-color', '#ffffff');
      root.style.setProperty('--text-color', '#000000');
    } else {
      root.style.setProperty('--background-color', '#4a3a3d');
      root.style.setProperty('--text-color', '#ffffff');
    }
  
  
    document.body.classList.toggle('dark-theme', selectedTheme === 'dark');
  };
  

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <button className="theme-toggle-button" onClick={toggleTheme}>
      Toggle Theme ({theme})
    </button>
  );
  
  
};




export default ThemeSwitcher;
