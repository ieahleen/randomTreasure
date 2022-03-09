import { numberCoins } from "../utils/numberOfCoins";
import { rwn } from "../utils/randomWholeNumber";

export function treasureA() {
	const t = rwn(100);
	const treasure = {};
	if (t <= 30) {
		treasure.CP = numberCoins(5, 6, 1);
	} else if (t <= 60) {
		treasure.SP = numberCoins(4, 6, 1);
	} else if (t <= 70) {
		treasure.EP = numberCoins(3, 6, 1);
	} else if (t <= 95) {
		treasure.GP = numberCoins(3, 6, 1);
	} else {
		treasure.PP = numberCoins(1, 6, 1);
	}
  
	return treasure;
}