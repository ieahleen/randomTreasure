import { randomWholeNumber } from '../utils/helpers.js';
import { spells4, spells5 } from '../lists/spells.js';
import {
  randomItemFromArray,
  randomFeatherToken,
  randomCreatureType,
} from '../utils/helpers.js';

export function magicItemsC() {
  const n = randomWholeNumber(100);
  if (n <= 15) return 'Potion of superior healing';
  if (n <= 22) return `${spells4()} spell scroll (4th level)`;
  if (n <= 27)
    return `Ammunition, +2 ${randomItemFromArray(
      'arrow',
      'blowgun needle',
      'crossbow bolt',
      'sling bullet'
    )}`;
  if (n <= 32) return 'Potion of clairvoyance';
  if (n <= 37) return 'Potion of diminuition';
  if (n <= 42) return 'Potion of gaseous form';
  if (n <= 47) return 'Potion of frost giant strength';
  if (n <= 52) return 'Potion of stone giant strength';
  if (n <= 57) return 'Potion of heroism';
  if (n <= 62) return 'Potion of invulnerability';
  if (n <= 67) return 'Potion of mind reading';
  if (n <= 72) return `${spells5()} spell scroll (5th level)`;
  switch (n) {
    case 73:
    case 74:
    case 75:
      return 'Elixir of health';
    case 76:
    case 77:
    case 78:
      return 'Oil of etherealness';
    case 79:
    case 80:
    case 81:
      return 'Potion of fire giant strength';
    case 82:
    case 83:
    case 84:
      return `Quaal's feather token, ${randomFeatherToken()}`;
    case 85:
    case 86:
    case 87:
      return `Scroll of protection, ${randomCreatureType()}`;
    case 88:
    case 89:
      return 'Bag of beans';
    case 90:
    case 91:
      return 'Bead of force';
    case 92:
      return 'Chime of opening';
    case 93:
      return 'Decanter of endless water';
    case 94:
      return 'Eyes of minute seeing';
    case 95:
      return 'Folding boat';
    case 96:
      return "Heward's handy haversack";
    case 97:
      return 'Horseshoes of speed';
    case 98:
      return 'Necklace of fireballs';
    case 99:
      return 'Periapt of health';
    case 100:
      return 'Sending stones';
  }
}
