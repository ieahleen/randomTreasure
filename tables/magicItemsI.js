import { swords } from '../lists/weapons.js';
import {
  randomItemFromArraySimple,
  randomItemFromTable,
} from '../utils/helpers.js';

const magicItems = {
  5: () => `Defender, ${randomItemFromArraySimple(swords)}`,
  10: 'Hummer of thunderbolts',
  15: () => `Luck blade, ${randomItemFromArraySimple(swords)}`,
  20: 'Sword of answering',
  23: () => `Holy avenger, ${randomItemFromArraySimple(swords)}`,
  26: 'Ring of djinni summoning',
  29: 'Ring of invisibility',
  32: 'Ring of spell turning',
  35: 'Rod of lordly might',
  38: 'Staff of the magi',
  41: () =>
    `Vorpal sword, ${randomItemFromArraySimple(
      'longsword',
      'scimitar',
      'greatsword'
    )}`,
  43: 'Belt of cloud giant strength',
  45: 'Armor, +2 breastplate',
  47: 'Armor, +3 chain mail',
  49: 'Armor, +3 chain shirt',
  51: 'Cloak of invisibility',
  53: () =>
    `Crystal ball of ${randomItemFromArraySimple(
      'Mind Reading',
      'Telepathy',
      'True Seeing'
    )}`,
  55: 'Armor, +1 half plate',
  57: 'Iron flask',
  59: 'Armor, +3 leather',
  61: 'Armor, +1 plate',
  63: 'Robe of the archmagi',
  65: 'Rod of resurrection',
  67: 'Armor, +1 scale mail',
  69: 'Scarab of protection',
  71: 'Armor, +2 splint',
  73: 'Armor, +2 studded leather',
  75: 'Well of many words',
  76: randomItemFromTable(12, {
    2: 'Armor, +2 half plate',
    4: 'Armor, +2 plate',
    6: 'Armor, +3 studded leather',
    8: 'Armor, +3 breastplate',
    10: 'Armor, +3 splint',
    11: 'Armor, +3 half plate',
    12: 'Armor, +3 plate',
  }),
  77: 'Apparatus of Kwalish',
  78: 'Armor of invulnerability',
  79: 'Belt of storm giant strength',
  80: 'Cubic gate',
  81: 'Deck of many things',
  82: 'Efreeti chain',
  83: () => `Armor of resistance, ${randomItemFromArraySimple(damageTypes)}`,
  84: 'Horn of Valhalla (iron)',
  85: 'Instrument of the bards (Ollamh harp',
  86: 'Ioun stone (greater absorption',
  87: 'Ioun stone (mastery)',
  88: 'Ioun stone (regeneration)',
  89: 'Plate armor of etheralness',
  90: () =>
    `Plate armor of resistance, ${randomItemFromArraySimple(damageTypes)}`,
  91: 'Ring of air elemental command',
  92: 'Ring of earth elemental command',
  93: 'Ring of fire elemental command',
  94: 'Ring of three wishes',
  95: 'Ring of water elemental command',
  96: 'Sphere of annihilation',
  97: 'Talisman of pure good',
  98: 'Talisman of the sphere',
  99: 'Talisman of the ultimante evil',
  100: 'Tome of the stilled tongue',
};

export const magicItemsI = randomItemFromTable(100, magicItems);
