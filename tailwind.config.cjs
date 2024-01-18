const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			inter: ['Inter Variable', 'sans-serif']
		},
		extend: {
			colors: {
				magnolia: '#eeecf1',
				night: '#0f0f0f',
				platinum: '#d9d9d9',
				'savoy-blue': '#5e62d1'
			}
		}
	},

	plugins: [
		plugin(({ addVariant }) => {
			addVariant('not-first', '&:not(:first-child)');
			addVariant('not-last', '&:not(:last-child)');
		})
	]
};

module.exports = config;
