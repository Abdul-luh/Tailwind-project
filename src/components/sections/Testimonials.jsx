import React from "react";

const Testimonials = ({ quotes, FigureItems }) => {
	return (
		<section
			id="testimonials"
			className="widescreen:section-min-h tallscreen:section-min-h my-12 scroll-mt-20 p-6">
			<h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
				Testimonials
			</h2>

			{quotes.map((SingleQuote) => (
				<FigureItems
					key={SingleQuote.id}
					msg01={SingleQuote.msg}
					styledmsg={SingleQuote.styledMsg}
					msg02={SingleQuote.msg02}
					author={SingleQuote.author}
				/>
			))}
		</section>
	);
};

export default Testimonials;
