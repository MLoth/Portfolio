import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
// import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<div className="min-h-1/2 px-5 py-5 flex items-center">
			{/* Later wordt deze breakpoint wel weer 6 ;-) */}
			<div className="block max-w-3xl w-full mx-auto">
				<h1 className="text-3xl font-bold md:text-4xl leading-tight mb-2">
					Fullstack developer regio Kortrijk
				</h1>
				<div className="js-rotate-holder">
					<h2 className="absolute w-full bg-global-page-backgroundColor text-xl font-semibold js-rotate-front">
						<span className="mr-2" aria-label="Les" role="img">
							👨🏼‍🎓
						</span>
						Ik geef les
					</h2>
					<h2 className="absolute w-full bg-global-page-backgroundColor text-xl font-semibold js-rotate-top">
						<span
							className="mr-2"
							aria-label="Freelance"
							role="img"
						>
							🤝
						</span>
						Ik werk freelance
					</h2>
					<h2 className="absolute w-full bg-global-page-backgroundColor text-xl font-semibold js-rotate-back">
						<span
							className="mr-2"
							aria-label="Laptop work"
							role="img"
						>
							👨🏻‍💻
						</span>
						Ik develop fullstack JS
					</h2>
					<h2 className="absolute w-full bg-global-page-backgroundColor text-xl font-semibold js-rotate-bottom">
						<span className="mr-2" aria-label="Boom" role="img">
							🌳
						</span>
						Ik hou van de natuur
					</h2>
				</div>
			</div>
		</div>
		<div className="px-6">
			<div className="max-w-3xl mx-auto mb-12">
				<p>
					Als freelance web consultant kan ik helpen bij diverse
					projecten. Vanuit een sterkte design en marketing
					voorkennis, werk ik momenteel aan allerlei fullstack
					applicaties.
				</p>

				<p className="mt-3 opacity-50">
					⚠️ Momenteel ben ik dit portfolio nog aan het herwerken, kom
					later nog eens langs.
				</p>
			</div>
		</div>
		{/* Hello, I'm a consultant for structuring fullstack applications with a
		passion for JS. If you need a hand with a PWA or any other piece of
		web-art, I can help. Currently working on a static generated webshop
		with a headless e-commerce: Cardsly. */}
		{/* <div className="px-6">
			<div className="max-w-6xl mx-auto pt-10">
				<h1 className="text-3xl font-bold md:text-4xl leading-tight mb-2">
					Projecten
				</h1>
				<p className="text-sm font-semibold">01/05</p>
			</div>
		</div>

		<div className="projects-holder mr-auto pt-4 pb-32">
			<div className="flex items-end">
				<div className="project__list w-full overflow-hidden">
					<div className="flex items-end justify-end">
						<div className="block mx-4">
							<img className="project__link" src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
						</div>

						<div className="block mx-4">
							<img className="project__link" src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
						</div>

						<div className="block mx-4">
							<img
								className="project__link"
								src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
								alt=""
							/>
						</div>

						<div className="block mx-4">
							<img
								className="project__link"
								src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
								alt=""
							/>
						</div>

						<div className="block mx-4">
							<img
								className="project__link"
								src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
								alt=""
							/>
						</div>

						<div className="block mx-4">
							<img
								className="project__link"
								src="https://images.pexels.com/photos/2529179/pexels-photo-2529179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
								alt=""
							/>
						</div>
					</div>
				</div>

				<div className="projects__info flex content-center pl-4">
					<div>
						<h2 className="pt-3 pb-2 text-lg font-semibold">
							Cardsly
						</h2>
						<p className="leading-relaxed">
							Dit project is een webshop die ik voor mezelf
							gemaakt heb. Via een SEO geoptimaliseerde webshop...
						</p>
						<Link className="block pt-4 opacity-75" to="/">
							Bekijk project
						</Link>
					</div>
				</div>
			</div>
		</div>*/}
		{/* <div className="pt-10 pb-16 px-6">
			<div className="max-w-6xl mx-auto">
				<h1 className="text-3xl font-bold md:text-4xl leading-tight mb-2">
					Blog
				</h1>

				<div className="flex flex-wrap -mx-4 overflow-hidden">
					<div className="my-4 px-4 w-full overflow-hidden md:w-1/3">
						<img
							src="https://images.pexels.com/photos/868097/pexels-photo-868097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
							alt=""
						/>
						<h2 className="pt-3 pb-2 text-lg">Hello</h2>
						<h3 className="opacity-50">Hello</h3>
					</div>

					<div className="my-4 px-4 w-full overflow-hidden md:w-1/3">
						<img
							src="https://images.pexels.com/photos/868097/pexels-photo-868097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
							alt=""
						/>
						<h2 className="pt-3 pb-2 text-lg">Hello daar</h2>
						<h3 className="opacity-50">Hello</h3>
					</div>

					<div className="my-4 px-4 w-full overflow-hidden md:w-1/3">
						<img
							src="https://images.pexels.com/photos/868097/pexels-photo-868097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
							alt=""
						/>
						<h2 className="pt-3 pb-2 text-lg">Hoe is het?</h2>
						<h3 className="opacity-50">Hello</h3>
					</div>
				</div>

				<Link className="block mt-3" to="/blog">
					Meer blogposts
				</Link>
			</div>
		</div> */}
	</Layout>
);

export default IndexPage;
