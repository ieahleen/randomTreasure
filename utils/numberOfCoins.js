import {randomWholeNumber} from "./helpers.js";

export function numberCoins(n, d, m) {
	let c = 1;
	for (let i = 0; i < n; i++) {
		c += randomWholeNumber(d);
	}
	return c * m;
}