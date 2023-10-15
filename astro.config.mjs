import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import vue from '@astrojs/vue'
import svelte from '@astrojs/svelte'

export default defineConfig({
	site: 'https://sofidev',
	integrations: [tailwind(),mdx(),react(),vue(),svelte()],
});


