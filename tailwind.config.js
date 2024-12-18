/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: ["class", 'class'],
	theme: {
		extend: {
			backgroundImage: {},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				transparent: 'transparent',
				custom: {
					'ice_blue': { DEFAULT: '#83fff9', 100: '#004e4a', 200: '#009b93', 300: '#00e9dd', 400: '#37fff5', 500: '#83fff9', 600: '#9dfffa', 700: '#b6fffb', 800: '#cefffd', 900: '#e7fffe' },
					'vivid_sky_blue': { DEFAULT: '#47d4ff', 100: '#003241', 200: '#006483', 300: '#0096c4', 400: '#06c5ff', 500: '#47d4ff', 600: '#6cddff', 700: '#91e5ff', 800: '#b6eeff', 900: '#daf6ff' },
					'indigo_dye': { DEFAULT: '#004666', 100: '#000e14', 200: '#001c29', 300: '#002a3d', 400: '#003852', 500: '#004666', 600: '#007db8', 700: '#0ab1ff', 800: '#5ccbff', 900: '#ade5ff' },
					'selective_yellow': { DEFAULT: '#ffb805', 100: '#342500', 200: '#684b00', 300: '#9c7000', 400: '#d09500', 500: '#ffb805', 600: '#ffc637', 700: '#ffd569', 800: '#ffe39b', 900: '#fff1cd' },
					'cerise': { DEFAULT: '#ed456c', 100: '#380611', 200: '#6f0b22', 300: '#a71134', 400: '#df1645', 500: '#ed456c', 600: '#f06a8a', 700: '#f490a7', 800: '#f8b5c4', 900: '#fbdae2' },
					'fandango': { DEFAULT: '#a01a7d', 100: '#200519', 200: '#3f0a31', 300: '#5f0f4a', 400: '#7e1562', 500: '#a01a7d', 600: '#d623a6', 700: '#e457be', 800: '#ed8fd4', 900: '#f6c7e9' },

					'lapis_lazuli': { DEFAULT: '#1863a0', 100: '#051420', 200: '#0a2740', 300: '#0e3b60', 400: '#134f80', 500: '#1863a0', 600: '#2086d9', 700: '#55a4e6', 800: '#8dc3ee', 900: '#c6e1f7' }, 
					'prussian_blue': { DEFAULT: '#0b2a46', 100: '#02090e', 200: '#04111c', 300: '#071a2a', 400: '#092238', 500: '#0b2a46', 600: '#175891', 700: '#2285db', 800: '#6bade8', 900: '#b5d6f3' }, 
					'celestial_blue': { DEFAULT: '#2894e1', 100: '#061e2f', 200: '#0d3c5d', 300: '#135a8c', 400: '#1978bb', 500: '#2894e1', 600: '#53a9e7', 700: '#7ebfed', 800: '#a9d4f3', 900: '#d4eaf9' }, 
					'non_photo_blue': { DEFAULT: '#96e6f8', 100: '#053e4b', 200: '#0a7c96', 300: '#0ebae0', 400: '#4bd5f3', 500: '#96e6f8', 600: '#abebfa', 700: '#c0f0fb', 800: '#d5f5fc', 900: '#eafafe' },
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
				philosopher: "philosopher",
				merriweather: "merriweather",
				martel: "martel",
				volkhov: "volkhov",
				voces: "voces",
				spacegrotesk: "space-grotesk",
				amethysta: "amethysta",
				trirong: "trirong",
				crimson: "crimson-pro",
				trykker: "trykker",

			},
		},
	},
	plugins: [require("tailwindcss-animate")],
}
