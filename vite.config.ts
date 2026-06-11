import { paraglideVitePlugin } from "@inlang/paraglide-js";
import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  plugins: [
    {
      name: "polyfill-node-module",
      enforce: "pre",
      resolveId(id, importer) {
        if (id === "node:module") {
          console.log(`[polyfill-node-module] resolving node:module for importer: ${importer}`);
          if (importer && importer.includes("node-module.ts")) {
            return { id: "node:module", external: true };
          }
          const target = path.resolve("src/lib/polyfills/node-module.ts");
          console.log(`[polyfill-node-module] redirected to: ${target}`);
          return target;
        }
      },
    },
    tailwindcss(),
    sveltekit(),
    paraglideVitePlugin({ project: "./project.inlang", outdir: "./src/lib/paraglide" }),
  ],
  define: {
    __dirname: "''",
  },
  build: {
    rollupOptions: {
      external: ["cloudflare:workers"],
    },
  },
  ssr: {
    external: ["cloudflare:workers"],
    noExternal: ["@prisma/client", "@prisma/adapter-d1"],
  },
});
