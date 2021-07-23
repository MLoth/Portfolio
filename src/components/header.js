import React from "react";

import { Link } from "gatsby";
import PropTypes from "prop-types";

const Header = () => (
	<div className="px-5 py-8 sm:py-12">
		<header className="max-w-7xl mx-auto flex flex-col justify-start align-start sm:flex-row sm:items-center sm:justify-between">
			<Link to="/">
				<h1 className="text-xl font-semibold text-logo-color">
					<svg
						className="h-8 fill-current"
						viewBox="0 0 255.12 59.72"
					>
						<path d="M67.8,18.82c1.63-3.3,3.86-6.4,6.68-9.13l0,0c13.35-12.92,35-12.92,48.35,0c3.08,2.98,6.27,6.06,9.43,9.13l0,0 c1.63-3.3,3.86-6.4,6.68-9.13l0,0c13.35-12.92,35-12.92,48.35,0c8.66,8.38,19.22,18.6,25.56,24.74c4.45,4.31,11.67,4.31,16.12,0 c0,0,0,0,0,0c4.45-4.31,4.45-11.29,0-15.6l0,0c-4.45-4.31-4.45-11.29,0-15.6v0c4.45-4.31,11.67-4.31,16.12,0l0,0 c13.35,12.92,13.35,33.87,0,46.79l0,0c-6.41,6.21-15.11,9.69-24.18,9.69c-9.07,0-17.76-3.49-24.18-9.69 c-8.66-8.38-19.22-18.6-25.56-24.74c-4.45-4.31-11.67-4.31-16.12,0c0,0,0,0,0,0c-4.45,4.31-4.45,11.29,0,15.6c0,0,0,0,0,0 c4.45,4.31,4.45,11.29,0,15.6l0,0c-4.45,4.31-11.67,4.31-16.12,0c-8.94-8.66-23.29-22.54-32.24-31.2 c-2.14-2.07-5.04-3.23-8.06-3.23c-3.02,0-5.92,1.16-8.06,3.23l0,0c-4.45,4.31-4.45,11.29,0,15.6l0,0c2.14,2.07,3.34,4.87,3.34,7.8 c0,2.93-1.2,5.73-3.34,7.8c0,0,0,0,0,0c-4.45,4.31-11.67,4.31-16.12,0c-8.94-8.66-23.29-22.54-32.24-31.2 c-2.14-2.07-5.04-3.23-8.06-3.23c-3.02,0-5.92,1.16-8.06,3.23c0,0,0,0,0,0c-4.45,4.31-4.45,11.29,0,15.6l0,0 c2.14,2.07,3.34,4.87,3.34,7.8c0,2.93-1.2,5.73-3.34,7.8c0,0,0,0,0,0c-4.45,4.31-11.67,4.31-16.12,0c0,0,0,0,0,0 c-13.35-12.92-13.35-33.87,0-46.79l0,0c13.35-12.92,35-12.92,48.35,0C61.45,12.67,64.63,15.76,67.8,18.82" />
					</svg>
				</h1>
			</Link>

			{/* <nav className="py-4 sm:w-auto w-full">
				<ul className="-mr-8">
					<li className="inline-block mr-8">
						<Link className="py-4 font-semibold text-lg" to="/">
							Home
						</Link>
					</li>

					<li className="inline-block mr-8">
						<Link className="py-4 font-semibold text-lg" to="/blog">
							Blog
						</Link>
					</li>

					<li className="inline-block mr-8">
						<Link
							className="py-4 font-semibold text-lg"
							to="/freelance"
						>
							Werk
						</Link>
					</li>

					<li className="inline-block mr-8">
						<Link
							className="py-4 font-semibold text-lg"
							to="/about"
						>
							Over
						</Link>
					</li>
				</ul>
			</nav>
			 */}
		</header>
	</div>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
