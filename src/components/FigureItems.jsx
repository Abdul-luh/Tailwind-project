import React from "react";

const FigureItems = ({ msg01, styledmsg, msg02, author }) => {
	return (
		<figure className="my-12">
			<blockquote className="bg teal-600 dark:bg-blacl relative rounded-3xl py-12 pl-14 pr-8">
				<p className="before:translate-2 after:-translate-2 mt-2 text-left text-2xl text-white  before:absolute before:left-0 before:top-0 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['“'] after:absolute after:-bottom-0 after:right-0 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['”'] dark:text-slate-400 sm:text-3xl">
					{msg01} <span className="italic">{styledmsg}</span> {msg02}
				</p>
				<figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
					&#8212;{author}
				</figcaption>
			</blockquote>
		</figure>
	);
};

export default FigureItems;
