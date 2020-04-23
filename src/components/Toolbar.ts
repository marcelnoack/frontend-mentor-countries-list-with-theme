const Toolbar = () => {
  const countries = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  const filterOptions = countries.map((country: string) => `<option value="${country}">${country}</option>`);
  const template = `
    <div class="container">
      <div id="search" class="card">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search for a country..."/>
      </div>
      <div id="filter" class="card">
        <select id="region-select">
          ${filterOptions}
        </select>
      </div>
    </div>
    `;

  return template;
};

export default Toolbar;
