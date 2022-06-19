import { randomWholeNumber } from "../utils/helpers.js";
import { numberCoins } from "../utils/numberOfCoins.js";
import {
  listOfObjectsFromTable,
  randomRangeSelection,
  randomItemFromTable,
} from "../utils/helpers.js";
import { gems1000, gems500 } from "../tables/gems.js";
import { art250, art750 } from "../tables/artObjects.js";
import { magicItemsA } from "../tables/magicItemsA.js";
import { magicItemsB } from "../tables/magicItemsB.js";
import { magicItemsC } from "../tables/magicItemsC.js";
import { magicItemsD } from "../tables/magicItemsD.js";
import { magicItemsE } from "../tables/magicItemsE.js";
import { magicItemsF } from "../tables/magicItemsF.js";
import { magicItemsG } from "../tables/magicItemsG.js";
import { magicItemsH } from "../tables/magicItemsH.js";
import { magicItemsI } from "../tables/magicItemsI.js";

const randomSellable = randomRangeSelection([
  [[1, 3]],
  () => ({}),
  [
    [10, 12],
    [24, 26],
    [41, 45],
    [59, 62],
    [71, 72],
    [79, 80],
    [89, 90],
    [97, 98],
  ],
  () => ({ "500 gp gems": listOfObjectsFromTable(3, 6, gems500) }),
  [
    [13, 15],
    [27, 29],
    [46, 50],
    [63, 66],
    [73, 74],
    [81, 82],
    [91, 92],
    [99, 100],
  ],
  () => ({ "1000 gp gems": listOfObjectsFromTable(3, 6, gems1000) }),
  [
    [4, 6],
    [16, 10],
    [30, 35],
    [51, 54],
    [67, 68],
    [75, 76],
    [83, 85],
    [93, 94],
  ],
  () => ({ "250 gp art objects": listOfObjectsFromTable(2, 4, art250) }),
  () => ({ "750 gp gems": listOfObjectsFromTable(2, 4, art750) }), // else / default case
]);

const randomMagicItem = randomItemFromTable({
  15: (v) => v,
  29: (v) => ({
    ...v,
    "Magic Items": listOfObjectsFromTable(1, 4, magicItemsA).concat(
      listOfObjectsFromTable(1, 6, magicItemsB)
    ),
  }),
  50: (v) => ({
    ...v,
    "Magic Items": listOfObjectsFromTable(1, 6, magicItemsC),
  }),
  66: (v) => ({
    ...v,
    "Magic Items": listOfObjectsFromTable(1, 4, magicItemsD),
  }),
  74: (v) => ({
    ...v,
    "Magic Items": listOfObjectsFromTable(1, 4, magicItemsE),
  }),
  82: (v) => ({
    ...v,
    "Magic Items": listOfObjectsFromTable(1, 1, magicItemsF).concat(
      listOfObjectsFromTable(1, 4, magicItemsG)
    ),
  }),
  92: (v) => ({
    ...v,
    "Magic Items": listOfObjectsFromTable(1, 4, magicItemsH),
  }),
  100: (v) => ({
    ...v,
    "Magic Items": listOfObjectsFromTable(1, 1, magicItemsI),
  }),
});

export function treasureG() {
  const die = randomWholeNumber(100);
  const treasure = randomSellable(die);
  return {
    GP: numberCoins(4, 6, 1000),
    PP: numberCoins(5, 6, 100),
    ...randomMagicItem(die, treasure),
  };
}
