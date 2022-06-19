import {
  carpetSize,
  randomItemFromArray,
  randomAlignment,
} from '../utils/helpers.js';
import { swords, weapons } from '../lists/weapons.js';
import { randomWholeNumber } from '../utils/helpers.js';
import { damageTypes } from '../lists/other.js';

function magicItemsH() {
  const n = randomWholeNumber(100);
  switch (n) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      return `Weapon, +3 ${randomItemFromArray(weapons)}`;
    case 11:
    case 12:
      return 'Amulet of the planes';
    case 13:
    case 14:
      return `Carpet of flying, ${carpetSize()}`;
    case 15:
    case 16:
      return 'Crystal ball';
    case 17:
    case 18:
      return 'Ring of regeneration';
    case 19:
    case 20:
      return 'Ring of shooting stars';
    case 21:
    case 22:
      return 'Ring of telekinesis';
    case 23:
    case 24:
      return 'Robe of scintillating colors';
    case 25:
    case 26:
      return 'Robe of stars';
    case 27:
    case 28:
      return 'Rod of absorption';
    case 29:
    case 30:
      return 'Rod of alertness';
    case 31:
    case 32:
      return 'Rod of security';
    case 33:
    case 34:
      return 'Rod of the pact keeper, +3';
    case 35:
    case 36:
      return 'Scimitar of speed';
    case 37:
    case 38:
      return 'Shield, +1';
    case 39:
    case 40:
      return 'Staff of fire';
    case 41:
    case 42:
      return 'Staff of frost';
    case 43:
    case 44:
      return 'Staff of power';
    case 45:
    case 46:
      return 'Staff of striking';
    case 47:
    case 48:
      return 'Staff of thunder and lightning';
    case 49:
    case 50:
      return `Sword of sharpness, ${randomItemFromArray(
        'longsword',
        'scimitar',
        'greatsword'
      )}`;
    case 51:
    case 52:
      return 'Wand of polymorph';
    case 53:
    case 54:
      return 'Wand of the war mage, +3';
    case 55:
      return 'Adamantine armor (half plafe)';
    case 56:
      return 'Adamantine armor (plate)';
    case 57:
      return 'Animated shield';
    case 58:
      return 'Belt of fire giant strength';
    case 59:
      return `Belt of ${randomItemFromArray('frost', 'stone')} giant strength`;
    case 60:
      return 'Armor, +1 breastplate';
    case 61:
      return `Armor of resistance (breastplate), ${randomItemFromArray(
        damageTypes
      )}`;
    case 62:
      return `Candle of invocation, ${randomAlignment()}`;
    case 63:
      return 'Armor, +2 chain mail';
    case 64:
      return 'Armor, +2 chain shirt';
    case 65:
      return 'Cloak of arachnida';
    case 66:
      return `Dancing sword, ${randomItemFromArray(swords)}`;
    case 67:
      return 'Demon armor';
    case 68:
      return 'Dragon scail mail';
    case 69:
      return 'Dwarven plate';
    case 70:
      return 'Dwarven thrower';
    case 71:
      return 'Efreeti bottle';
    case 72:
      return 'Figurine of wondrous power (obsidian steed)';
    case 73:
      return `Frost brand, ${randomItemFromArray(swords)}`;
    case 74:
      return 'Helm of brilliance';
    case 75:
      return 'Horn of Valhalla (bronze)';
    case 76:
      return 'Instrument of the bards (Anstruth harp)';
    case 77:
      return 'Ioun stone (absorption)';
    case 78:
      return 'Ioun stone (agility)';
    case 79:
      return 'Ioun stone (fortitude)';
    case 80:
      return 'Ioun stone (insight)';
    case 81:
      return 'Ioun stone (intellect)';
    case 82:
      return 'Ioun stone (leadership)';
    case 83:
      return 'Ioun stone (strength)';
    case 84:
      return 'Armor, +2 leather';
    case 85:
      return 'Manual of bodily health';
    case 86:
      return 'Manual of gainful existence';
    case 87:
      const title = 'Manual of golems, ';
      const f = randomWholeNumber(20);
      if (f <= 5) return title + 'Clay';
      if (f <= 17) return title + 'Flesh';
      if (f <= 18) return title + 'Iron';
      if (f <= 20) return title + 'Stone';
      break;
    case 88:
      return 'Manual of quickness of action';
    case 89:
      return 'Mirror of life trapping';
    case 90:
      return `Nine lives stealer, ${randomItemFromArray(swords)}`;
    case 91:
      return 'Oathbow';
    case 92:
      return 'Armor, +2 scale mail';
    case 93:
      return 'Spellguard shield';
    case 94:
      return 'Armor +1, splint';
    case 95:
      return `Armor of resistance (splint), ${randomItemFromArray(
        damageTypes
      )}`;
    case 96:
      return 'Armor, +1 studded leather';
    case 97:
      return `Armor or resistance (studded leather), ${randomItemFromArray(
        damageTypes
      )}`;
    case 98:
      return 'Tome of clear thought';
    case 99:
      return 'Tome of leadership and influence';
    case 100:
      return 'Tome of understanding';
  }
}

export { magicItemsH };
