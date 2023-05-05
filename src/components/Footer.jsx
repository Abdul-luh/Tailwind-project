import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Footer = ({ date }) => {
	return (
		<footer
			id="footer"
			className="text-xl-1/2 bg-teal-700 text-white sm:text-xl">
			<section className="mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justify-between ">
				<address>
					<h2>Abdullah.dev Rocket-Powered Prodects, Inc</h2>
					555 Astro Way
					<br />
					Fairfeild, New Jersy 12345-5555 <br />
					Email:{" "}
					<Link to={"mailto:abdulluhodulate@gmail.com"}>
						Inquires@Abdullah.Dev
					</Link>
					<br />
					Phone: <Link to={"tel: +2347033824496"}>(+234) 70 3382 4496</Link>
				</address>
				<nav className="hidden flex-col gap-2 md:flex" aria-label="footer">
					<HashLink to={"#rockets"} className="hover:opacity-90">
						Our Rockets
					</HashLink>
					<HashLink to={"#testimonial"} className="hover:opacity-90">
						Testimonial
					</HashLink>
					<HashLink to={"#contact"} className="hover:opacity-90">
						Contact Us
					</HashLink>
				</nav>
				<div className="flex flex-col sm:gap-2">
					<p className="text-right">
						Copyright &copy; <span id="year">{date}</span>
					</p>
					<p className="text-right">All Rights Reserved</p>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
