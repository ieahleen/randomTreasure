import { diceThrow, randomItemFromTable } from '../utils/helpers.js';

const randomTreasure = [
  100,
  {
    30: () => ({ CP: diceThrow(4, 6, 100), EP: diceThrow(1, 6, 10) }),
    60: () => ({ SP: diceThrow(6, 6, 10), GP: diceThrow(2, 6, 10) }),
    70: () => ({ EP: diceThrow(3, 6, 10), GP: diceThrow(2, 6, 10) }),
    95: () => ({ GP: diceThrow(4, 6, 10) }),
    100: () => ({ GP: diceThrow(2, 6, 10), PP: diceThrow(3, 6) }),
  },
];

export const treasureB = randomItemFromTable(...randomTreasure);
