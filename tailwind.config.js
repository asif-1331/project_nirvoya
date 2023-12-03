/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1400px',
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif']
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700'
      },
      colors:{
        bg:'#FAFAFA',
        primary:'#0198E9',
        secondary:'#0198E9',
        text_primary:'#333'

      },
      boxShadow: {
        categories: '0px 2px 8px 0px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}