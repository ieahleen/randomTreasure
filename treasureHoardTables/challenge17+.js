import { art2500, art7500 } from '../tables/artObjects.js';
import { gems1000, gems5000 } from '../tables/gems.js';
import { magicItemsC } from '../tables/magicItemsC.js';
import { magicItemsD } from '../tables/magicItemsD.js';
import { magicItemsE } from '../tables/magicItemsE.js';
import { magicItemsG } from '../tables/magicItemsG.js';
import { magicItemsH } from '../tables/magicItemsH.js';
import { magicItemsI } from '../tables/magicItemsI.js';
import {
  listOfObjectsFromTable,
  numberOfCoins,
  randomItemFromTableCompound,
  randomRangeSelection,
  randomWholeNumber,
} from '../utils/helpers.js';

const randomSellable = randomRangeSelection([
  [[1, 2]],
  () => ({}),
  [
    [3, 5],
    [15, 22],
    [47, 52],
    [69, 69],
    [73, 74],
    [81, 85],
  ],
  () => ({ '1,000 gp items': listOfObjectsFromTable(3, 6, gems1000) }),
  [
    [6, 8],
    [23, 20],
    [53, 58],
    [70, 70],
    [75, 76],
    [86, 90],
  ],
  () => ({ '2,500 gp art objects': listOfObjectsFromTable(1, 10, art2500) }),
  [
    [9, 11],
    [31, 38],
    [59, 63],
    [77, 78],
    [24, 26],
    [91, 95],
  ],
  () => ({ '7,500 gp art objects': listOfObjectsFromTable(1, 4, art7500) }),
  () => ({ '5,000 gp gems': listOfObjectsFromTable(1, 8, gems5000) }),
]);

const randomMagicItem = randomItemFromTableCompound({
  2: (v) => v,
  14: (v) => ({
    ...v,
    'Magic Items': listOfObjectsFromTable(1, 8, magicItemsC),
  }),
  46: (v) => ({
    ...v,
    'Magic Items': listOfObjectsFromTable(1, 6, magicItemsD),
  }),
  68: (v) => ({
    ...v,
    'Magic Items': listOfObjectsFromTable(1, 6, magicItemsE),
  }),
  72: (v) => ({
    ...v,
    'Magic Items': listOfObjectsFromTable(1, 4, magicItemsG),
  }),
  80: (v) => ({
    ...v,
    'Magic Items': listOfObjectsFromTable(1, 4, magicItemsH),
  }),
  100: (v) => ({
    ...v,
    'Magic Items': listOfObjectsFromTable(1, 4, magicItemsI),
  }),
});

export function treasureH() {
  const die = randomWholeNumber(100);
  const treasure = randomSellable(die);

  return {
    GP: numberOfCoins(12, 6, 1000),
    PP: numberOfCoins(8, 6, 1000),
    ...randomMagicItem(die, treasure),
  };
}
