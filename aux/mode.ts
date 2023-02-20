export const handleMode = () => {
  if (typeof window !== 'undefined') {
    if (document.documentElement.className === 'dark' || localStorage.theme === 'dark') {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      localStorage.theme = 'dark';
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  }
};
