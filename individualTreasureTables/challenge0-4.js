import { numberOfCoins, randomItemFromTable } from '../utils/helpers.js';
import { randomWholeNumber } from '../utils/helpers.js';

const randomTreasure = {
  30: () => ({
    CP: numberOfCoins(5, 6, 1),
  }),
  60: () => ({
    SP: numberOfCoins(4, 6, 1),
  }),
  70: () => ({
    EP: numberOfCoins(3, 6, 1),
  }),
  95: () => ({
    GP: numberOfCoins(3, 6, 1),
  }),
  100: () => ({
    PP: numberOfCoins(1, 6, 1),
  }),
};

export function treasureA() {
  return randomItemFromTable(randomTreasure)(randomWholeNumber(100), {});
}
