import { randomItemFromTable } from '../utils/helpers.js';
import { cantrips, spells1, spells2 } from '../lists/spells.js';

const magicItems = [
  100,
  {
    50: 'Potion of healing',
    60: () => `${cantrips()} spell scroll (cantrip)`,
    70: 'Potion of climbing',
    90: () => `${spells1()} spell scroll (1st level)`,
    94: () => `${spells2()} spell scroll (2nd level)`,
    98: 'Potion of greater healing',
    99: 'Bag of holding',
    100: 'Driftglobe',
  },
];

export const magicItemsA = randomItemFromTable(...magicItems);
