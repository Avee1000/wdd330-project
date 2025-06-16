import {
  resolve
} from "path";
import {
  defineConfig
} from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        recipes: resolve(__dirname, "src/recipes/index.html"),
        form: resolve(__dirname, "src/form/index.html"),
        favorites: resolve(__dirname, "src/favorites/index.html"),

      },
    },
  },
});
