module.exports = {
  theme: {
    fontFamily: {
      sans: 'Poppins, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1400px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        green: '#6AC75A',
        indigo: '#783BFF',
        'gray-muted': '#848485',
        'gray-light': '#F8F8F8',
      },
    },
  },
  variants: {},
  plugins: [],
}
