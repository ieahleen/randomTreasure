import { armors } from "../lists/other.js";
import { spells1, spells2, spells3 } from "../lists/spells.js";
import { swords } from "../lists/weapons.js";
import { numberCoins } from "./numberOfCoins.js";
import { gems100 } from "../tables/gems.js"

export function randomItemFromArray(...arr) {
	if (Array.isArray(arr[0])) arr = arr[0];
	return arr[Math.floor(Math.random() * arr.length)];
}

export function randomWholeNumber(max) {
	return Math.floor(Math.random() * max) + 1;
}
  
export function listOfObjectsFromTable(numberOfDice, typeOfDie, itemFromRandomTable) {
	let numberOfItems = 0;
	for (let i = 0; i < numberOfDice; i++) {
		numberOfItems += randomWholeNumber(typeOfDie);
	}
	const listOfOutputObjects = [];
	for (let j = 0; j < numberOfItems; j++) {
		listOfOutputObjects.push(itemFromRandomTable());
	}
  
	return listOfOutputObjects;
}

export function randomAlignment() {
	const n = randomWholeNumber(n);
	switch(n) {
		case 1:
		case 2: return "chaotic evil";
		case 3:
		case 4: return "chaotic neutral";
		case 5:
		case 6:
		case 7: return "chaotic good";
		case 8:
		case 9: return "neutral evil";
		case 10:
		case 11: return "pure neutral";
		case 12:
		case 13: return "neutral good";
		case 14:
		case 15: return "lawful evil";
		case 16:
		case 17: return "lawful neutral";
		case 18:
		case 19:
		case 20: return "lawful good";
	}
}

export function carpetSize() {
	const n = randomWholeNumber(100);
	if (n <= 20) return "3 ft. x 5 ft.";
	if (n <= 55) return "4 ft. x 6 ft.";
	if (n <= 80) return "5 ft. x 7 ft.";
	if (n <= 100) return "6 ft. x 9 ft.";
}

export function randomFeatherToken() {
	const n = randomWholeNumber(100);
	if (n <= 20) return "anchor";
	if (n <= 35) return "bird";
	if (n <= 50) return "fan";
	if (n <= 65) return "swan boat";
	if (n <= 90) return "tree";
	if (n <= 100) return "whip";
}

function randomPatch() {
	const n = randomWholeNumber(100);
	if (n <= 8) return "Bag of 100 gp";
	if (n <= 15) return "Silver coffer";
	if (n <= 22) return "Iron door";
	if (n <= 30) return [gems100(),gems100(),gems100(),gems100(),gems100(),gems100(),gems100(),gems100(),gems100(),gems100()];
	if (n <= 44) return "Wooden ladder 24 ft.";
	if (n <= 51) return "A riding horse with saddle bags";
	if (n <= 59) return "Pit";
	if (n <= 68) return "4 potions of healing";
	if (n <= 75) return "Rowboat 12 ft.";
	if (n <= 83) {
		const f = randomWholeNumber(6);
		if (n <= 3) return `${randomItemFromArray(spells1)} spell scroll (1st level)`;
		if (n <= 5) return `${randomItemFromArray(spells2)} spell scroll (2nd level)`;
		if (n <= 6)return `${randomItemFromArray(spells3)} spell scroll (3rd level)`;
	} 
	if (n <= 90) return "2 mastiffs";
	if (n <= 96) return "Window (2 ft. x 4 ft. and up to 2 feet deep)";
	if (n <= 100) return "Portable ram";
}

export function randomPatches() {
	const n = numberCoins(4,4,1);
	const arr = [];
	for (let i = 1; i <= n; i++) {
		arr.push(randomPatch())
	}
	return arr
}

export function randomProtection() {
	const n = randomWholeNumber(100);
	if (n <= 10) return "aberrations";
	if (n <= 20) return "beats";
	if (n <= 30) return "celestials";
	if (n <= 40) return "elementals";
	if (n <= 50) return "fey";
	if (n <= 75) return "fiends";
	if (n <= 80) return "plants";
	if (n <= 100) return "undead";
}