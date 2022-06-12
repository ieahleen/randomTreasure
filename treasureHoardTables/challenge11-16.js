import { randomWholeNumber } from "../utils/randomWholeNumber.js"
import { numberCoins } from "../utils/numberOfCoins.js"
import { objects } from "../utils/helpers.js"
import { gems1000, gems500 } from "../tables/gems.js";
import { art250, art750 } from "../tables/artObjects.js"
import { magicItemsA } from "../tables/magicItemsA.js";
import { magicItemsB } from "../tables/magicItemsB.js";
import { magicItemsC } from "../tables/magicItemsC.js";
import { magicItemsD } from "../tables/magicItemsD.js";
import { magicItemsE } from "../tables/magicItemsE.js";
import { magicItemsF } from "../tables/magicItemsF.js";
import { magicItemsG } from "../tables/magicItemsG.js";
import { magicItemsH } from "../tables/magicItemsH.js";
import { magicItemsI } from "../tables/magicItemsI.js";

export function treasureG() {
    const treasure = {
        GP: numberCoins(4, 6, 1000),
        PP: numberCoins(5, 6, 100)
    }

    const n = randomWholeNumber(100);
    // gems && objects
    if (n <= 3) {
        // nope
    } else if ((n >= 10 && n <= 12)
     || (n >= 24 && n <= 26)
     || (n >= 41 && n <= 45)
     || (n >= 59 && n <= 62)
     || (n >= 71 && n <= 72)
     || (n >= 79 && n <= 80)
     || (n >= 89 && n <= 90)
     || (n >= 97 && n <= 98)) {
        treasure["500 gp gems"] = objects(3, 6, gems500);
    } else if (
        (n >= 13 && n <= 15)
        || (n >= 27 && n <= 29)
        || (n >= 46 && n <= 50)
        || (n >= 63 && n <= 66)
        || (n >= 73 && n <= 74)
        || (n >= 81 && n <= 82)
        || (n >= 91 && n <= 92)
        || (n >= 99 && n <= 100)
    ) {
        treasure["1000 gp gems"] = objects(3,6,gems1000)
    } else if (
        (n >= 4 && n <= 6)
        || (n >= 16 && n <= 19)
        || (n >= 30 && n <= 35)
        || (n >= 51 && n <= 54)
        || (n >= 67 && n <= 68)
        || (n >= 75 && n <= 76)
        || (n >= 83 && n <= 85)
        || (n >= 93 && n <= 94)
    ) {
        treasure["250 gp art objects"] = objects(2,4, art250);
    } else {
        treasure["750 gp art objects"] = objects(2,4,art750);
    }

    // magit items

    if (n <= 15) {
        // nope
    } else if (n <= 29) {
        treasure["Magic Items"] = objects(1,4,magicItemsA).concat(objects(1,6,magicItemsB));
    } else if (n <= 50) {
        treasure["Magic Items"] = objects(1,6,magicItemsC);
    } else if (n <= 66) {
        treasure["Magic Items"] = objects(1,4,magicItemsD);
    } else if (n <= 74) {
        treasure["Magic Items"] = objects(1,1,magicItemsE);
    } else if (n <= 82) {
        treasure["Magic Items"] = objects(1,1,magicItemsF).concat(objects(1,4,magicItemsG));
    } else if (n <= 92) {
        treasure["Magic Items"] = objects(1,4,magicItemsH);
    } else {
        treasure["Magic Items"] = objects(1,1,magicItemsI);
    }
    
    return treasure;
}