// Integrating SASS into the Project - Option 2: as an ES6 import inside a JS/TS file
import './scss/main.scss';

const foo: string = 'Bar!';

const app = document.getElementById('app');
if (app) {
  app.innerHTML = foo;
  app.classList.add('app');
}
