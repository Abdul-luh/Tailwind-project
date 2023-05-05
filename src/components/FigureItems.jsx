import React from "react";

const FigureItems = ({ msg01, styledmsg, msg02, author }) => {
	return (
		<figure className="my-12">
			<blockquote className="bg teal-600 dark:bg-blacl pl-14 pr-8 py-12 rounded-3xl relative">
				<p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400  before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-0 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-2">
					{msg01} <span className="italic">{styledmsg}</span> {msg02}
				</p>
				<figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
					&#8212;{author}
				</figcaption>
			</blockquote>
		</figure>
	);
};

export default FigureItems;
