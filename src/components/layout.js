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
				<footer className="sm:flex sm:justify-between max-w-3xl mx-auto">
					<div>
						<div className="flex text-sm mb-4">
							<p>Martijn Loth</p>
							<p className="ml-6">{new Date().getFullYear()}</p>
						</div>
						<p className="opacity-50 text-sm">BE⁠⁠0730.723.962</p>
					</div>
					<aside class="flex text-sm mb-4">
						<a
							href="https://www.linkedin.com/in/martijn-loth-83915b100/"
							class="opacity-50 hover:opacity-100 "
							target="_blank"
						>
							LinkedIn
						</a>
						<a
							href="https://dribbble.com/mloth"
							class="opacity-50 hover:opacity-100 ml-6"
							target="_blank"
						>
							Dribbble
						</a>
						<a
							href="https://github.com/MLoth"
							class="opacity-50 hover:opacity-100 ml-6"
							target="_blank"
						>
							Github
						</a>
					</aside>
				</footer>
			</div>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
