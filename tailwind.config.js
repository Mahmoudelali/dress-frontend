/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-hero': 'linear-gradient(125deg, rgba(238,238,238,1) 0%, rgba(238,238,238,1) 50%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.4) 85%, rgba(238,238,238,1) 85%)',
        'gradient-hero-small': 'linear-gradient(125deg, rgba(238,238,238,1) 0%, rgba(238,238,238,1) 50%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.4) 85%, rgba(238,238,238,1) 85%)',
        'gradient-hero-radial': 'radial-gradient(circle at left,rgba(238,238,238,1) 0%,rgba(238,238,238,1) 40%,rgba(238,238,238,0) 40%,rgba(238,238,238,0) 80%,rgba(238,238,238,1) 80%)',

        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
