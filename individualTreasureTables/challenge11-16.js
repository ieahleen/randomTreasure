import { diceThrow, randomWholeNumber } from '../utils/helpers.js';

export function treasureC() {
  const t = randomWholeNumber(100);
  const treasure = {};
  if (t <= 20) {
    treasure.SP = diceThrow(4, 6, 100);
    treasure.GP = diceThrow(1, 6, 100);
  } else if (t <= 35) {
    treasure.EP = diceThrow(1, 6, 100);
    treasure.GP = diceThrow(1, 6, 100);
  } else if (t <= 75) {
    treasure.GP = diceThrow(2, 6, 100);
    treasure.PP = diceThrow(1, 6, 10);
  } else {
    treasure.GP = diceThrow(2, 6, 100);
    treasure.PP = diceThrow(2, 6, 10);
  }

  return treasure;
}
