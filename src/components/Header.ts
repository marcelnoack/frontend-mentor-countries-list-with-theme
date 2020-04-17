const Header = (): string => {
  const template = `
    <header>
      <h2>Where in the world?</h2>
      <div id="mode">
      <i class="far fa-moon"></i> <span>Dark Mode</span>
      </div>
    </header>
  `;

  return template;
};

const _loadTheme = (): string => {
  let theme: string | null = localStorage.getItem('theme');

  if (theme) return theme;

  return document.documentElement.getAttribute('data-theme') || 'light';
};

export const initTheme = (): void => {
  const theme = _loadTheme();

  const modeIcon = document.querySelector('#mode')?.children[0];
  const modeText = document.querySelector('#mode')?.children[1];
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    modeIcon?.classList.remove('fa-sun');
    modeIcon?.classList.add('fa-moon');
    if (modeText) modeText.innerHTML = 'Dark Mode';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    modeIcon?.classList.remove('fa-moon');
    modeIcon?.classList.add('fa-sun');
    if (modeText) modeText.innerHTML = 'Light Mode';
  }
};

export const toggleTheme = (): void => {
  const theme = _loadTheme();
  // document.documentElement.classList.add('transition');
  // setTimeout(() => {
  //   document.documentElement.classList.remove('transition');
  // }, 1000);
  const modeIcon = document.querySelector('#mode')?.children[0];
  const modeText = document.querySelector('#mode')?.children[1];
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
    modeIcon?.classList.remove('fa-moon');
    modeIcon?.classList.add('fa-sun');
    if (modeText) modeText.innerHTML = 'Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    modeIcon?.classList.remove('fa-sun');
    modeIcon?.classList.add('fa-moon');
    if (modeText) modeText.innerHTML = 'Dark Mode';
    localStorage.setItem('theme', 'light');
  }
};

export default Header;
