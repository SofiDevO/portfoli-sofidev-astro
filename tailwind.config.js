/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*/*.{astro,html,js,jsx,tsx,vue,svelte,mdx}"],
	theme: {
		screens: {
			sm: "768px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		fontFamily: {
			Preahvihear: ["Preahvihear", " sans-serif"],
			Montserrat: ["Montserrat", " sans-serif"],
		},

		extend: {},
	},
	plugins: [],
};
