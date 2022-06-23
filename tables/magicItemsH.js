import {
  carpetSize,
  randomItemFromArraySimple,
  randomAlignment,
  randomItemFromTable,
} from '../utils/helpers.js';
import { swords, weapons } from '../lists/weapons.js';
import { randomWholeNumber } from '../utils/helpers.js';
import { damageTypes } from '../lists/other.js';

const magicItems = {
  10: () => `Weapon, +3 ${randomItemFromArraySimple(weapons)}`,
  12: 'Amulet of the planes',
  14: () => `Carpet of flying, ${carpetSize()}`,
  16: 'Crystal ball',
  18: 'Ring of regeneration',
  20: 'Ring of shooting stars',
  22: 'Ring of telekinesis',
  24: 'Robe of scintillating colors',
  26: 'Robe of stars',
  28: 'Rod of absorption',
  30: 'Rod of alertness',
  32: 'Rod of security',
  34: 'Rod of the pact keeper, +3',
  36: 'Scimitar of speed',
  38: 'Shield, +1',
  40: 'Staff of fire',
  42: 'Staff of frost',
  44: 'Staff of power',
  46: 'Staff of striking',
  48: 'Staff of thunder and lightning',
  50: () =>
    `Sword of sharpness, ${randomItemFromArraySimple(
      'longsword',
      'scimitar',
      'greatsword'
    )}`,
  52: 'Wand of polymorph',
  54: 'Wand of the war mage, +3',
  55: 'Adamantine armor (half plafe)',
  56: 'Adamantine armor (plate)',
  57: 'Animated shield',
  58: 'Belt of fire giant strength',
  59: () =>
    `Belt of ${randomItemFromArraySimple('frost', 'stone')} giant strength`,
  60: 'Armor, +1 breastplate',
  61: () =>
    `Armor of resistance (breastplate), ${randomItemFromArraySimple(
      damageTypes
    )}`,
  62: () => `Candle of invocation, ${randomAlignment()}`,
  63: 'Armor, +2 chain mail',
  64: 'Armor, +2 chain shirt',
  65: 'Cloak of arachnida',
  66: () => `Dancing sword, ${randomItemFromArraySimple(swords)}`,
  67: 'Demon armor',
  68: 'Dragon scail mail',
  69: 'Dwarven plate',
  70: 'Dwarven thrower',
  71: 'Efreeti bottle',
  72: 'Figurine of wondrous power (obsidian steed)',
  73: () => `Frost brand, ${randomItemFromArraySimple(swords)}`,
  74: 'Helm of brilliance',
  75: 'Horn of Valhalla (bronze)',
  76: 'Instrument of the bards (Anstruth harp)',
  77: 'Ioun stone (absorption)',
  78: 'Ioun stone (agility)',
  79: 'Ioun stone (fortitude)',
  80: 'Ioun stone (insight)',
  81: 'Ioun stone (intellect)',
  82: 'Ioun stone (leadership)',
  83: 'Ioun stone (strength)',
  84: 'Armor, +2 leather',
  85: 'Manual of bodily health',
  86: 'Manual of gainful existence',
  87: randomItemFromTable(20, {
    5: 'Manual of Clay Golems',
    17: 'Manual of Flesh Golems',
    18: 'Manual of Iron Golems',
    20: 'Manual of Stone Golems',
  }),
  88: 'Manual of quickness of action',
  89: 'Mirror of life trapping',
  90: () => `Nine lives stealer, ${randomItemFromArraySimple(swords)}`,
  91: 'Oathbow',
  92: 'Armor, +2 scale mail',
  93: 'Spellguard shield',
  94: 'Armor +1, splint',
  95: () =>
    `Armor of resistance (splint), ${randomItemFromArraySimple(damageTypes)}`,
  96: () => 'Armor, +1 studded leather',
  97: () =>
    `Armor or resistance (studded leather), ${randomItemFromArraySimple(
      damageTypes
    )}`,
  98: 'Tome of clear thought',
  99: 'Tome of leadership and influence',
  100: 'Tome of understanding',
};

export const magicItemsH = randomItemFromTable(100, magicItems);
