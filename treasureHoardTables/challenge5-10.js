import { randomWholeNumber } from "../utils/helpers.js";
import { objects } from "../utils/helpers.js";
import { numberCoins } from "../utils/numberOfCoins.js";
import { art25, art250 } from "../tables/artObjects.js";
import { gems50, gems100 } from "../tables/gems.js";
import { magicItemsA } from "../tables/magicItemsA.js";
import { magicItemsB } from "../tables/magicItemsB.js";
import { magicItemsC } from "../tables/magicItemsC.js";
import { magicItemsD } from "../tables/magicItemsD.js";
import { magicItemsF } from "../tables/magicItemsF.js";
import { magicItemsG } from "../tables/magicItemsG.js";
import { magicItemsH } from "../tables/magicItemsH.js";

export function treasureF() {
	const n = randomWholeNumber(100);
	const treasure = {};
	treasure.CP = numberCoins(2, 6, 100);
	treasure.SP = numberCoins(2, 6, 1000);
	treasure.GP = numberCoins(6, 6, 100);
	treasure.PP = numberCoins(3, 6, 10);
	if (n >= 1 && n <= 4) {
		// nothing
	} else if (
		(n >= 5 && n <= 10) ||
    (n >= 29 && n <= 32) ||
    (n >= 45 && n <= 49) ||
    (n >= 64 && n <= 66) ||
    (n >= 75 && n <= 76) ||
    (n >= 81 && n <= 84)
	) {
		treasure["25 gp art objects"] = objects(2, 4, art25);
	} else if (
		(n >= 11 && n <= 16) ||
    (n >= 33 && n <= 36) ||
    (n >= 50 && n <= 54) ||
    (n >= 67 && n <= 69) ||
    (n >= 77 && n <= 78) ||
    (n >= 85 && n <= 88)
	) {
		treasure["50 gp gems"] = objects(3, 6, gems50);
	} else if (
		(n >= 17 && n <= 22) ||
    (n >= 37 && n <= 40) ||
    (n >= 55 && n <= 59) ||
    (n >= 70 && n <= 72) ||
    n === 79 ||
    (n >= 89 && n <= 91) ||
    (n >= 95 && n <= 96) ||
    n === 99
	) {
		treasure["100 gp gems"] = objects(3, 6, gems100);
	} else if (
		(n >= 23 && n <= 28) ||
    (n >= 41 && n <= 44) ||
    (n >= 60 && n <= 63) ||
    (n >= 73 && n <= 74) ||
    n === 80 ||
    (n >= 92 && n <= 94) ||
    (n >= 97 && n <= 98) ||
    n === 100
	) {
		treasure["250 gp art objects"] = objects(2, 4, art250);
	}

	if (n <= 28) {
		// nothing
	} else if (n <= 44) {
		treasure["Magic Items"] = objects(1, 6, magicItemsA);
	} else if (n <= 63) {
		treasure["Magic Items"] = objects(1, 4, magicItemsB);
	} else if (n <= 74) {
		treasure["Magic Items"] = objects(1, 4, magicItemsC);
	} else if (n <= 80) {
		treasure["Magic Items"] = objects(1, 1, magicItemsD);
	} else if (n <= 94) {
		treasure["Magic Items"] = objects(1, 4, magicItemsF);
	} else if (n <= 98) {
		treasure["Magic Items"] = objects(1, 4, magicItemsG);
	} else if (n <= 100) {
		treasure["Magic Items"] = objects(1, 1, magicItemsH);
	}
	return treasure;
}