/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<>
			<Header siteTitle={data.site.siteMetadata.title} />

			<main>{children}</main>

			<div className="px-5 py-12">
				<footer className="max-w-6xl mx-auto">
					<div className="flex opacity-50 text-sm mb-4">
						<p>Martijn Loth</p>
						{/* <p className="ml-6">{{ new Date().getFullYear() }}</p> */}
					</div>
					<p className="opacity-50 text-sm">BE⁠⁠0730.723.962</p>
				</footer>
			</div>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
