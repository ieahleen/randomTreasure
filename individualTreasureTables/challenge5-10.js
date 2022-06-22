import { diceThrow, randomWholeNumber } from '../utils/helpers.js';

export function treasureB() {
  const t = randomWholeNumber(100);
  const treasure = {};
  if (t <= 30) {
    treasure.CP = diceThrow(4, 6, 100);
    treasure.EP = diceThrow(1, 6, 10);
  } else if (t <= 60) {
    treasure.SP = diceThrow(6, 6, 10);
    treasure.GP = diceThrow(2, 6, 10);
  } else if (t <= 70) {
    treasure.EP = diceThrow(3, 6, 10);
    treasure.GP = diceThrow(2, 6, 10);
  } else if (t <= 95) {
    treasure.GP = diceThrow(4, 6, 10);
  } else {
    treasure.GP = diceThrow(2, 6, 10);
    treasure.PP = diceThrow(3, 6);
  }

  return treasure;
}
