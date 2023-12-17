import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	site: "https://localhost:3000",
	vite: {
		ssr: {
			noExternal: ["react-icons"],
		},
	},

	integrations: [tailwind(), mdx(), react(), vue(), svelte(), sitemap()],
});
