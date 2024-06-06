// import htmlPurge from "vite-plugin-html-purge";

// export default {
//   plugins: [htmlPurge()],
// };

import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      // input: {
        // home: resolve(__dirname, "index.html"),
        // about: resolve(__dirname, "about/index.html"),
        // contact: resolve(__dirname, "contact/index.html"),
      // },
    },
  },
});