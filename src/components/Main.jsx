import React from "react";
import Hero from "./sections/Hero";
import Rockets from "./sections/Rockets";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

const Main = ({ items, quotes, rocketdab, ListItems, FigureItems }) => {
	return (
		<main className="mx-auto max-w-4xl">
			<Hero rocketdab={rocketdab} />
			<hr className="darK:bg-white mx-auto w-1/2 scroll-mt-40 bg-black" />

			<Rockets items={items} ListItems={ListItems} />
			<hr className="darK:bg-white mx-auto w-1/2 scroll-mt-40 bg-black" />

			<Testimonials quotes={quotes} FigureItems={FigureItems} />
			<hr className="darK:bg-white mx-auto w-1/2 scroll-mt-40 bg-black" />

			<Contact rocketdab={rocketdab} />
			<hr className="darK:bg-white mx-auto w-1/2 scroll-mt-40 bg-black" />
		</main>
	);
};

export default Main;
