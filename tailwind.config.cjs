/** @type {import('tailwindcss').Config}*/
const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		fontFamily: {
			inter: ['Inter Variable', 'sans-serif']
		},
		extend: {
			colors: {
				magnolia: '#eeecf1',
				night: '#0f0f0f',
				platinum: '#d9d9d9',
			}
		}
	},

	plugins: []
};

module.exports = config;
