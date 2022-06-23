import { diceThrow, randomItemFromTable } from '../utils/helpers.js';

const randomTreasure = [
  100,
  {
    15: () => ({
      EP: diceThrow(2, 6, 1000),
      GP: diceThrow(8, 6, 100),
    }),
    55: () => ({
      GP: diceThrow(1, 6, 1000),
      PP: diceThrow(1, 6, 100),
    }),
    100: () => ({
      GP: diceThrow(1, 6, 1000),
      PP: diceThrow(2, 6, 100),
    }),
  },
];

export const treasureD = randomItemFromTable(...randomTreasure);
