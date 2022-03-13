import { ranArr, randomSword } from "../utils/helpers.js";
import { rwn } from "../utils/randomWholeNumber.js";

export function magicItemsI() {
    const n = rwn(100);
    switch(n) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5: return "Defender, " + randomSword();
        case 6:
        case 7:
        case 8:
        case 9:
        case 10: return "Hummer of thunderbolts";
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: return "Luck blade, " + randomSword();
        case 16:
        case 17:
        case 18:
        case 19:
        case 20: return "Sword of answering";
        case 21:
        case 22:
        case 23: return "Holy avenger, " + randomSword();
        case 24:
        case 25:
        case 26: return "Ring of djinni summoning";
        case 27:
        case 28:
        case 29: return "Ring of invisibility";
        case 30:
        case 31:
        case 32: return "Ring of spell turning";
        case 33:
        case 34:
        case 35: return "Rod of lordly might";
        case 36:
        case 37:
        case 38: return "Staff of the magi";
        case 39:
        case 40:
        case 41: return "Vorpal sword, " + ranArr("longsword", "scimitar", "greatsword");
        case 42:
        case 43: return "Belt of cloud giant strength";
        case 44:
        case 45: return "Armor, +2 breastplate";
        case 46:
        case 47: return "Armor, +3 chain mail";
        case 48:
        case 49: return "Armor, +3 chain shirt";
        case 50:
        case 51: return "Cloak of invisibility";
        case 52:
        case 53: return "Crystal ball of " + ranArr("Mind Reading", "Telepathy", "True Seeing");
        case 54:
        case 55: return "Armor, +1 half plate";
        case 56:
        case 57: return "Iron flask";
        case 58:
        case 59: return "Armor, +3 leather";
        case 60:
        case 61: return "Armor, +1 plate";
        case 62:
        case 63: return "Robe of the archmagi";
        case 64:
        case 65: return "Rod of resurrection";
        case 66:
        case 67: return "Armor, +1 scale mail";
        case 68:
        case 69: return "Scarab of protection";
        case 70:
        case 71: return "Armor, +2 splint";
        case 72:
        case 73: return "Armor, +2 studded leather";
        case 74:
        case 75: return "Well of many words";
        case 76:
            const f = rwn(12);
            switch(f) {
                case 1:
                case 2: return "Armor, +2 half plate";
                case 3:
                case 4: return "Armor, +2 plate";
                case 5:
                case 6: return "Armor, +3 studded leather";
                case 7:
                case 8: return "Armor, +3 breastplate";
                case 9:
                case 10: return "Armor, +3 splint";
                case 11: return "Armor, +3 half plate";
                case 12: return "Armor, +3 plate";
            }
            break;
            case 77: return "Apparatus of Kwalish";
            case 78: return "Armor of invulnerability";
            case 79: return "Belt of storm giant strength";
            case 80: return "Cubic gate";
            case 81: return "Deck of many things";
            case 82: return "Efreeti chain";
            case 83: return "Armor of resistance, " + ranArr(damageTypes);
            case 84: return "Horn of Valhalla (iron)";
            case 85: return "Instrument of the bards (Ollamh harp";
            case 86: return "Ioun stone (greater absorption";
            case 87: return "Ioun stone (mastery)";
            case 88: return "Ioun stone (regeneration)";
            case 89: return "Plate armor of etheralness";
            case 90: return "Plate armor of resistance, " + ranArr(damageTypes);
            case 91: return "Ring of air elemental command";
            case 92: return "Ring of earth elemental command";
            case 93: return "Ring of fire elemental command";
            case 94: return "Ring of three wishes";
            case 95: return "Ring of water elemental command";
            case 96: return "Sphere of annihilation";
            case 97: return "Talisman of pure good";
            case 98: return "Talisman of the sphere";
            case 99: return "Talisman of the ultimante evil";
            case 100: return "Tome of the stilled tongue";
    }
}