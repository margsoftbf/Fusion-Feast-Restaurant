import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				openSans: ['Open Sans', 'sans-serif'],
				lemonada: ['Lemonada', 'sans-serif'],
				bakilda: ['Bakilda', 'sans-serif'],
				oswald: ['Oswald', 'sans-serif'],
			},
			colors: {
				primary: '#101113',
				secondary: '#17191E',
				third: '#232732',
				myOrange: '#FD9900',
				myGray: '#B1B1B1',
				myRed: '#c33130',
				myGreen: '#02833d',
			},
			maxWidth: {
				'8xl': '1440px',
			},
		},
	},
	plugins: [],
};
export default config;
