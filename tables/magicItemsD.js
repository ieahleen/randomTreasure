import {
  randomItemFromArraySimple,
  randomItemFromTable,
} from '../utils/helpers.js';
import { spells6, spells7, spells8 } from '../lists/spells.js';
const magicItems = {
  20: 'Potion of supreme healing',
  30: 'Potion of invisibility',
  40: 'Potion of speed',
  50: () => `${spells6()} spell scroll (6th level)`,
  57: () => `${spells7()} spell scroll (7th level)`,
  62: () =>
    `Ammunition, +3 ${randomItemFromArraySimple(
      'arrow',
      'blowgun needle',
      'crossbow bolt',
      'sling bullet'
    )}`,
  67: 'Oil of sharpness',
  72: 'Potion of flying',
  77: 'Potion of cloud giant strength',
  82: 'Potion of longevity',
  87: 'Potion of vitality',
  92: () => `${spells8()} spell scroll (8th level)`,
  95: 'Horseshoes of a zephyr',
  98: "Nolzur's marvelous pigments",
  99: 'Bag of devouring',
  100: 'Portable Hole',
};

export const magicItemsD = randomItemFromTable(100, magicItems);
