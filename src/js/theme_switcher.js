const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.body;

const toggler = document.querySelector('#theme-switch-toggle');

const startingTheme = localStorage.getItem('theme') || Theme.LIGHT;

body.classList.add(startingTheme);

toggler.checked = startingTheme === Theme.DARK;


toggler.addEventListener('change', onChangeTheme);


function onChangeTheme({target: {checked}}) {

  const themeName = checked ? Theme.DARK : Theme.LIGHT

  body.className = themeName

  localStorage.setItem('theme', themeName)
};