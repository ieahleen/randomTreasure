import { rwn } from "../utils/randomWholeNumber";
import { ranArr } from "../utils/helpers";
import { spells8, spells9 } from "../lists/spells";

export function magicItemsE() {
    const n = rwn(100);
    if (n <= 30) return `${ranArr(spells8)} spell scroll (8th level)`;
    if (n <= 55) return "Potion of storm giant strength";
    if (n <= 70) return "Potion of supreme healing";
    if (n <= 85) return `${ranArr(spells9)} spell scroll (9th level)`;
    if (n <= 93) return "Universal solvent";
    if (n <= 98) return "Arrow of slaying";
    if (n <= 100) return "Sovereign glue";
  }