/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			inter: ['Inter Variable', 'sans-serif']
		},
		extend: {
			color: {
				magnolia: '#eeecf1'
			}
		}
	},

	plugins: []
};

module.exports = config;
