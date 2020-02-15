module.exports = {
	siteMetadata: {
		title: `Freelance fullstack developer Kortrijk`,
		description: `Fullstack developer die freelance projecten maakt en studenten laat bijleren @Howest.`,
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
