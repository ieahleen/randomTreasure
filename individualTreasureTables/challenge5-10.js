import { numberOfCoins, randomWholeNumber } from '../utils/helpers.js';

export function treasureB() {
  const t = randomWholeNumber(100);
  const treasure = {};
  if (t <= 30) {
    treasure.CP = numberOfCoins(4, 6, 100);
    treasure.EP = numberOfCoins(1, 6, 10);
  } else if (t <= 60) {
    treasure.SP = numberOfCoins(6, 6, 10);
    treasure.GP = numberOfCoins(2, 6, 10);
  } else if (t <= 70) {
    treasure.EP = numberOfCoins(3, 6, 10);
    treasure.GP = numberOfCoins(2, 6, 10);
  } else if (t <= 95) {
    treasure.GP = numberOfCoins(4, 6, 10);
  } else {
    treasure.GP = numberOfCoins(2, 6, 10);
    treasure.PP = numberOfCoins(3, 6, 1);
  }

  return treasure;
}
