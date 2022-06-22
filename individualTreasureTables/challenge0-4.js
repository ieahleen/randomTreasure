import { diceThrow, randomItemFromTable } from '../utils/helpers.js';

const randomTreasure = [
  100,
  {
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
  },
];

export const treasureA = randomItemFromTable(...randomTreasure);
