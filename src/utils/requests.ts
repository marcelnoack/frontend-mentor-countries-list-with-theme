export const loadCountries = async () => {
  try {
    const data = await (
      await fetch('https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag;')
    ).json();
    return data;
  } catch (err) {
    throw err;
  }
};

export const loadCountryByName = async (name: string) => {
  try {
    const data = await (await fetch(`https://restcountries.eu/rest/v2/name/${name.toLowerCase()}`)).json();
    
    return data[0];
  } catch (err) {
    throw err;
  }
};

export const getCountryByCode = async(code: string) => {
  try {
    const data = await(await fetch(`https://restcountries.eu/rest/v2/alpha/${code.toLowerCase()}`)).json();

    return data;
  }
}
