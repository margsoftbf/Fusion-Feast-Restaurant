const purgecss = require('@fullhuman/postcss-purgecss')({
	content: [
		'./pages/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
	],
	defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
	plugins: {
		'postcss-flexbugs-fixes': {},
		'postcss-preset-env': {
			autoprefixer: {
				flexbox: 'no-2009',
			},
			stage: 3,
			features: {
				'custom-properties': false,
			},
		},
		tailwindcss: {},
		autoprefixer: {},
		...(process.env.NODE_ENV === 'production'
			? {
					'@fullhuman/postcss-purgecss': {
						content: [
							'./pages/**/*.{js,jsx,ts,tsx}',
							'./components/**/*.{js,jsx,ts,tsx}',
							// inne pliki, gdzie używasz CSS
						],
						defaultExtractor: (content) =>
							content.match(/[\w-/:]+(?<!:)/g) || [],
					},
			  }
			: {}),
	},
};
