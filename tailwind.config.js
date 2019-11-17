module.exports = {
  theme: {
    colors: {
      yellow: '#EAC43D',
      'blue-dark': '#242E38',
      blue: '#2A5C99',
      white: 'white',
      transparent: 'transparent',
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
    },
    fontSize: {
      '14': '0.875rem',
      '24': '1.5rem',
      '30': '1.875rem',
      '40': '2.55rem',
    },
    linearGradients: theme => ({
      colors: theme('colors'),
    }),
    borderWidth: {
      '3': '3px',
    },
    maxWidth: {
      'big-screen': '160rem',
    },
    extend: {
      borderRadius: {
        xl: '1rem',
      },
      boxShadow: {
        header: '0 10px 15px 0 rgba(0, 0, 0, 0.1), 0 4px 6px 0 rgba(0, 0, 0, 0.05)',
      },
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-gradients')(),
  ],
};
