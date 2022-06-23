import { randomItemFromTable } from '../utils/helpers.js';
import { spells8, spells9 } from '../lists/spells.js';

const magicItems = {
  30: () => `${spells8()} spell scroll (8th level)`,
  55: 'Potion of storm giant strength',
  70: 'Potion of supreme healing',
  85: () => `${spells9()} spell scroll (9th level)`,
  93: 'Universal solvent',
  98: 'Arrow of slaying',
  100: 'Sovereign glue',
};

export const magicItemsE = randomItemFromTable(100, magicItems);
