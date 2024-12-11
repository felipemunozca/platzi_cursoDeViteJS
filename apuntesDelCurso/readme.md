# Curso de Vite.js

## Índice
* [Clase 01 - ¿Qué es Vite?](#id1)
* [Clase 02 - Historia del Ecosistema de JavaScript](#id2)
* [Clase 03 - Características de Vite](#id3)

## ¿Qué es Vite? [1/19]<a name="id1"></a>
Vite es una herramienta de **tercera generación** para el desarrollo de frontend, la cual recolecta todas las tecnologías que se utilizan en el estándar de desarrollo web moderno, como por ejemplo webpack, create-react-app, etc.

### Ventajas de Vite
Vite nos va a permitir tener una mejor experiencia de desarrollo y nos aporta todas las funcionalidades que traen estas tecnologías, pero con características nuevas:
* Más fácil de usar y aprender a usar.
* Necesita menos configuración.
* Mucho más veloz, compila y transpila más rápido.
* Automatización de recargar el navegador cuando hacemos cambios
* Trae una serie de optimizaciones por debajo que nos permitirá que nuestros proyectos queden mucho mejor estructurados, sin necesidad de una configuración complicada.

> [!TIP]
> El nombre Vite se pronuncia **BIT** y no **BAIT** porque viene del francés y no del inglés

## Historia del Ecosistema de JavaScript [2/19]<a name="id2"></a>
Cuando la web comenzó únicamente eran páginas de texto con algunas imágenes y enlaces.
![web antigua](img/clase2-1.png)
Posteriormente, se implementó CSS para agregar estilos con el fin de organizar los elementos y estilizar los elementos.
![web con CSS](img/clase2-2.png)
Con el tiempo fue necesario agregar nuevas características a los sitios con JavaScript
* JavaScript dio un cierto dinamismo a la web

Conforme iba a creciendo el código fue necesario llegar al tema de implementar módulos y librerías de JS para organizar de mejor manera el código
Inicialmente, solo existía esta forma, que era usar una etiqueta de HTML donde se referenciaba al archivo o dentro de la etiqueta:
````html
<script src="modulo.js"></script>
````
Esta era la forma más básica de hacer un módulo, cargando el archivo y ya estaba listo para usarse.
Pero con el tiempo de igual manera fue creciendo donde ya no se tenía un solo script sino una serie de etiquetas:
```html
<script src="modulo1.js"></script>
<script src="modulo2.js"></script>
<script src="modulo3.js"></script>
```
El gran problema era que no se tenía ningún estándar para cumplir con este objetivo
Al implementar esta manera se tenía unas reglas como ser:
* Al necesitar algo de un módulo primero se debe cargar para que otros módulos lo implementen

Esto causaba problemas a la experiencia de desarrollo
* Difícil de leer.
* Se podían producir muchos errores en caso de no importar los archivos en el orden correcto.
* Había probabilidades de una colisión entre variables, sobre escribiendo valores en cada archivo.

Por este motivo se buscó soluciones para este problema, de esta manera surgió IIFE.

### IIFE
Debido a los problemas anteriores, surgieron las IIFE *(Expresión de función ejecutada inmediatamente)*.
Lo que aportaba esta solución era que las variables se quedaban en el contexto de la función, evitando la colisión de variables.
Se crea una función normal en JavaScript envuelta en unos paréntesis, para que en el momento en que se declara también se ejecutara. A la hora de usarla se veía de la siguiente forma y esto hacía que las variables se quedaran dentro del módulo, evitando la colisión de variables.
```javascript
var module = (function(){
	var version = "1.0.0";
})():

// en este punto, version es inaccesible
var module = (function(){
	var version = "2.0.0";
	return { version };
})():

// Salida inmediata:
module.version;  // "1.0.0"
```

### Minificación
Conforme fue avanzando el desarrollo web surgieron conceptos como minificación.
El proceso de minificacion surgió debido a la cantidad de código que se necesita para hacer web, este consiste en un tipo de compresión donde se eliminan características del código que el navegador no necesitaba y solo estaban ahí para una mejor legibilidad, por ejemplo, los espacios.
La minificacion ayudaba a la performance de la web en archivos grandes, este es él antes y después de un código minificado:
```javascript
// Sin minificar
var data = {
	name: "Diana",
	age: 27
};

// Minificado
var data={name:"Diana",age:27};
```

### Bundling
A veces tienes muchos módulos dentro de un mismo sitio web y muchos de estos los consumes al mismo tiempo. Aquí es donde entra el bundling, un proceso donde se toman todos estos módulos y se convierten en un solo archivo minificado y listo para utilizar.
Su ventaja esta en que cuando el usuario ingresa al sitio, solo descargue un archivo de configuración una sola vez, mejorando el performance.

### Node.js
Trae toda una revolución, permitiendo a las personas usar JavaScript del lado del backend para modificar la forma en la que se comportan las páginas web.
Con el diseño de Node.js llegaron las herramientas de primera generación:
* Templates: Un template o plantilla es cuando tomamos diferentes bloques de HTML, hacer que se junten y crear una página completa (Jade, Pug).
* Posteriormente, se implementó con CSS (Sass, Stylus) los cuales ayudaron a escribir código de estilos más fácilmente.

### Herramientas para la automatización
Comienzan a surgir la necesidad de herramientas para automatizar estos procesos y se encarguen del orden de ejecutarlos, como por ejemplo **Grunt o Gulp** donde era necesario escribir scripts para automatizar este proceso.
También surgen herramientas para generar código como ser yeoman generator.

### Yeoman Generator
Herramienta que permite generar código por medio de comandos, por ejemplo generar un componente con todo el código base a través de un solo comando.
Esto acelero el proceso de desarrollo y teniendo que mantener más herramientas.

### Frameworks
Comienzan a salir los primeros frameworks (Angular.js, Ember.js, Backbone.js)
* El framework proveía una estructura para trabajar.
* Se empieza a tener la necesidad de tener muchas carpetas con múltiples archivos, estructurados de una cierta manera, los cuales se transpilaban para producción.
* Nace el concepto de **transpilacion**, es decir, encontrarse en una etapa de desarrollo y luego generar una versión para producción.

### ES6+
En su momento aparece ECMAScript 6 y con ello Babel.
* En primer orden, se utilizaba en desarrollo ES6 y posteriormente se usaba Babel.js para llevar el código moderno en una versión anterior para que todos los navegadores pudieran ejecutarlo sin ningún problema.
* De esta forma se tenían las últimas características de la web en navegadores modernos y tener retro compatibilidad en navegadores antiguos.
Posteriormente, comienzan a aparecer las herramientas de segunda generación (React, Angular 2, Eslint, Prettier, etc.)
Con ello aparece Webpack

### Webpack
Una de las herramientas que más se emplea hoy en día, la cual permite hacer todos estos procesos que hemos estado viendo a lo largo de esta clase.
Mediante una configuración se pasaban los distintos archivos de desarrollo a código de producción
Pero no todo era perfecto, entre las mayores desventajas de webpack están:
* Lento
* Necesita bastante configuración

Por ello surgen alternativas de la comunidad
* Esbuild ⇒ es un bundler bastante rápido escrito en Go.
* Parcel ⇒ Se enfoca en tener poca configuración.
* Rollup ⇒ Se enfoca en poder generar una versión para producción bastante especializada cumpliendo estándares de la web.

### TypeScript
Es un lenguaje de programación tipado que se transpila hacia JavaScript bastante útil, pero esto conlleva reescribir todo el ecosistema para que sea compatible con JavaScript, convirtiéndose en otra razón para hacer un cambio en la web.

### Tercera generacion de herramientas
De esta manera llegamos a Vite.js
Su objetivo es mejorar la experiencia de desarrollo teniendo una mejor velocidad y menor configuración.

## Características de Vite [3/19]<a name="id3"></a>
En esta clase vamos a ver las principales características de Vite.
Destaca la reinvención de muchos procesos, como la resolución de dependencias, la implementación con TypeScript, el HMR, entre muchas otras funcionalidades.

### Optimización de código
Vite optimiza muchos de los procesos por los que tiene que pasar el código, de ese modo se enfoca en un mejor rendimiento y experiencia de desarrollo.

### Pre-bundling
Es la etapa donde se estandarizan los módulos.
Adapta los módulos en CommonJS o UMD y los pasa al formato estándar de ECMAScript.
*Los módulos por muchos años NO estuvieron estandarizados hasta que apareció el estándar de ECMAScript con los ES Modules.*

### Dependency resolving
Vite optimiza el proceso en que se obtienen librerías y módulos estandarizados.
Lo primero que hace Vite.js es generar un **servidor de archivos estático**, es decir, que va a tomar todos los archivos del proyecto y los va a hacer disponibles para acceder desde el navegador, de esta manera va a reemplazar los **imports** vía node.js por **imports URL**.
También se asegura de servir los archivos de forma inteligente y con caché, para optimizar tiempo y procesamiento, esto lo hace subdividiendo las dependencias y ordenando las importaciones para que todo esté listo para el momento de uso, utilizando un caché fuerte, el cual se asegura que los archivos se queden en el navegador a menos que se limpie la caché del mismo

### Hot module replacement (HMR)
El HMR es cuando se hace **un cambio en el código y este se ve reflejado en el navegador casi de forma inmediata**, sin perder el estado de la aplicación y sin tener que recargar el navegador. Esto nos otorga una mejor experiencia de desarrollo al ser más rápido.

### Importación de archivos
Nos otorgará una importación de archivos simplificada. 
*(Resuelve la importación sin necesidad de loaders.)* 
Es simple de usar con archivos multimedia, estilos, código o con los preprocesadores más comunes, incluyendo TypeScript.

### Integración simple con TypeScript
Desde el primer momento, un proyecto con Vite tiene integración con TypeScript sin necesidad de alguna configuración adicional.
Es opcional la configuración de TypeScript.
Es totalmente utilizable con cualquier librería o framework.

### Integración con frameworks
Soporte perfecto con Vue.js
Vite es desarrollado por el equipo de Vue.js por lo cual la integración es simple y completa.
Útil para usar JSX con Vue.js
Hace que sea extremadamente simple usar Vite con React.js

### Optimización para producción
Proporciona una serie de optimizaciones a la hora de transpilar para producción o también conocido como **build**.
Permite tomar el control de la configuración. Se podrá utilizar la configuración por defecto tanto en desarrollo como en producción, o bien, se podrá tener una configuración más específica y controlada por el desarrollador.
La velocidad en desarrollo aumenta gracias a esbuild.
Optimiza el bundle de producción gracias a Rollup. La importación de dependencias se hace de modo inteligente, es decir, resuelve los módulos a emplear en el proyecto y predice hasta cierto punto los módulos que van a seguir, para importarlos desde un inicio.

### Soporte a Web Workers y Web Assembly
Los Web Workers son una característica de JavaScript que permiten crear procesos alternativos al proceso principal. Implementarlos puede llegar a tener una configuración complicada, pero con Vite no, teniendo la posibilidad de importarlos de una manera específica y estar listos para ser usados.
Aunque también existe la posibilidad de importar un archivo Web Assembly e invocarlo donde queramos que se ejecute.