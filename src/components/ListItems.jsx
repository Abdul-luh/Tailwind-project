import React from "react";

const ListItems = ({ img, heading, cost, body }) => {
	return (
		<li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl">
			<img src={img} className="w-1/2 mb-6" alt={heading} />
			<h3 className="text-3xl text-center text-slate-900 dark:text-white">
				{heading}
			</h3>
			<p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">
				{cost}
			</p>
			<p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">
				{body}
			</p>
		</li>
	);
};

export default ListItems;
