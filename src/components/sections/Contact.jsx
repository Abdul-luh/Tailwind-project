import React from "react";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const handleSendMail = async (e) => {
		e.preventDefault();
		axios
			.post("/email", {
				email: email,
				subject: subject,
				message: message,
			})
			.then((res) => console.log(res));
	};

	return (
		<section
			id="contact"
			className="widescreen:section-min-h tallscreen:section-min-h my-12 scroll-mt-20 p-6">
			<h2 className="mb-6 scroll-mt-20 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
				Contact Us
			</h2>
			<form
				onSubmit={handleSendMail}
				action=""
				className="max-w-xlmx-auto flex flex-col items-start gap-4 text-2xl sm:text-3xl ">
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					minLength={3}
					maxLength={60}
					placeholder="your email"
					className="border-slate900 w-full rounded-xl border border-solid p-3 text-2xl text-black dark:border-none sm:text-3xl"
				/>
				<label htmlFor="subject">Subject:</label>
				<input
					type="text"
					id="subject"
					name="subject"
					value={subject}
					onChange={(e) => setSubject(e.target.value)}
					required
					minLength={3}
					maxLength={60}
					placeholder="your subject"
					className="border-slate900 w-full rounded-xl border border-solid p-3 text-2xl text-black dark:border-none sm:text-3xl"
				/>
				<label htmlFor="message">Message:</label>
				<textarea
					name="message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					id="message"
					cols="30"
					rows="10"
					placeholder="Your message"
					className="border-slate900 w-full rounded-xl border border-solid p-3 text-2xl text-black dark:border-none sm:text-3xl"></textarea>
				<button
					onClick={handleSendMail}
					className="dark:border-nonn w-48 rounded-xl border border-solid border-slate-900 bg-teal-700 p-3 text-white hover:bg-teal-600 active:bg-teal-500">
					Submit
				</button>
			</form>
		</section>
	);
};

export default Contact;
