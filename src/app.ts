import './scss/main.scss';
import Header, { initTheme, toggleTheme } from './components/Header';
import Toolbar from './components/Toolbar';
import Countries, { filterCountriesByRegion, filterCountriesByName } from './components/Countries';
import { loadCountries, loadCountryByName, getCountryByCode } from './utils/requests';
import CountryDetails from './components/CountryDetails';

// Pages
const listPage = document.querySelector('#list-page');
const detailsPage = document.querySelector('#details-page');

// Country List (could be refactored to not be global)
const countries = document.querySelector('#countries');
let countryList: Country[] = [];

const App = async () => {
  try {
    // load the countries initially
    countryList = await loadCountries();

    const header = document.querySelector('#header');
    const toolbar = document.querySelector('#toolbar');
    if (header) header.innerHTML = Header();
    if (toolbar) toolbar.innerHTML = Toolbar();
    if (countries) countries.innerHTML = Countries(countryList);

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
  document.querySelector('#region-select')?.addEventListener('change', async (event) => {
    const filteredCountries = filterCountriesByRegion(countryList, event.target.value);
    countries?.innerHTML = Countries(filteredCountries);
    loadDetailsListener();
  });
  document.querySelector('#search')?.addEventListener('keyup', async (event) => {
    if (event.target.value?.trim().length > 0) {
      const filteredCountries = filterCountriesByName(countryList, event.target.value);
      countries?.innerHTML = Countries(filteredCountries);
    } else {
      countries?.innerHTML = Countries(countryList);
    }
    loadDetailsListener();
  });
  loadDetailsListener();
  document.querySelector('#back-btn')?.addEventListener('click', (event) => {
    console.log('this is the back button');
    detailsPage?.classList.add('hide');
    listPage?.classList.remove('hide');
  });
};

const loadDetailsListener = () => {
  document.querySelectorAll('.card').forEach((card: Element) => {
    if (!card.id) {
      const name = card.getAttribute('data-name');
      card.addEventListener('click', async (event) => {
        console.log('value', name);
        listPage?.classList.add('hide');
        detailsPage?.classList.remove('hide');

        let c: Country = await loadCountryByName(name);

        let requests = c.borders.map(
          (border) =>
            new Promise((resolve, reject) => {
              getCountryByCode(border)
                .then((res) => resolve(res.name))
                .catch((err) => reject(err));
            })
        );

        c.borders = [];
        await Promise.all(requests).then((response) => {
          if (response.length) {
            response.forEach((r) => c.borders.push(r));
          }
        });
        document.querySelector('#details')?.innerHTML = CountryDetails(c);
      });
    }
  });
};

App();
