import { rwn } from "../utils/randomWholeNumber";
import { ranArr } from "../utils/helpers";
import { spells6, spells7, spells8 } from "../lists/spells";

export function magicItemsD() {
    const n = rwn(100);
    if (n <= 20) return "Potion of supreme healing";
    if (n <= 30) return "Potion of invisibility";
    if (n <= 40) return "Potion of speed";
    if (n <= 50) return `${ranArr(spells6)} spell scroll (6th level)`;
    if (n <= 57) return `${ranArr(spells7)} spell scroll (7th level)`;
    if (n <= 62)
      return `Ammunition, +3 ${ranArr(
        "arrow",
        "blowgun needle",
        "crossbow bolt",
        "sling bullet"
      )}`;
    if (n <= 67) return "Oil of sharpness";
    if (n <= 72) return "Potion of flying";
    if (n <= 77) return "Potion of cloud giant strength";
    if (n <= 82) return "Potion of longevity";
    if (n <= 87) return "Potion of vitality";
    if (n <= 92) return `${ranArr(spells8)} spell scroll (8th level)`;
    if (n <= 95) return "Horseshoes of a zephyr";
    if (n <= 98) return "Nolzur's marvelous pigments";
    if (n <= 99) return "Bag of devouring";
    if (n <= 100) return "Portable Hole";
  }