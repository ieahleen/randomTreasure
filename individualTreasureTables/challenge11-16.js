import { numberOfCoins, randomWholeNumber } from '../utils/helpers.js';

export function treasureC() {
  const t = randomWholeNumber(100);
  const treasure = {};
  if (t <= 20) {
    treasure.SP = numberOfCoins(4, 6, 100);
    treasure.GP = numberOfCoins(1, 6, 100);
  } else if (t <= 35) {
    treasure.EP = numberOfCoins(1, 6, 100);
    treasure.GP = numberOfCoins(1, 6, 100);
  } else if (t <= 75) {
    treasure.GP = numberOfCoins(2, 6, 100);
    treasure.PP = numberOfCoins(1, 6, 10);
  } else {
    treasure.GP = numberOfCoins(2, 6, 100);
    treasure.PP = numberOfCoins(2, 6, 10);
  }

  return treasure;
}
