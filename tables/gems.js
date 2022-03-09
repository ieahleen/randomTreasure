import { rwn } from "../utils/randomWholeNumber";
import { ranArr } from "../utils/helpers";

function gems10() {
	const y = rwn(12);
	switch (y) {
	case 1:
		return "Azurite (opaque mottled deep blue)";
	case 2:
		return `Banded agate (translucent striped ${ranArr(
			"brown",
			"blue",
			"white",
			"red"
		)})`;
	case 3:
		return "Blue quartz (transparent pale blue)";
	case 4:
		return `Eye agate (translucent circles of ${ranArr(
			"gray",
			"white",
			"brown",
			"blue",
			"green"
		)})`;
	case 5:
		return "Hematite (opaque gray-black)";
	case 6:
		return "Lapis lazuli (opaque light and dark blue with yellow flecks)";
	case 7:
		return "Malachite (opaque striated light and dark green)";
	case 8:
		return `Moss agate (translucent ${ranArr(
			"pink",
			"yellow-white"
		)} with ${ranArr("mossy gray", "green")} markings)`;
	case 9:
		return "Obsidian (opaque black)";
	case 10:
		return "Rhodochrosite (opaque light pink)";
	case 11:
		return "Tiger eye (translucent brown with golden center)";
	case 12:
		return "Turquoise (opaque light blue-green)";
	}
}
function gems50() {
	const n = rwn(12);
	switch (n) {
	case 1:
		return "Bloodstone (opaque dark gray with red flecks)";
	case 2:
		return "Carnelian (opaque orange to red-brown)";
	case 3:
		return "Chalcedony (opaque white)";
	case 4:
		return "Chrysoprase (translucent green)";
	case 5:
		return "Citrine (transparent pale yellow-brown)";
	case 6:
		return `Jasper (opaque ${ranArr("blue", "black", "brown")})`;
	case 7:
		return "Moonstone (translucent withe with pale blue glow)";
	case 8:
		return `Onyx (opaque bands of ${ranArr(
			"black and white",
			"pure black",
			"pure white"
		)})`;
	case 9:
		return `Quartz (transparent ${ranArr("white", "smoky gray", "yellow")})`;
	case 10:
		return "Sardonyx (opaque bands of red and white)";
	case 11:
		return "Star rose quartz (translucent rosy stone with white star-shaped center)";
	case 12:
		return "Zircon (transparent pale blue-green)";
	}
}
function gems100() {
	const n = rwn(10);
	switch (n) {
	case 1:
		return "Amber (transparent watery gold to rich gold)";
	case 2:
		return "Amethyst (transparent deep purple)";
	case 3:
		return "Chrysoberyl (transparent yellow-green to pale green)";
	case 4:
		return "Coral (opaque crimson)";
	case 5:
		return `Garnet (transparent ${ranArr("red", "brown-green", "violet")})`;
	case 6:
		return `Jade (transparent ${ranArr(
			"light green",
			"deep green",
			"white"
		)})`;
	case 7:
		return "Jet (opaque deep black)";
	case 8:
		return `Pearl (opaque lustruous ${ranArr("white", "yellow", "pink")})`;
	case 9:
		return `Spinel (transparent ${ranArr("red", "red-brown", "deep green")})`;
	case 10:
		return `Tourmaline (transparent ${ranArr(
			"pale green",
			"blue",
			"brown",
			"red"
		)})`;
	}
}

export {gems10, gems50, gems100};