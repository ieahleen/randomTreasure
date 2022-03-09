import {rwn} from "../utils/randomWholeNumber.js";

function art25() {
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
function art250() {
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

export {art25, art250 };