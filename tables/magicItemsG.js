import { randomItemFromArray } from "../utils/helpers.js";
import { swords, weapons } from "../lists/weapons.js";
import { randomWholeNumber } from "../utils/helpers.js";
import { damageTypes } from "../lists/other.js";

export function magicItemsG() {
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
	case 11:
		return `Weapon, +2 ${randomItemFromArray(weapons)}`;
	case 12:
	case 13:
	case 14:
		const str = "Figurine of wondrous power, ";
		const c = randomWholeNumber(8);
		switch (c) {
		case 1:
			return str + "Bronze griffon";
		case 2:
			return str + "Ebony fly";
		case 3:
			return str + "Golden lions";
		case 4:
			return str + "Ivory goats";
		case 5:
			return str + "Marble elephant";
		case 6:
		case 7:
			return str + "Onyx dog";
		case 8:
			return str + "Serpentine owl";
		}
		break;
	case 15:
		return "Adamantine armor (breastplate)";
	case 16:
		return "Adamantine armor (splint)";
	case 17:
		return "Amulet of health";
	case 18:
		return "Armor of vulnerability";
	case 19:
		return "Arrow-catching shield";
	case 20:
		return "Belt of dwarvenkind";
	case 21:
		return "Belt of hill giant strength";
	case 22:
		return "Berserker axe";
	case 23:
		return "Boots of levitation";
	case 24:
		return "Boots of speed";
	case 25:
		return "Bowl of commanding water elementals";
	case 26:
		return "Bracers of defense";
	case 27:
		return "Brazier of commanding fire elementals";
	case 28:
		return "Cape of the mounteback";
	case 29:
		return "Censer of controlling air elementals";
	case 30:
		return "Armor, +1 chain mail";
	case 31:
		return "Armor of resistance (chain mail), " + randomItemFromArray(damageTypes);
	case 32:
		return "Armor, +1 (chain shirt)";
	case 33:
		return "Armor of resistance (chain shirt), " + randomItemFromArray(damageTypes);
	case 34:
		return "Cloak of displacement";
	case 35:
		return "Cloak of the bat";
	case 36:
		return "Cube of force";
	case 37:
		return "Daern's instant fortress";
	case 38:
		return "Dagger of venom";
	case 39:
		return "Dimensional shackles";
	case 40:
		return "Dragon slayer, " + randomItemFromArray(swords);
	case 41:
		return "Elven chain";
	case 42:
		return "Flame tongue, " + randomItemFromArray(swords);
	case 43:
		return "Gem of seeing";
	case 44:
		return "Giant slayer, " + randomItemFromArray(...swords, battleaxe, handaxe);
	case 45:
		return "Glamoured studded leather";
	case 46:
		return "Helm of teleportation";
	case 47:
		return "Horn of blasting";
	case 48:
		const s = randomWholeNumber(75);
		if (s <= 40) return "Horn of Valhalla (silver)";
		if (s <= 75) return "Horn of Valhalla (brass)";
		break;
	case 49:
		return "Instrument of the bards (Canaith mandolin)";
	case 50:
		return "Instrument of the bards (Cli lyre)";
	case 51:
		return "Ioun stone (awareness)";
	case 52:
		return "Ioun stone (protection)";
	case 53:
		return "Ioun stone (reserve)";
	case 54:
		return "Ioun stone (sustenance)";
	case 55:
		return "Iron bands of Bilarro";
	case 56:
		return "Armor, +1 leather";
	case 57:
		return "Armor of resistance (leather), " + randomItemFromArray(damageTypes);
	case 58:
		return "Mace of disruption";
	case 59:
		return "Mace of smiting";
	case 60:
		return "Mace of terror";
	case 61:
		return "Mantle of spell resistance";
	case 62:
		return "Necklace of prayer beads";
	case 63:
		return "Periapt of proof against poison";
	case 64:
		return "Ring of animal influence";
	case 65:
		return "Ring of evasion";
	case 66:
		return "Ring of feather failing";
	case 67:
		return "Ring of free action";
	case 68:
		return "Ring of protection";
	case 69:
		return "Ring of resistance, " + randomItemFromArray(damageTypes);
	case 70:
		return "Ring of spell storing";
	case 71:
		return "Ring of the ram";
	case 72:
		return "Ring of X-ray vision";
	case 73:
		return "Robe of eyes";
	case 74:
		return "Rod of rulership";
	case 75:
		return "Rod of the pact keeper";
	case 76:
		return "Rope of entanglement";
	case 77:
		return "Armor, +1 scale mail";
	case 78:
		return `Armor of resistance (scale mail), ${randomItemFromArray(
			"Acid",
			"Cold",
			"Fire",
			"Force",
			"Lightning",
			"Necrotic",
			"Poison",
			"Psychic",
			"Radiant",
			"Thunder"
		)}`;
	case 79:
		return "Shield, +1";
	case 80:
		return "Shield of missile attraction";
	case 81:
		return "Staff of charming";
	case 82:
		return "Staff of healing";
	case 83:
		return "Staff of swarming insects";
	case 84:
		return "Staff of the woodlands";
	case 85:
		return "Staff of withering";
	case 86:
		return "Stone of controlling earth elementals";
	case 87:
		return "Sun blade";
	case 88:
		return "Sword of life stealing, " + randomItemFromArray(swords);
	case 89:
		return "Sword of wounding, " + randomItemFromArray(swords);
	case 90:
		return "Tentacle rod";
	case 91:
		return "Vicious weapon, " + randomItemFromArray(weapons);
	case 92:
		return "Wand of binding";
	case 93:
		return "Wand of enemy detection";
	case 94:
		return "Wand of fear";
	case 95:
		return "Wand of fireballs";
	case 96:
		return "Wand of lightning bolt";
	case 97:
		return "Wand of paralysis";
	case 98:
		return "Wand of the war mage, +2";
	case 99:
		return "Wand of wonder";
	case 100:
		return "Wings of flying";
	}
}