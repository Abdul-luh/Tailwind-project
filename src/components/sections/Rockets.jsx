import React from "react";

const Rockets = ({ items, ListItems }) => {
	return (
		<section
			id="rockets"
			className="widescreen:section-min-h tallscreen:section-min-h my-12 scroll-mt-20 p-6">
			<h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
				Our Rockets
			</h2>

			<ul className="mx-auto my-12 flex list-none flex-col items-center gap-8 sm:flex-row">
				{items.map((item) => (
					<ListItems
						key={item.id}
						img={item.img}
						heading={item.heading}
						cost={item.cost}
						body={item.body}
					/>
				))}
			</ul>
		</section>
	);
};

export default Rockets;
