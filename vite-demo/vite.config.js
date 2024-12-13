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
import { defineConfig } from "vite";

export default defineConfig( () => {
    const port = 8080;

    return {
        server: {
            port
        }
    }
})