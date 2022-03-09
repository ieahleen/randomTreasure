import { rwn } from "../utils/randomWholeNumber.js";
import { ranArr } from "../utils/helpers.js";
import { cantrips, spells1, spells2 } from "../lists/spells.js";

export function magicItemsA() {
	const n = rwn(100);
	if (n <= 50) return "Potion of healing";
	if (n <= 60) return `${ranArr(cantrips)} spell scroll (cantrip)`;
	if (n <= 70) return "Potion of climbing";
	if (n <= 90) return `${ranArr(spells1)} spell scroll (1st level)`;
	if (n <= 94) return `${ranArr(spells2)} spell scroll (2nd level)`;
	if (n <= 98) return "Potion of greater healing";
	if (n <= 99) return "Bag of holding";
	if (n <= 100) return "Driftglobe";
}