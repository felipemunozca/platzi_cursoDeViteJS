import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import buttonStyle from './button.module.css';
import imageStyle from './image.module.css';

import img from './gatito.jpg';

console.log(buttonStyle);

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
    <img id="my-img"/>
    <button id="btn" type="button">Haz click aquí</button>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

document.getElementById('btn').className = buttonStyle.btn;

const imagen = document.getElementById('my-img');
imagen.src = img;
imagen.className = imageStyle.img;

setupCounter(document.querySelector('#counter'))
