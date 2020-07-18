module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        sepia: {
          100: "rgba(60, 55, 30, 0.1)",
          300: "rgba(60, 55, 30, 0.3)",
          300: "rgba(60, 55, 30, 0.5)",
          600: "rgba(60, 55, 30, 0.6)",
          900: "rgba(60, 55, 30, 0.9)",
        },
        brand: "var(--brand)",
        'brand-second': "var(--brand-second)"
      },
    },
  },
  textColor: theme => theme('colors'),
  borderColor: theme => theme('colors'),
  backgroundColor: theme => theme('colors'),
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover']
  },
  plugins: [],
};
