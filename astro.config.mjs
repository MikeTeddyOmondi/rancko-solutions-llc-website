import { defineConfig } from 'astro/config';
import db from "@astrojs/db";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [db(), react(), mdx()],
  server: {
    port: 4546
  },
  adapter: netlify()
});