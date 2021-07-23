const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	theme: {
		minHeight: {
			"1/4": "25vh",
			"1/2": "50vh",
			full: "100%",
		},

		extend: {
			spacing: {
				// "72": "18rem",
				// "84": "21rem",
				// "96": "24rem",
				// "108": "27rem",
			},

			maxWidth: {
				// 8: "12rem",
			},

			fontFamily: {
				sans: ["Geomanist", ...defaultTheme.fontFamily.sans],
			},

			// TODO: good names
			colors: {
				"x-light": "var(--global-color-neutral-xxxx-light)",
				"logo-color": "var(--global-logo-color)",
				"global-page-backgroundColor":
					"var(--global-page-backgroundColor)",
			},
		},
	},

	variants: {},

	plugins: [],
};
