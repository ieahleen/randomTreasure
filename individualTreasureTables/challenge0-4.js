import { diceThrow, randomItemFromTableCompound } from '../utils/helpers.js';
import { randomWholeNumber } from '../utils/helpers.js';

const randomTreasure = {
  30: () => ({
    CP: diceThrow(5, 6),
  }),
  60: () => ({
    SP: diceThrow(4, 6),
  }),
  70: () => ({
    EP: diceThrow(3, 6),
  }),
  95: () => ({
    GP: diceThrow(3, 6),
  }),
  100: () => ({
    PP: diceThrow(1, 6),
  }),
};

export function treasureA() {
  return randomItemFromTableCompound(randomTreasure)(
    randomWholeNumber(100),
    {}
  );
}
