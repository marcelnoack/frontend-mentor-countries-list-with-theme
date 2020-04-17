import './scss/main.scss';
import Header, { initTheme, toggleTheme } from './components/Header';
import Toolbar from './components/Toolbar';

const App = async () => {
  try {
    document.getElementById('header').innerHTML = Header();
    document.getElementById('toolbar')?.innerHTML = Toolbar();
    initTheme();
    loadEventListeners();
  } catch (err) {
    console.log('ERROR:', err);
  }
};

// Helper functions
const loadEventListeners = () => {
  document.querySelector('#mode')?.addEventListener('click', () => {
    toggleTheme();
  });
};

App();
