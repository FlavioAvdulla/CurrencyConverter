/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", "class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  	extend: {
  		boxShadow: {
  			'shadow-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
  			'shadow-dark': '0 6px 8px rgba(0, 0, 0, 0.25)'
  		},
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
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
  			camptonBlack: [
  				'CamptonBlack',
  				'sans-serif'
  			],
  			camptonBlackItalic: [
  				'CamptonBlackItalic',
  				'sans-serif'
  			],
  			camptonBold: [
  				'CamptonBold',
  				'sans-serif'
  			],
  			camptonBoldItalic: [
  				'CamptonBoldItalic',
  				'sans-serif'
  			],
  			camptonBook: [
  				'CamptonBook',
  				'sans-serif'
  			],
  			camptonBookItalic: [
  				'CamptonBookItalic',
  				'sans-serif'
  			],
  			camptonExtraBold: [
  				'CamptonExtraBold',
  				'sans-serif'
  			],
  			camptonExtraBoldItalic: [
  				'CamptonExtraBoldItalic',
  				'sans-serif'
  			],
  			camptonExtraLight: [
  				'CamptonExtraLight',
  				'sans-serif'
  			],
  			camptonExtraLightItalic: [
  				'CamptonExtraLightItalic',
  				'sans-serif'
  			],
  			camptonLight: [
  				'CamptonLight',
  				'sans-serif'
  			],
  			camptonLightItalic: [
  				'CamptonLightItalic',
  				'sans-serif'
  			],
  			camptonMedium: [
  				'CamptonMedium',
  				'sans-serif'
  			],
  			camptonMediumItalic: [
  				'CamptonMediumItalic',
  				'sans-serif'
  			],
  			camptonSemiBold: [
  				'CamptonSemiBold',
  				'sans-serif'
  			],
  			camptonSemiBoldItalic: [
  				'CamptonSemiBoldItalic',
  				'sans-serif'
  			],
  			camptonThin: [
  				'CamptonThin',
  				'sans-serif'
  			],
  			camptonThinItalic: [
  				'CamptonThinItalic',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		screens: {
  			xs: '320px',
  			sm: '425px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1440px',
  			'2xl': '1536px'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/aspect-ratio"),
  ],
}
