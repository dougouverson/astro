import { defineConfig } from "astro/config";
import type { AstroUserConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
const config: AstroUserConfig = defineConfig({
	site: "http://www.example.com",
	integrations: [tailwind({ applyBaseStyles: false })],
});

export default config;
