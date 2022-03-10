import { rwn } from "../utils/randomWholeNumber";
import { numberCoins } from "../utils/numberOfCoins";

export function treasureC() {
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