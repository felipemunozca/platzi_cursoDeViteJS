// Primer método
/*
export default {
    server: {
        port: 8080
    }
}
*/

// Segundo método
/*
import { defineConfig } from "vite";

export default defineConfig({
    server: {
        port: 8080
    }
})
*/

// Segundo método mejorado
/*
import { defineConfig } from "vite";

export default defineConfig( () => {
    const port = 8080;

    return {
        server: {
            port
        }
    }
})
*/

// Obtener el comando y el modo utilizados.
/*
import { defineConfig } from "vite";

export default defineConfig(({ command, mode }) => {
	const port = 8080;

	console.log(`comando: ${command} y modo: ${mode}`);

	return {
		server: {
			port
		},
	};
});
*/

// Crear una validación if-else para determinar cual es el modo.
/*
import { defineConfig } from "vite";

export default defineConfig(({ command, mode }) => {
	const port = 8080;

    if (command === "development") { 
        console.log("Modo desarrollo"); 
    } else { 
        console.log("Modo producción"); 
    }

	return {
		server: {
			port
		},
	};
});
*/

/*
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
	const port = 8080;

    const env = loadEnv(mode, process.cwd())

    console.log(env)
    console.log(env.VITE_NAME);

    if (command === "development") { 
        console.log("Modo desarrollo"); 
    } else { 
        console.log("Modo producción"); 
    }

	return {
		server: {
			port
		},
	};
});
*/

// Como utilizar Rollup en un proyecto.
/*
import { defineConfig, loadEnv } from "vite";

import { resolve } from 'path'

export default defineConfig(({ command, mode }) => {
	const port = 3000;

	const env = loadEnv(mode, process.cwd());

	if (mode === "development") {
		console.log("modo desarrollo");
		return {
			server: {
				port
			}
	}
	} else {
		console.log("modo producción")
		return {
			build: {
				rollupOptions: {
					input: {
						main: resolve(__dirname, 'index.html'),
						help: resolve(__dirname, 'help', 'help.html')
					}
				}
			}
		}
	}
});
*/

// Como crear una librería
import { defineConfig, loadEnv } from "vite";
import { resolve } from 'path';

export default defineConfig(({ command, mode }) => {
	const port = 8080;

    const env = loadEnv(mode, process.cwd())

    if (mode === "development") {
        console.log("modo desarrollo")
        return {
            server: {
                port
            }
        }
    } else {
        console.log("modo producción")
        return {
            build: {
                lib: {
                    entry: resolve(__dirname, 'lib', 'main.js'),
                    name: 'demo',
                    fileName: (format) => `demo.${format}.js`
                }
            }
        }
    }
});