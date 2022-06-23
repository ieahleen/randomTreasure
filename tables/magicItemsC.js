import { randomItemFromTable, randomWholeNumber } from '../utils/helpers.js';
import { spells4, spells5 } from '../lists/spells.js';
import {
  randomItemFromArraySimple,
  randomFeatherToken,
  randomCreatureType,
} from '../utils/helpers.js';

const magicItems = {
  15: 'Potion of superior healing',
  22: `${spells4()} spell scroll (4th level)`,
  27: `Ammunition, +2 ${randomItemFromArraySimple(
    'arrow',
    'blowgun needle',
    'crossbow bolt',
    'sling bullet'
  )}`,
  32: 'Potion of clairvoyance',
  37: 'Potion of diminuition',
  42: 'Potion of gaseous form',
  47: 'Potion of frost giant strength',
  52: 'Potion of stone giant strength',
  57: 'Potion of heroism',
  62: 'Potion of invulnerability',
  67: 'Potion of mind reading',
  72: () => `${spells5()} spell scroll (5th level)`,
  75: 'Elixir of health',
  78: 'Oil of etherealness',
  81: 'Potion of fire giant strength',
  84: () => `Quaal's feather token, ${randomFeatherToken()}`,
  87: () => `Scroll of protection, ${randomCreatureType()}`,
  89: 'Bag of beans',
  91: 'Bead of force',
  92: 'Chime of opening',
  93: 'Decanter of endless water',
  94: 'Eyes of minute seeing',
  95: 'Folding boat',
  96: "Heward's handy haversack",
  97: 'Horseshoes of speed',
  98: 'Necklace of fireballs',
  99: 'Periapt of health',
  100: 'Sending stones',
};

export const magicItemsC = randomItemFromTable(100, magicItems);
