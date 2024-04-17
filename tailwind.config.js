/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: '16px',
            screens: {
              '2xl': '1440px',
            },
          },
        extend: {
          colors: {
            "primary": "#ecad15",
          }
        },
    },
    corePlugins: {
      preflight: true,
    },
    plugins: [],
}