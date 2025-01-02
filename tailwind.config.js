const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

const colors = require("tailwindcss/colors");
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: ["class"],
	theme: {
		extend: {
			boxShadow: {
				input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
			},
			backgroundImage: {},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {

				transparent: 'transparent',
				'ice-blue': {
					'50': '#effefd',
					'100': '#c7fffc',
					'200': '#83fff9',
					'300': '#50f8f5',
					'400': '#1de0e4',
					'500': '#04c2c8',
					'600': '#0098a1',
					'700': '#057880',
					'800': '#0a5e65',
					'900': '#0d4f54',
					'950': '#002d33',
				},
				//main
				'blizzard-blue': {
					'50': '#edfcfe',
					'100': '#d1f6fc',
					'200': '#96e6f8',
					'300': '#6cd9f4',
					'400': '#29bfe7',
					'500': '#0da2cd',
					'600': '#0d81ad',
					'700': '#12688c',
					'800': '#185572',
					'900': '#184761',
					'950': '#0a2e42',
				},
				//main
				'astro-blue': {
					'50': '#eefaff',
					'100': '#dcf5ff',
					'200': '#b2edff',
					'300': '#6de1ff',
					'400': '#20d2ff',
					'500': '#00bdff',
					'600': '#0098df',
					'700': '#0079b4',
					'800': '#006694',
					'900': '#004666',
					'950': '#003551',
				},
				'blue-whale': {
					'50': '#f1f8fe',
					'100': '#e1f0fd',
					'200': '#bde0fa',
					'300': '#83c8f6',
					'400': '#41adef',
					'500': '#1892df',
					'600': '#0b74be',
					'700': '#0a5c9a',
					'800': '#0d4e7f',
					'900': '#114269',
					'950': '#0b2a46',
				},
				'congress-blue': {
					'50': '#eff8ff',
					'100': '#dcedfd',
					'200': '#c0e1fd',
					'300': '#95cffb',
					'400': '#63b4f7',
					'500': '#3e95f3',
					'600': '#2977e7',
					'700': '#2062d5',
					'800': '#214fac',
					'900': '#224a91',
					'950': '#182c53',
				},
				'azure': {
					'50': '#eff6ff',
					'100': '#dbe9fe',
					'200': '#bfd9fe',
					'300': '#94c2fc',
					'400': '#61a0f9',
					'500': '#4180f5',
					'600': '#265dea',
					'700': '#1e4ad7',
					'800': '#1f3dae',
					'900': '#1f3789',
					'950': '#172354',
				},
				'cerulean-blue': {
					'50': '#ecf5ff',
					'100': '#ddecff',
					'200': '#c1dbff',
					'300': '#9cc1ff',
					'400': '#759dff',
					'500': '#5479ff',
					'600': '#2e49f5',
					'700': '#293ed9',
					'800': '#2436af',
					'900': '#25348a',
					'950': '#161d50',
				},
				'electric-violet': {
					'50': '#eceeff',
					'100': '#dde0ff',
					'200': '#c2c6ff',
					'300': '#9c9fff',
					'400': '#7c75ff',
					'500': '#6b55ff',
					'600': '#603af5',
					'700': '#5129d9',
					'800': '#4125ae',
					'900': '#382689',
					'950': '#231650',
				},
				'daisy-bush': {
					'50': '#f4f3ff',
					'100': '#eceafd',
					'200': '#dcd7fd',
					'300': '#c1b7fb',
					'400': '#a28ef7',
					'500': '#8460f2',
					'600': '#743ee9',
					'700': '#652cd5',
					'800': '#5525b2',
					'900': '#492197',
					'950': '#2b1263',
				},



				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}

			},
			fontFamily: {
				philosopher: ['var(--font-philosopher)'],
				merriweather: ['var(--font-merriweather)'],
				trirong: ['var(--font-trirong)'],
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		plugin(function ({ addVariablesForColors, addBase, theme }) {
			let allColors = flattenColorPalette(theme("colors"));
			let newVars = Object.fromEntries(
				Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
			);

			addBase({
				":root": newVars,
			});
		}),
	],
}

