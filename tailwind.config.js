module.exports = {
  mode: 'jit',

  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
      `content/**/*.md`,
    ],
  },

  darkMode: 'media',

  theme: {
    extend: {
      fontFamily: {
        geomanist: ['Geomanist'],
      },
      transitionProperty: {
        maxHeight: 'max-height',
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
};
