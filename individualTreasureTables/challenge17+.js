import { diceThrow, randomWholeNumber } from '../utils/helpers.js';

export function treasureD() {
  const c = randomWholeNumber(100);
  const treasure = {};
  if (c <= 15) {
    treasure.EP = diceThrow(2, 6, 1000);
    treasure.GP = diceThrow(8, 6, 100);
  } else if (c <= 55) {
    treasure.GP = diceThrow(1, 6, 1000);
    treasure.PP = diceThrow(1, 6, 100);
  } else if (c <= 100) {
    treasure.GP = diceThrow(1, 6, 1000);
    treasure.PP = diceThrow(2, 6, 100);
  }
  return treasure;
}
