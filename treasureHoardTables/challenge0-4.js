import {
  listOfObjectsFromTable,
  numberOfCoins,
  randomItemFromTable,
  randomRangeSelection,
} from '../utils/helpers.js';
import { gems10, gems50 } from '../tables/gems.js';
import { art25 } from '../tables/artObjects.js';
import { magicItemsA } from '../tables/magicItemsA.js';
import { magicItemsB } from '../tables/magicItemsB.js';
import { magicItemsC } from '../tables/magicItemsC.js';
import { magicItemsF } from '../tables/magicItemsF.js';
import { magicItemsG } from '../tables/magicItemsG.js';
import { randomWholeNumber } from '../utils/helpers.js';

const randomSellable = randomRangeSelection([
  [[1, 6]],
  () => ({}),
  [
    [7, 16],
    [37, 44],
    [61, 65],
    [76, 78],
  ],
  () => ({ '10 gp gems': listOfObjectsFromTable(2, 6, gems10) }),
  [
    [17, 26],
    [45, 52],
    [66, 70],
    [79, 89],
    [86, 92],
    [98, 99],
  ],
  () => ({ '25 gp art objects': listOfObjectsFromTable(2, 4, art25) }),
  () => ({ '50 gp gems': listOfObjectsFromTable(2, 6, gems50) }),
]);

const randomMagicItem = randomItemFromTable({
  36: (v) => v,
  60: (v) => ({
    ...v,
    'Magic Items': listOfObjectsFromTable(1, 4, magicItemsA),
  }),
  75: (v) => ({
    ...v,
    'Magic Items': listOfObjectsFromTable(1, 4, magicItemsB),
  }),
  85: (v) => ({
    ...v,
    'Magic Items': listOfObjectsFromTable(1, 4, magicItemsC),
  }),
  97: (v) => ({
    ...v,
    'Magic Items': listOfObjectsFromTable(1, 4, magicItemsF),
  }),
  100: (v) => ({
    ...v,
    'Magic Items': listOfObjectsFromTable(1, 4, magicItemsG),
  }),
});

export function treasureE() {
  const die = randomWholeNumber(100);
  const treasure = randomSellable(die);
  return {
    CP: numberOfCoins(6, 6, 100),
    SP: numberOfCoins(3, 6, 100),
    GP: numberOfCoins(2, 6, 100),
    ...randomMagicItem(die, treasure),
  };
}
