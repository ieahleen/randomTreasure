import {
  randomItemFromArraySimple,
  randomItemFromTable,
  randomPatches,
} from '../utils/helpers.js';
import { spells2, spells3 } from '../lists/spells.js';
import { armors, damageTypes } from '../lists/other.js';

const magicItems = [
  100,
  {
    15: 'Potion of greater healing',
    22: 'Potion of fire breath',
    29: () => `Potion of resistance, ${randomItemFromArraySimple(damageTypes)}`,
    34: () =>
      `Ammunition, +1 ${randomItemFromArraySimple(
        'arrow',
        'blowgun needle',
        'crossbow bolt',
        'sling bullet'
      )}`,
    39: 'Potion of animal friendship',
    44: 'Potion of hill giant strength',
    49: 'Potion of growth',
    54: 'Potion of water breathing',
    59: () => `${spells2()} spell scroll (2nd level)`,
    64: () => `${spells3()} spell scroll (3rd level)`,
    67: 'Bag of holding',
    70: "Keoghtom's ointment",
    73: 'Oil of slipperiness',
    75: 'Dust of disappearance',
    77: 'Dust of dryness',
    79: 'Dust of sneezing and chocking',
    81: () =>
      `Elemental ${randomItemFromArraySimple(
        'blue sapphire',
        'yellow diamond',
        'red corundum',
        'emerald'
      )}`,
    83: 'Philter of love',
    84: 'Alchemy jug',
    85: 'Cap of water breathing',
    86: 'Cloak of the manta ray',
    87: 'Driftglobe',
    88: 'Goggles of night',
    89: 'Helm of comprehending languages',
    90: 'Immovable rod',
    91: 'Lantern of revealing',
    92: `Mariner's armor, ${randomItemFromArraySimple(armors)}`,
    93: 'Mithral Armor',
    94: 'Potion of poison',
    95: 'Ring of swimming',
    96: () => ({
      'Robe of useful items':
        'Dagger x2, Bullseye lantern (filled and lit) x2, Steel mirror x2, 10-foot pole x2, Hempen rope (50ft, coiled) x2, Sack x2'
          .split(', ')
          .concat(randomPatches()),
    }),
    97: 'Rope of climbing',
    98: 'Saddle of the cavalier',
    99: 'Wand of magic detection',
    100: 'Wand of secrets',
  },
];

export const magicItemsB = randomItemFromTable(...magicItems);
