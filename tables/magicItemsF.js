import { swords, weapons } from '../lists/weapons.js';
import { randomItemFromArray } from '../utils/helpers.js';
import { randomWholeNumber } from '../utils/helpers.js';

export function magicItemsF() {
  const n = randomWholeNumber(100);

  if (n <= 15) return `Weapon, +1 ${randomItemFromArray(weapons)}`;
  switch (n) {
    case 16:
    case 17:
    case 18:
      return 'Shield, +1';
    case 19:
    case 20:
    case 21:
      return 'Sentinel shield';
    case 22:
    case 23:
      return 'Amulet of proof against detection and location';
    case 24:
    case 25:
      return 'Boots of elvenkind';
    case 26:
    case 27:
      return 'Boots of striding and springing';
    case 28:
    case 29:
      return 'Bracers of archery';
    case 30:
    case 31:
      return 'Brooch of shielding';
    case 32:
    case 33:
      return 'Broom of flying';
    case 34:
    case 35:
      return 'Cloak of elvenkind';
    case 36:
    case 37:
      return 'Cloak of protection';
    case 38:
    case 39:
      return 'Gauntlets of ogre power';
    case 40:
    case 41:
      return 'Hat of disguise';
    case 42:
    case 43:
      return 'Javelin of lighting';
    case 44:
    case 45:
      return 'Pearl of power';
    case 46:
    case 47:
      return 'Rod of the pact keeper, +1';
    case 48:
    case 49:
      return 'Slippers of spider climbing';
    case 50:
    case 51:
      return 'Staff of the adder';
    case 52:
    case 53:
      return 'Staff of the python';
    case 54:
    case 55:
      return `Sword of vengeance, ${randomItemFromArray(swords)}`;
    case 56:
    case 57:
      return 'Trident of fish command';
    case 58:
    case 59:
      return 'Wand of magic missiles';
    case 60:
    case 61:
      return 'Wand of the war mage, +1';
    case 62:
    case 63:
      return 'Wand of web';
    case 64:
    case 65:
      return `Weapon of warning, ${randomItemFromArray(weapons)}`;
    case 66:
      return 'Adamantine armor (chain mail)';
    case 67:
      return 'Adamantine armor (chain shirt)';
    case 68:
      return 'Adamantine armor (scale mail)';
    case 69:
      return 'Bag of tricks (gray)';
    case 70:
      return 'Bag of tricks (rust)';
    case 71:
      return 'Bag of tricks (tan)';
    case 72:
      return 'Boots of the winterlands';
    case 73:
      return 'Circlet of blasting';
    case 74:
      return 'Deck of illusions';
    case 75:
      return 'Eversmoking bottle';
    case 76:
      return 'Eyes of charming';
    case 77:
      return 'Eyes of the eagle';
    case 78:
      return 'Figurine of wondrous power (silver raven)';
    case 79:
      return 'Gem of brightness';
    case 80:
      return 'Gloves of missile snaring';
    case 81:
      return 'Gloves of swimming and climbing';
    case 82:
      return 'Gloves of thievery';
    case 83:
      return 'Headband of intellect';
    case 84:
      return 'Helm of thelepaty';
    case 85:
      return 'Instrument of the bards (Doss lute)';
    case 86:
      return 'Instrument of the bards (Fochlucan bandlore)';
    case 87:
      return 'Instrument of the bards (Mac-Fuimidh cittern)';
    case 88:
      return 'Medallion of thoughts';
    case 89:
      return 'Necklace of adaptation';
    case 90:
      return 'Periapt of wound closure';
    case 91:
      return 'Pipes of haunting';
    case 92:
      return 'Pipes of the sewers';
    case 93:
      return 'Ring of jumping';
    case 94:
      return 'Ring of mind shielding';
    case 95:
      return 'Ring of warmth';
    case 96:
      return 'Ring of water walking';
    case 97:
      return 'Quiver of Ehlonna';
    case 98:
      return 'Stone of good luck';
    case 99:
      return 'Wind fan';
    case 100:
      return 'Winged boots';
  }
}
