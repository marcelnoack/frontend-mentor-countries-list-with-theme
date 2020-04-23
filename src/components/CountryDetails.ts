const CountryDetails = (country: Country) => `
  <div class="info">
    <img src=${country.flag} alt=${country.name}/>
    <div class="content">
      <h3>${country.name}</h3>

      <div class="content-item">
        <p><span>Native Name:</span> ${country.nativeName}</p>
        <p><span>Population:</span> ${country.population}</p>
        <p><span>Region:</span> ${country.region}</p>
        <p><span>Sub Region:</span> ${country.subRegion}</p>
        <p><span>Capital:</span> ${country.capital}</p>
      </div>

      <div class="content-item">
        <p><span>Top Level Domain:</span> ${country.topLevelDomain} </p>
        <p><span>Currencies:</span> ${country.currencies.map((currency) => currency.name)} </p>
        <p><span>Languages:</span> ${country.languages.map((language) => language.name)} </p>
      </div>

      <div class="content-item">
        <h4>Border Countries:</h4>
        <div id="borders">
          ${country.borders.map((border) => `<div class="btn">${border}</div>`).join('')}
        </div>
      </div>
    </div>
  </div>
`;

export default CountryDetails;
