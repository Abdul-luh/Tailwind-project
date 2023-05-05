import React from "react";

const Contact = () => {
	return (
		<section
			id="contact"
			className="widescreen:section-min-h tallscreen:section-min-h my-12 scroll-mt-20 p-6">
			<h2 className="mb-6 scroll-mt-20 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
				Contact Us
			</h2>
			<form
				action=""
				className="max-w-xlmx-auto flex flex-col items-start gap-4 text-2xl sm:text-3xl ">
				<label htmlFor="subject">Subject:</label>
				<input
					type="text"
					id="subject"
					name="subject"
					required
					minLength={3}
					maxLength={60}
					placeholder="your subject"
					className="border-slate900 w-full rounded-xl border border-solid p-3 text-2xl text-black dark:border-none sm:text-3xl"
				/>
				<label htmlFor="message">Message:</label>
				<textarea
					name="message"
					id="message"
					cols="30"
					rows="10"
					placeholder="Your message"
					className="border-slate900 w-full rounded-xl border border-solid p-3 text-2xl text-black dark:border-none sm:text-3xl"></textarea>
				<button className="dark:border-nonn w-48 rounded-xl border border-solid border-slate-900 bg-teal-700 p-3 text-white hover:bg-teal-600 active:bg-teal-500">
					Submit
				</button>
			</form>
		</section>
	);
};

export default Contact;
