import { rwn } from "../utils/randomWholeNumber.js";
import { numberCoins } from "../utils/numberOfCoins.js";

export function treasureB() {
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