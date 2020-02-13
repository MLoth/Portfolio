module.exports = {
	siteMetadata: {
		title: `Fullstack developer Martijn Loth`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `Martijn Loth`,
	},

	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-postcss`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Portfolio van Martijn Loth`,
				short_name: `Martijn Loth`,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#111`,
				display: `minimal-ui`,

				icon: `src/images/ml-icon.png`,
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// TODO: configure this
		`gatsby-plugin-offline`,
	],
};
