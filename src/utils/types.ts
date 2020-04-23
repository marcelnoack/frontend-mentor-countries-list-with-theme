interface Country {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
  nativeName?: string;
  subRegion?: string;
  topLevelDomain?: string;
  currencies: currency[];
  languages: language[];
  borders: string[];
}

interface currency {
  code: string;
  name: string;
  symbol: string;
}

interface language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}
