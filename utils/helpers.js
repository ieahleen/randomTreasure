import { armors } from "../lists/other.js";
import { swords } from "../lists/weapons.js";
import {rwn} from "./randomWholeNumber.js";

export function ranArr(...arr) {
	if (Array.isArray(arr[0])) arr = arr[0];
	return arr[Math.floor(Math.random() * arr.length)];
}
  
export function objects(num, die, table) {
	let n = 0;
	for (let i = 0; i < num; i++) {
		n += rwn(die);
	}
	const arr = [];
	for (let j = 0; j < n; j++) {
		arr.push(table());
	}
  
	return arr;
}

export function randomAlignment() {
	const n = rwn(n);
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
	const n = rwn(100);
	if (n <= 20) return "3 ft. x 5 ft.";
	if (n <= 55) return "4 ft. x 6 ft.";
	if (n <= 80) return "5 ft. x 7 ft.";
	if (n <= 100) return "6 ft. x 9 ft.";
}

export function randomSword() {
	return ranArr(swords);
}

export function randomArmor() {
	return ranArr(armors);
}