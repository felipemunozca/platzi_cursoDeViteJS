import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

// import buttonStyle from './button.module.css';
// import imageStyle from './image.module.css';
import data from './data.json';

import img from './gatito.jpg';

// const modules = import.meta.glob('../modules/*.js')
// console.log(modules)

// console.log(buttonStyle);

import suma from './suma.ts';
console.log(`suma 2+3 = ${suma(2, 3)}`)

/*
for (const path in modules) {
  modules[path]()
  .then((module) => {
    module.load()
  })
}
*/

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
/**
 * Etiquetas quitadas:
 * <img id="my-img"/>
 * <button id="btn" type="button">Haz click aquí</button>
 * <div>
 *   <pre>${JSON.stringify(data)}</pre>
 *   <pre>${JSON.stringify(data.user)}</pre>
 * </div>
 */

// document.getElementById('btn').className = buttonStyle.btn;

// const imagen = document.getElementById('my-img');
// imagen.src = img;
// imagen.className = imageStyle.img;

setupCounter(document.querySelector('#counter'))
