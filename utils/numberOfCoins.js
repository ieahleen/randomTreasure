import {rwn} from "./randomWholeNumber.js";

function numberCoins(n, d, m) {
	let c = 1;
	for (let i = 0; i < n; i++) {
		c += rwn(d);
	}
	return c * m;
}

export { numberCoins };