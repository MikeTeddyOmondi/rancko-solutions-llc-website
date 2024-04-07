import { defineConfig } from 'astro/config';
import db from "@astrojs/db";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [db(), react(), mdx()]
});