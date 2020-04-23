const Countries = (countries: Country[]) => {
  const countryList = countries
    .map(
      (country) => `
    <div class="card" data-name=${country.name}>
      <img class="flag" src=${country.flag} alt="${country.name}-flag" />
      <div class="content">
        <h3>${country.name}</h3>
        <div class="short-info">
          <p><span>Population:</span> ${country.population}</p>
          <p><span>Region:</span> ${country.region}</p>
          <p><span>Capital:</span> ${country.capital}</p>
        </div>
      </div>
    </div>`
    )
    .join('');
  const template = `<div class="container">${countryList}</div>`;

  return template;
};

export const filterCountriesByRegion = (countries: Country[], region: string) => {
  return countries.filter((country) => country.region === region);
};

export const filterCountriesByName = (countries: Country[], name: string) => {
  return countries.filter((country) => country.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
};

export default Countries;
