import { numberOfCoins, randomWholeNumber } from '../utils/helpers.js';

export function treasureD() {
  const c = randomWholeNumber(100);
  const treasure = {};
  if (c <= 15) {
    treasure.EP = numberOfCoins(2, 6, 1000);
    treasure.GP = numberOfCoins(8, 6, 100);
  } else if (c <= 55) {
    treasure.GP = numberOfCoins(1, 6, 1000);
    treasure.PP = numberOfCoins(1, 6, 100);
  } else if (c <= 100) {
    treasure.GP = numberOfCoins(1, 6, 1000);
    treasure.PP = numberOfCoins(2, 6, 100);
  }
  return treasure;
}
