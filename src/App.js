import rocketdab from "./images/rocketdab.png";
import rocketlaunch from "./images/rocketlaunch.png";
import rocketman from "./images/rocketman.png";
import rocketride from "./images/rocketride.png";
import ListItems from "./components/ListItems";
import FigureItems from "./components/FigureItems";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
	const items = [
		{
			id: 1,
			img: rocketman,
			heading: "Explorer",
			cost: "$",
			body: "Affordable Exploration",
		},
		{
			id: 2,
			img: rocketride,
			heading: "Adventurer",
			cost: "$$",
			body: "Best Selling Rocket",
		},
		{
			id: 3,
			img: rocketlaunch,
			heading: "Infinity",
			cost: "$$$",
			body: "Luxury Starship",
		},
	];

	const handleToggleMobileMenu = (showMenu, hamburger) => {
		showMenu.classList.toggle("flex");
		showMenu.classList.toggle("hidden");
		hamburger.classList.toggle("toggle-btn");
	};
	const date = new Date().getFullYear();

	const quotes = [
		{
			id: 1,
			msg: "Abdullah.dev has always been there form me. their explorer rocket arrived in a wooden crate as expected. Life-long customer! A++ shopping experience",
			styledMsg: "",
			msg02: "",
			author: "wile E. Cayote, Genius",
		},
		{
			id: 2,
			msg: "The acme adventurer Rocket has thwarted my Illudium q-36 Explosive Space Modulator on several occations",
			styledMsg: "This makes me very, very angry.",
			msg02:
				"nevertheless, K-9 have awarded Acme the Martion contract for space exploration rockets based on Acme's Quality and sturdy designs",
			author: `Marvin The Martian & k-9`,
		},
		{
			id: 3,
			msg: "I Knew I only wanted ---",
			styledMsg: "I needed---",
			msg02:
				"Acme's Infinity rocket for my mission in space. Acme delivered it in once day! Nothing says take meto your leader like acme's Infinity Rocket",
			author: "Buzz Lightyear",
		},
	];

	return (
		<div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white sm:scroll-smooth">
			<Header handleToggleMobileMenu={handleToggleMobileMenu} />
			<Main
				items={items}
				quotes={quotes}
				rocketdab={rocketdab}
				ListItems={ListItems}
				FigureItems={FigureItems}
			/>

			<Footer date={date} />
		</div>
	);
}

export default App;
