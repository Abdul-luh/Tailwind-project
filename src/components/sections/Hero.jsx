import React from "react";

const Hero = ({ rocketdab }) => {
	return (
		<section
			id="hero"
			className="widescreen:section-min-h tallscreen:section-min-h mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row">
			<article className="sm:w-1/2">
				<h2 className="max-w-md text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl">
					We Boldly Go{" "}
					<span className="text-indigo-700 dark:text-indigo-300">
						Where No Rockets
					</span>{" "}
					Has Gone Before...
				</h2>
				<p className="max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
					We're building rockets for the next century today. From the moon to
					Mars, Jupuiter and beyond...
				</p>
				<p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
					Think Abdullah.dev...
				</p>
			</article>
			<img src={rocketdab} alt="rocket dab" className="w-1/2" />
		</section>
	);
};

export default Hero;
