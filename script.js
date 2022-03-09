import { rwn } from "./utils/randomWholeNumber.js";
import { numberCoins } from "./utils/numberOfCoins.js";
import { art25, art250 } from "./tables/artObjects.js";
import { objects } from "./utils/helpers.js";
import { magicItemsH } from "./tables/magicItemsH.js";
import { magicItemsG } from "./tables/magicItemsG.js";
import { magicItemsF } from "./tables/magicItemsF.js";
import { magicItemsD } from "./tables/magicItemsD.js";
import { magicItemsC } from "./tables/magicItemsC.js";
import { magicItemsB } from "./tables/magicItemsB.js";
import { magicItemsA } from "./tables/magicItemsA.js";
import { gems10, gems50, gems100 } from "./tables/gems.js";
import { treasureA } from "./individualTreasureTables/challenge4.js";

const targetElement = document.querySelector("#t");

function treasureB() {
	const t = rwn(100);
	const treasure = {};
	if (t <= 30) {
		treasure.CP = numberCoins(4, 6, 100);
		treasure.EP = numberCoins(1, 6, 10);
	} else if (t <= 60) {
		treasure.SP = numberCoins(6, 6, 10);
		treasure.GP = numberCoins(2, 6, 10);
	} else if (t <= 70) {
		treasure.EP = numberCoins(3, 6, 10);
		treasure.GP = numberCoins(2, 6, 10);
	} else if (t <= 95) {
		treasure.GP = numberCoins(4, 6, 10);
	} else {
		treasure.GP = numberCoins(2, 6, 10);
		treasure.PP = numberCoins(3, 6, 1);
	}

	return treasure;
}

function treasureC() {
	const t = rwn(100);
	const treasure = {};
	if (t <= 20) {
		treasure.SP = numberCoins(4, 6, 100);
		treasure.GP = numberCoins(1, 6, 100);
	} else if (t <= 35) {
		treasure.EP = numberCoins(1, 6, 100);
		treasure.GP = numberCoins(1, 6, 100);
	} else if (t <= 75) {
		treasure.GP = numberCoins(2, 6, 100);
		treasure.PP = numberCoins(1, 6, 10);
	} else {
		treasure.GP = numberCoins(2, 6, 100);
		treasure.PP = numberCoins(2, 6, 10);
	}

	return treasure;
}

function treasureD() {
	const c = rwn(100);
	const treasure = {};
	if (c <= 15) {
		treasure.EP = numberCoins(2, 6, 1000);
		treasure.GP = numberCoins(8, 6, 100);
	} else if (c <= 55) {
		treasure.GP = numberCoins(1, 6, 1000);
		treasure.PP = numberCoins(1, 6, 100);
	} else if (c <= 100) {
		treasure.GP = numberCoins(1, 6, 1000);
		treasure.PP = numberCoins(2, 6, 100);
	}
	return treasure;
}

function treasureE() {
	const treasure = {
		CP: numberCoins(6, 6, 100),
		SP: numberCoins(3, 6, 100),
		GP: numberCoins(2, 6, 10)
	};

	const n = rwn(100);
	if (n <= 6) {
		// nothing
	} else if (n <= 16) {
		treasure["10 gp gems"] = objects(2, 6, gems10);
	} else if (n <= 26) {
		treasure["25 gp art objects"] = objects(2, 4, art25);
	} else if (n <= 36) {
		treasure["50 gp gems"] = objects(2, 6, gems50);
	} else if (n <= 44) {
		treasure["10 gp gems"] = objects(2, 6, gems10);
		treasure["Magic items"] = objects(1, 6, magicItemsA);
	} else if (n <= 52) {
		treasure["25 gp art objects"] = objects(2, 4, art25);
		treasure["Magic Items"] = objects(1, 6, magicItemsA);
	} else if (n <= 60) {
		treasure["50 gp gems"] = objects(2, 6, gems50);
		treasure["Magic Items"] = objects(1, 6, magicItemsA);
	} else if (n <= 65) {
		treasure["10 gp gems"] = objects(2, 6, gems10);
		treasure["Magic Items"] = objects(1, 4, magicItemsB);
	} else if (n <= 70) {
		treasure["25 gp art objects"] = objects(2, 4, art25);
		treasure["Magic Items"] = objects(1, 4, magicItemsB);
	} else if (n <= 75) {
		treasure["50 gp gems"] = objects(2, 6, gems50);
		treasure["Magic Items"] = objects(1, 4, magicItemsB);
	} else if (n <= 78) {
		treasure["10 gp gems"] = objects(2, 6, gems10);
		treasure["Magic Items"] = objects(1, 4, magicItemsC);
	} else if (n <= 80) {
		treasure["25 gp art objects"] = objects(2, 6, art25);
		treasure["Magic Items"] = objects(1, 4, magicItemsC);
	} else if (n <= 85) {
		treasure["50 gp gems"] = objects(2, 6, gems50);
		treasure["Magic Items"] = objects(1, 4, magicItemsC);
	} else if (n <= 92) {
		treasure["25 gp art objects"] = objects(2, 4, art25);
		treasure["Magic Items"] = objects(1, 4, magicItemsF);
	} else if (n <= 97) {
		treasure["50 gp gems"] = objects(2, 6, gems50);
		treasure["Magic Items"] = objects(1, 4, magicItemsF);
	} else if (n <= 99) {
		treasure["25 gp art objects"] = objects(2, 4, art25);
		treasure["Magic Items"] = objects(1, 1, magicItemsG);
	} else if (n <= 100) {
		treasure["50 gp gems"] = objects(2, 6, gems50);
		treasure["Magic Items"] = objects(1, 1, magicItemsG);
	}

	return treasure;
}

function treasureF() {
	const n = rwn(100);
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
document.querySelector("#a").addEventListener("click", () => targetElement.textContent = JSON.stringify(treasureA(), null, 2), alert("fine"));
document.querySelector("#b").addEventListener("click", () => targetElement.textContent = JSON.stringify(treasureB(), null, 2));
document.querySelector("#c").addEventListener("click", () => targetElement.textContent = JSON.stringify(treasureC(), null, 2));
document.querySelector("#d").addEventListener("click", () => targetElement.textContent = JSON.stringify(treasureD(), null, 2));
document.querySelector("#e").addEventListener("click", () => targetElement.textContent = JSON.stringify(treasureE(), null, 2));
document.querySelector("#f").addEventListener("click", () => targetElement.textContent = JSON.stringify(treasureF(), null, 2));