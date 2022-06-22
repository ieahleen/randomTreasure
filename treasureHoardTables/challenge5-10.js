import {
  numberOfCoins,
  randomItemFromTableCompound,
  randomRangeSelection,
  randomWholeNumber,
} from '../utils/helpers.js';
import { listOfObjectsFromTable } from '../utils/helpers.js';
import { art25, art250 } from '../tables/artObjects.js';
import { gems50, gems100 } from '../tables/gems.js';
import { magicItemsA } from '../tables/magicItemsA.js';
import { magicItemsB } from '../tables/magicItemsB.js';
import { magicItemsC } from '../tables/magicItemsC.js';
import { magicItemsD } from '../tables/magicItemsD.js';
import { magicItemsF } from '../tables/magicItemsF.js';
import { magicItemsG } from '../tables/magicItemsG.js';
import { magicItemsH } from '../tables/magicItemsH.js';

const randomSellable = randomRangeSelection([
  [[1, 4]],
  () => ({}),
  [
    [5, 10],
    [29, 32],
    [45, 49],
    [64, 66],
    [75, 76],
    [81, 84],
  ],
  () => ({
    '25 gp art objects': listOfObjectsFromTable(2, 4, art25),
  }),
  [
    [11, 16],
    [33, 36],
    [50, 54],
    [67, 69],
    [77, 78],
    [85, 88],
  ],
  () => ({ '50 gp gems': listOfObjectsFromTable(3, 6, gems50) }),
  [
    [17, 22],
    [37, 40],
    [55, 59],
    [70, 72],
    [79, 79],
    [89, 91],
    [95, 96],
    [99, 99],
  ],
  () => ({
    '100 gp gems': listOfObjectsFromTable(3, 6, gems100),
  }),
  () => ({
    '250 gp art objects': listOfObjectsFromTable(2, 4, art250),
  }),
]);

const randomMagicItem = randomItemFromTableCompound({
  28: (v) => v,
  44: (v) => ({
    ...v,
    'Magic Items': listOfObjectsFromTable(1, 6, magicItemsA),
  }),
  63: (v) => ({
    ...v,
    'Magic Items': listOfObjectsFromTable(1, 4, magicItemsB),
  }),
  74: (v) => ({
    ...v,
    'Magic Items': listOfObjectsFromTable(1, 4, magicItemsC),
  }),
  80: (v) => ({
    ...v,
    'Magic Items': listOfObjectsFromTable(1, 1, magicItemsD),
  }),
  94: (v) => ({
    ...v,
    'Magic Items': listOfObjectsFromTable(1, 4, magicItemsF),
  }),
  98: (v) => ({
    ...v,
    'Magic Items': listOfObjectsFromTable(1, 4, magicItemsG),
  }),
  100: (v) => ({
    ...v,
    'Magic Items': listOfObjectsFromTable(1, 1, magicItemsH),
  }),
});

export function treasureF() {
  const die = randomWholeNumber(100);
  const treasure = randomSellable(die);
  return {
    CP: numberOfCoins(2, 6, 100),
    SP: numberOfCoins(2, 6, 1000),
    GP: numberOfCoins(6, 6, 100),
    PP: numberOfCoins(3, 6, 10),
    ...randomMagicItem(die, treasure),
  };
}
