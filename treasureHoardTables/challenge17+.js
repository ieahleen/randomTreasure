import { art2500, art7500 } from "../tables/artObjects.js";
import { gems1000, gems5000 } from "../tables/gems.js";
import { magicItemsC } from "../tables/magicItemsC.js";
import { magicItemsD } from "../tables/magicItemsD.js";
import { magicItemsE } from "../tables/magicItemsE.js";
import { magicItemsG } from "../tables/magicItemsG.js";
import { magicItemsH } from "../tables/magicItemsH.js";
import { magicItemsI } from "../tables/magicItemsI.js";
import { objects } from "../utils/helpers.js";
import { numberCoins } from "../utils/numberOfCoins.js";
import { randomWholeNumber } from "../utils/randomWholeNumber.js";

export function treasureH () {
    const treasure = {};
    treasure.GP = numberCoins(12,6,1000);
    treasure.PP = numberCoins(8,6,1000);

    const n = randomWholeNumber(100);
    // Gems or Art Objects
    if (n <= 2) {

    } else if (
        (n <= 3 && n >= 5)
        || (n >= 15 && n <= 22)
        || (n >= 47 && n <= 52)
        || (n >= 69 && n <= 69)
        || (n >= 73 && n <= 74)
        || (n >= 81 && n <= 85)
    ) {
        treasure["1,000 gp items"] = objects(3,6,gems1000);
    } else if (
        (n >= 6 && n <= 8)
        || (n >= 23 && n <= 30)
        || (n >= 53 && n <= 58)
        || (n >= 70 && n <= 70)
        || (n >= 75 && n <= 76)
        || (n >= 86 && n <= 90)
    ) {
        treasure["2,500 gp art objects"] = objects(1,10,art2500);
    } else if (
        (n >= 9 && n <= 11)
        || (n >= 31 && n <= 38)
        || (n >= 59 && n <= 63)
        || (n >= 77 && n <= 78)
        || (n >= 24 && n <= 26)
        || (n >= 91 && n <= 95)
    ) {
        treasure["7,500 gp art obkects"] = objects(1,4,art7500);
    } else {
        treasure["5,000 gp gems"] = objects(1,8,gems5000);
    }

    // Magic Items
    if (n <= 2) {
        // nope
    } else if (n <= 14) {
        treasure["Magic Items"] = objects(1,8,magicItemsC);
    }else if (n <= 46) {
        treasure["Magic Items"] = objects(1,6,magicItemsD);
    } else if (n <= 68) {
        treasure["Magic Items"] = objects(1,6,magicItemsE);
    } else if (n <= 72) {
        treasure["Magic Items"] = objects(1,4,magicItemsG);
    } else if (n <= 80) {
        treasure["Magic Items"] = objects(1,4,magicItemsH);
    } else {
        treasure["Magic Items"] = objects(1,4,magicItemsI);
    }
    
    return treasure;
}