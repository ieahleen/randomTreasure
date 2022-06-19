import { numberCoins } from '../utils/numberOfCoins.js';
import { randomItemFromTable } from '../utils/helpers.js';
import { randomWholeNumber } from '../utils/helpers.js';

const randomTreasure = {
  30: () => ({
    CP: numberCoins(5, 6, 1),
  }),
  60: () => ({
    SP: numberCoins(4, 6, 1),
  }),
  70: () => ({
    EP: numberCoins(3, 6, 1),
  }),
  95: () => ({
    GP: numberCoins(3, 6, 1),
  }),
  100: () => ({
    PP: numberCoins(1, 6, 1),
  }),
};

export function treasureA() {
  console.log('treasureA is called');
  return randomItemFromTable(randomTreasure)(randomWholeNumber(100), {});
}
