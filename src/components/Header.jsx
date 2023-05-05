import React from "react";
import { HashLink } from "react-router-hash-link";

const Header = ({ handleToggleMobileMenu }) => {
	return (
		<header className="sticky top-0 z-10 bg-teal-700 text-white">
			<section className="mx-auto flex max-w-4xl items-center justify-between p-4">
				<h1 className="text-3xl font-medium">
					<HashLink to="#hero">
						🚀 Abdullah
						<span className=" font-semibold text-gray-900">.dev</span>
					</HashLink>
				</h1>
				<button
					id="harmburger-btn"
					onClick={(e) =>
						handleToggleMobileMenu(
							document.getElementById("mobile-menu"),
							e.currentTarget
						)
					}
					className=" relative h-8 w-8 cursor-pointer text-3xl md:hidden">
					<div
						className="before:transitions-all after:transitions-all absolute top-4 -mt-0.5
						h-1 w-8 rounded bg-white duration-500 before:absolute before:h-1 before:w-8 
						before:-translate-x-4 before:-translate-y-3 
						before:rounded 
						before:bg-white
						before:content-[''] after:absolute 
						after:h-1 after:w-8
						after:-translate-x-4 after:translate-y-3 after:rounded
						after:bg-white after:content-['']"></div>
					{/* &#9776; */}
				</button>
				<nav className="hidden space-x-8 text-xl md:block" aria-label="main">
					<HashLink to={"#rockets"} className="hover:opacity-90">
						Our Rockets
					</HashLink>
					<HashLink to={"#testimonials"} className="hover:opacity-90">
						Testimonials
					</HashLink>
					<HashLink to={"#contact"} className="hover:opacity-90">
						Contact Us
					</HashLink>
				</nav>
				<section
					id="mobile-menu"
					onClick={(e) =>
						handleToggleMobileMenu(
							e.currentTarget,
							document.getElementById("harmburger-btn")
						)
					}
					className="justify-content-center absolute left-0 top-[68px] hidden w-full origin-top animate-open-menu flex-col bg-black text-5xl">
					{/* <button className="text-8xl self-end px-6 hover:opacity-80">
							&times;
						</button> */}
					<nav
						className="item-center flex min-h-screen flex-col py-8"
						aria-label="mobile">
						<HashLink
							to="#hero"
							className="w-full py-6 text-center hover:opacity-80">
							Home
						</HashLink>
						<HashLink
							to="#rockets"
							className="w-full py-6 text-center hover:opacity-80">
							Our Rockets
						</HashLink>
						<HashLink
							to="#testimonials"
							className="w-full py-6 text-center hover:opacity-80">
							Testimonials
						</HashLink>
						<HashLink
							to="#contact"
							className="w-full py-6 text-center hover:opacity-80">
							Contact Us
						</HashLink>
						<HashLink
							to="#footer"
							className="w-full py-6 text-center hover:opacity-80">
							Legal
						</HashLink>
					</nav>
				</section>
			</section>
		</header>
	);
};

export default Header;
