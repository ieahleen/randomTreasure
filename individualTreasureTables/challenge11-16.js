import { diceThrow, randomItemFromTable } from '../utils/helpers.js';

const randomTreasure = [
  100,
  {
    20: () => ({
      SP: diceThrow(4, 6, 100),
      GP: diceThrow(1, 6, 100),
    }),
    35: () => ({
      EP: diceThrow(1, 6, 100),
      GP: diceThrow(1, 6, 100),
    }),
    75: () => ({
      GP: diceThrow(2, 6, 100),
      PP: diceThrow(1, 6, 10),
    }),
    100: () => ({
      GP: diceThrow(2, 6, 100),
      PP: diceThrow(2, 6, 10),
    }),
  },
];

export const treasureC = randomItemFromTable(...randomTreasure);
