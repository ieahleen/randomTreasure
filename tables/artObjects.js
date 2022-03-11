import { rwn } from "../utils/randomWholeNumber.js";

export function art25() {
	const n = rwn(10);
	switch (n) {
		case 1:
			return "Silver ewer";
		case 2:
			return "Carved bone statuette";
		case 4:
			return "Cloth-of-gold vestments";
		case 3:
			return "Small gold bracelet";
		case 5:
			return "Black velvet mask stitched with silver thread";
		case 6:
			return "Copper chalice with silver filigree";
		case 7:
			return "Pair of engraved bone dice";
		case 8:
			return "Small mirror set in a painted wooden frame";
		case 9:
			return "Embroided silk handkerchief";
		case 10:
			return "Gold locket with a painted portrait inside";
	}
}

export function art250() {
	const a = rwn(10);
	switch (a) {
		case 1:
			return "Gold ring set with bloodstones";
		case 2:
			return "Carved ivory statuette";
		case 3:
			return "Large gold bracalet";
		case 4:
			return "Silver necklace with a gemstone pendant";
		case 5:
			return "Bronze crown";
		case 6:
			return "Silk robe with gold embroidery";
		case 7:
			return "Large well-made tapestry";
		case 8:
			return "Brass mug with jade inlay";
		case 9:
			return "Box of turquoise animal figurines";
		case 10:
			return "Gold bird cage with electrum filigree";
	}
}

export function art750() {
	const n = rwn(10);
	return [
		"Silver chalice set with moonstones",
		"Silver-plated steel longsword with jet set in hilt",
		"Carved harp of exotic wood with ivory inlay and zircon gems",
		"Small gold idol",
		"Gold dragon comb set with red garnets as eyes",
		"Bottle stopper cork embossed with gold leaf and set with amethysts",
		"Ceremonial electrum dagger with a black pearl in the pommel",
		"Silver and gold brooch",
		"Obsidian statuette with gold fittings and inlay",
		"Painted gold war mask"
	][n - 1]
}

export function art2500() {
	const n = rwn(10);
	return [
		"Fine gold chain set with a fire opal",
		"Old masterpiece painting",
		"Embroidered silk and velvet mantle set with numerous moonstones",
		"Platinum bracalet set with sapphire",
		"Embroidered glove set with jewel chips",
		"Jeweled anklet",
		"Gold music box",
		"Gold circlet set with four aquamarines",
		"Eye patch with a mock eye set in blue sapphire and moonstone",
		"A necklase string of small pink pearls"
	][n - 1];
}

export function art7500() {
	const n = rwn(8);
	return [
		"Jeweled gold crown",
		"Jeweled platinum ring",
		"Small gold statuette set with rubies",
		"Gold cup set with emerald",
		"Gold jewelry box with platinum filigree",
		"Painted gold child's sarcophagus",
		"Jade game board with solid gold playing pieces",
		"Bejeweled ivory drinking horn with gold filigree"
	][n - 1];
}