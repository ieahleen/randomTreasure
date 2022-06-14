import { numberCoins } from "../utils/numberOfCoins.js";
import { randomWholeNumber } from "../utils/helpers.js"

export function treasureD() {
	const c = randomWholeNumber(100);
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