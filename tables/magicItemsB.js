import { randomWholeNumber } from '../utils/helpers.js';
import { randomItemFromArray, randomPatches } from '../utils/helpers.js';
import { spells2, spells3 } from '../lists/spells.js';
import { armors, damageTypes } from '../lists/other.js';

export function magicItemsB() {
  const n = randomWholeNumber(100);
  if (n <= 15) return 'Potion of greater healing';
  if (n <= 22) return 'Potion of fire breath';
  if (n <= 29)
    return `Potion of resistance, ${randomItemFromArray(damageTypes)}`;
  if (n <= 34)
    return `Ammunition, +1 ${randomItemFromArray(
      'arrow',
      'blowgun needle',
      'crossbow bolt',
      'sling bullet'
    )}`;
  if (n <= 39) return 'Potion of animal friendship';
  if (n <= 44) return 'Potion of hill giant strength';
  if (n <= 49) return 'Potion of growth';
  if (n <= 54) return 'Potion of water breathing';
  if (n <= 59) return `${spells2()} spell scroll (2nd level)`;
  if (n <= 64) return `${spells3()} spell scroll (3rd level)`;
  if (n <= 67) return 'Bag of Holding';
  if (n <= 70) return "Keoghtom's ointment";
  switch (n) {
    case 71:
    case 72:
    case 73:
      return 'Oil of slipperiness';
    case 74:
    case 75:
      return 'Dust of disappearance';
    case 76:
    case 77:
      return 'Dust of dryness';
    case 78:
    case 79:
      return 'Dust of sneezing and chocking';
    case 80:
    case 81:
      return `Elemental ${randomItemFromArray(
        'blue sapphire',
        'yellow diamond',
        'red corundum',
        'emerald'
      )}`;
    case 82:
    case 83:
      return 'Philter of love';
    case 84:
      return 'Alchemy jug';
    case 85:
      return 'Cap of water breathing';
    case 86:
      return 'Cloak of the manta ray';
    case 87:
      return 'Driftglobe';
    case 88:
      return 'Goggles of night';
    case 89:
      return 'Helm of comprehending languages';
    case 90:
      return 'Immovable rod';
    case 91:
      return 'Lantern of revealing';
    case 92:
      return `Mariner's armor, ${randomItemFromArray(armors)}`;
    case 93:
      return 'Mithral Armor';
    case 94:
      return 'Potion of poison';
    case 95:
      return 'Ring of swimming';
    case 96:
      return {
        name: 'Robe of useful items',
        standardPatches:
          'Dagger x2, Bullseye lantern (filled and lit) x2, Steel mirror x2, 10-foot pole x2, Hempen rope (50ft, coiled) x2, Sack x2',
        extraPatches: randomPatches(),
      };
    case 97:
      return 'Rope of climbing';
    case 98:
      return 'Saddle of the cavalier';
    case 99:
      return 'Wand of magic detection';
    case 100:
      return 'Wand of secrets';
  }
}
