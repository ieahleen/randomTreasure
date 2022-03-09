import { rwn } from "./utils/randomWholeNumber.js";
import { spells1 , spells2 , spells3 , spells4, spells5, spells6, spells7, spells8, spells9, cantrips} from "./lists/spells.js"
import { numberCoins } from "./utils/numberOfCoins.js"
import { art25, art250 } from "./tables/artObjects.js"
import { ranArr, objects } from "./utils/helpers.js"
import { magicItemsH } from "./tables/magicItemsH.js";
import { magicItemsG } from "./tables/magicItemsG.js";
import { magicItemsF } from "./tables/magicItemsF.js";
import { magicItemsE } from "./tables/magicItemsE.js";
import { magicItemsD } from "./tables/magicItemsD.js";
import { magicItemsC } from "./tables/magicItemsC.js";
import { magicItemsB } from "./tables/magicItemsB.js";

const targetElement = document.querySelector("#t");
document.querySelector("#a").addEventListener("click", treasureA);
document.querySelector("#b").addEventListener("click", treasureB);
document.querySelector("#c").addEventListener("click", treasureC);
document.querySelector("#d").addEventListener("click", treasureD);
document.querySelector("#e").addEventListener("click", treasureE);
document.querySelector("#f").addEventListener("click", treasureF);


function treasureA() {
  const t = rwn(100);
  const treasure = {};
  if (t <= 30) {
    treasure.CP = numberCoins(5, 6, 1);
  } else if (t <= 60) {
    treasure.SP = numberCoins(4, 6, 1);
  } else if (t <= 70) {
    treasure.EP = numberCoins(3, 6, 1);
  } else if (t <= 95) {
    treasure.GP = numberCoins(3, 6, 1);
  } else {
    treasure.PP = numberCoins(1, 6, 1);
  }

  targetElement.textContent = JSON.stringify(treasure, null, 2);
}

function treasureB() {
  const t = rwn(100);
  const treasure = {};
  if (t <= 30) {
    treasure.CP = numberCoins(4, 6, 100);
    treasure.EP = numberCoins(1, 6, 10);
  } else if (t <= 60) {
    treasure.SP = numberCoins(6, 6, 10);
    treasure.GP = numberCoins(2, 6, 10);
  } else if (t <= 70) {
    treasure.EP = numberCoins(3, 6, 10);
    treasure.GP = numberCoins(2, 6, 10);
  } else if (t <= 95) {
    treasure.GP = numberCoins(4, 6, 10);
  } else {
    treasure.GP = numberCoins(2, 6, 10);
    treasure.PP = numberCoins(3, 6, 1);
  }

  targetElement.textContent = JSON.stringify(treasure, null, 2);
}

function treasureC() {
  const t = rwn(100);
  const treasure = {};
  if (t <= 20) {
    treasure.SP = numberCoins(4, 6, 100);
    treasure.GP = numberCoins(1, 6, 100);
  } else if (t <= 35) {
    treasure.EP = numberCoins(1, 6, 100);
    treasure.GP = numberCoins(1, 6, 100);
  } else if (t <= 75) {
    treasure.GP = numberCoins(2, 6, 100);
    treasure.PP = numberCoins(1, 6, 10);
  } else {
    treasure.GP = numberCoins(2, 6, 100);
    treasure.PP = numberCoins(2, 6, 10);
  }

  targetElement.textContent = JSON.stringify(treasure, null, 2);
}

function treasureD() {
  const c = rwn(100);
  const treasure = {};
  if (c <= 15) {
    treasure.EP = numberCoins(2, 6, 1000);
    treasure.GP = numberCoins(8, 6, 100);
  } else if (c <= 55) {
    treasure.GP = numberCoins(1, 6, 1000);
    treasure.PP = numberCoins(1, 6, 100);
  } else if (c <= 100) {
    treasure.GP = numberCoins(1, 6, 1000);
    treasure.PP = numberCoins(2, 6, 100);
  }
  targetElement.textContent = JSON.stringify(treasure, null, 2);
}

function treasureE() {
  const treasure = {
    CP: numberCoins(6, 6, 100),
    SP: numberCoins(3, 6, 100),
    GP: numberCoins(2, 6, 10)
  };

  const n = rwn(100);
  if (n <= 6) {
    // nothing
  } else if (n <= 16) {
    treasure["10 gp gems"] = objects(2, 6, gems10);
  } else if (n <= 26) {
    treasure["25 gp art objects"] = objects(2, 4, art25);
  } else if (n <= 36) {
    treasure["50 gp gems"] = objects(2, 6, gems50);
  } else if (n <= 44) {
    treasure["10 gp gems"] = objects(2, 6, gems10);
    treasure["Magic items"] = objects(1, 6, magicItemsA);
  } else if (n <= 52) {
    treasure["25 gp art objects"] = objects(2, 4, art25);
    treasure["Magic Items"] = objects(1, 6, magicItemsA);
  } else if (n <= 60) {
    treasure["50 gp gems"] = objects(2, 6, gems50);
    treasure["Magic Items"] = objects(1, 6, magicItemsA);
  } else if (n <= 65) {
    treasure["10 gp gems"] = objects(2, 6, gems10);
    treasure["Magic Items"] = objects(1, 4, magicItemsB);
  } else if (n <= 70) {
    treasure["25 gp art objects"] = objects(2, 4, art25);
    treasure["Magic Items"] = objects(1, 4, magicItemsB);
  } else if (n <= 75) {
    treasure["50 gp gems"] = objects(2, 6, gems50);
    treasure["Magic Items"] = objects(1, 4, magicItemsB);
  } else if (n <= 78) {
    treasure["10 gp gems"] = objects(2, 6, gems10);
    treasure["Magic Items"] = objects(1, 4, magicItemsC);
  } else if (n <= 80) {
    treasure["25 gp art objects"] = objects(2, 6, art25);
    treasure["Magic Items"] = objects(1, 4, magicItemsC);
  } else if (n <= 85) {
    treasure["50 gp gems"] = objects(2, 6, gems50);
    treasure["Magic Items"] = objects(1, 4, magicItemsC);
  } else if (n <= 92) {
    treasure["25 gp art objects"] = objects(2, 4, art25);
    treasure["Magic Items"] = objects(1, 4, magicItemsF);
  } else if (n <= 97) {
    treasure["50 gp gems"] = objects(2, 6, gems50);
    treasure["Magic Items"] = objects(1, 4, magicItemsF);
  } else if (n <= 99) {
    treasure["25 gp art objects"] = objects(2, 4, art25);
    treasure["Magic Items"] = objects(1, 1, magicItemsG);
  } else if (n <= 100) {
    treasure["50 gp gems"] = objects(2, 6, gems50);
    treasure["Magic Items"] = objects(1, 1, magicItemsG);
  }

  targetElement.textContent = JSON.stringify(treasure, null, 2);
}

function treasureF() {
  const n = rwn(100);
  const treasure = {};
  treasure.CP = numberCoins(2, 6, 100);
  treasure.SP = numberCoins(2, 6, 1000);
  treasure.GP = numberCoins(6, 6, 100);
  treasure.PP = numberCoins(3, 6, 10);
  if (n >= 1 && n <= 4) {
    // nothing
  } else if (
    (n >= 5 && n <= 10) ||
    (n >= 29 && n <= 32) ||
    (n >= 45 && n <= 49) ||
    (n >= 64 && n <= 66) ||
    (n >= 75 && n <= 76) ||
    (n >= 81 && n <= 84)
  ) {
    treasure["25 gp art objects"] = objects(2, 4, art25);
  } else if (
    (n >= 11 && n <= 16) ||
    (n >= 33 && n <= 36) ||
    (n >= 50 && n <= 54) ||
    (n >= 67 && n <= 69) ||
    (n >= 77 && n <= 78) ||
    (n >= 85 && n <= 88)
  ) {
    treasure["50 gp gems"] = objects(3, 6, gems50);
  } else if (
    (n >= 17 && n <= 22) ||
    (n >= 37 && n <= 40) ||
    (n >= 55 && n <= 59) ||
    (n >= 70 && n <= 72) ||
    n === 79 ||
    (n >= 89 && n <= 91) ||
    (n >= 95 && n <= 96) ||
    n === 99
  ) {
    treasure["100 gp gems"] = objects(3, 6, gems100);
  } else if (
    (n >= 23 && n <= 28) ||
    (n >= 41 && n <= 44) ||
    (n >= 60 && n <= 63) ||
    (n >= 73 && n <= 74) ||
    n === 80 ||
    (n >= 92 && n <= 94) ||
    (n >= 97 && n <= 98) ||
    n === 100
  ) {
    treasure["250 gp art objects"] = objects(2, 4, art250);
  }

  if (n <= 28) {
    // nothing
  } else if (n <= 44) {
    treasure["Magic Items"] = objects(1, 6, magicItemsA);
  } else if (n <= 63) {
    treasure["Magic Items"] = objects(1, 4, magicItemsB);
  } else if (n <= 74) {
    treasure["Magic Items"] = objects(1, 4, magicItemsC);
  } else if (n <= 80) {
    treasure["Magic Items"] = objects(1, 1, magicItemsD);
  } else if (n <= 94) {
    treasure["Magic Items"] = objects(1, 4, magicItemsF);
  } else if (n <= 98) {
    treasure["Magic Items"] = objects(1, 4, magicItemsG);
  } else if (n <= 100) {
    treasure["Magic Items"] = objects(1, 1, magicItemsH);
  }
  targetElement.textContent = JSON.stringify(treasure, null, 2);
}




function gems10() {
  const y = rwn(12);
  switch (y) {
    case 1:
      return "Azurite (opaque mottled deep blue)";
    case 2:
      return `Banded agate (translucent striped ${ranArr(
        "brown",
        "blue",
        "white",
        "red"
      )})`;
    case 3:
      return "Blue quartz (transparent pale blue)";
    case 4:
      return `Eye agate (translucent circles of ${ranArr(
        "gray",
        "white",
        "brown",
        "blue",
        "green"
      )})`;
    case 5:
      return "Hematite (opaque gray-black)";
    case 6:
      return "Lapis lazuli (opaque light and dark blue with yellow flecks)";
    case 7:
      return "Malachite (opaque striated light and dark green)";
    case 8:
      return `Moss agate (translucent ${ranArr(
        "pink",
        "yellow-white"
      )} with ${ranArr("mossy gray", "green")} markings)`;
    case 9:
      return "Obsidian (opaque black)";
    case 10:
      return "Rhodochrosite (opaque light pink)";
    case 11:
      return "Tiger eye (translucent brown with golden center)";
    case 12:
      return "Turquoise (opaque light blue-green)";
  }
}
function gems50() {
  const n = rwn(12);
  switch (n) {
    case 1:
      return "Bloodstone (opaque dark gray with red flecks)";
    case 2:
      return "Carnelian (opaque orange to red-brown)";
    case 3:
      return "Chalcedony (opaque white)";
    case 4:
      return "Chrysoprase (translucent green)";
    case 5:
      return "Citrine (transparent pale yellow-brown)";
    case 6:
      return `Jasper (opaque ${ranArr("blue", "black", "brown")})`;
    case 7:
      return "Moonstone (translucent withe with pale blue glow)";
    case 8:
      return `Onyx (opaque bands of ${ranArr(
        "black and white",
        "pure black",
        "pure white"
      )})`;
    case 9:
      return `Quartz (transparent ${ranArr("white", "smoky gray", "yellow")})`;
    case 10:
      return "Sardonyx (opaque bands of red and white)";
    case 11:
      return "Star rose quartz (translucent rosy stone with white star-shaped center)";
    case 12:
      return "Zircon (transparent pale blue-green)";
  }
}
function gems100() {
  const n = rwn(10);
  switch (n) {
    case 1:
      return "Amber (transparent watery gold to rich gold)";
    case 2:
      return "Amethyst (transparent deep purple)";
    case 3:
      return "Chrysoberyl (transparent yellow-green to pale green)";
    case 4:
      return "Coral (opaque crimson)";
    case 5:
      return `Garnet (transparent ${ranArr("red", "brown-green", "violet")})`;
    case 6:
      return `Jade (transparent ${ranArr(
        "light green",
        "deep green",
        "white"
      )})`;
    case 7:
      return "Jet (opaque deep black)";
    case 8:
      return `Pearl (opaque lustruous ${ranArr("white", "yellow", "pink")})`;
    case 9:
      return `Spinel (transparent ${ranArr("red", "red-brown", "deep green")})`;
    case 10:
      return `Tourmaline (transparent ${ranArr(
        "pale green",
        "blue",
        "brown",
        "red"
      )})`;
  }
}

function magicItemsA() {
  const n = rwn(100);
  if (n <= 50) return "Potion of healing";
  if (n <= 60) return `${ranArr(cantrips)} spell scroll (cantrip)`;
  if (n <= 70) return "Potion of climbing";
  if (n <= 90) return `${ranArr(spells1)} spell scroll (1st level)`;
  if (n <= 94) return `${ranArr(spells2)} spell scroll (2nd level)`;
  if (n <= 98) return "Potion of greater healing";
  if (n <= 99) return "Bag of holding";
  if (n <= 100) return "Driftglobe";
}