import { treasureA } from "./individualTreasureTables/challenge0-4.js";
import { treasureB } from "./individualTreasureTables/challenge5-10.js";
import { treasureC } from "./individualTreasureTables/challenge11-16.js";
import { treasureD } from "./individualTreasureTables/challenge17+.js";

const targetElement = document.querySelector("#t");

document.querySelector("#a").addEventListener("click", () => targetElement.textContent = JSON.stringify(treasureA(), null, 2));
document.querySelector("#b").addEventListener("click", () => targetElement.textContent = JSON.stringify(treasureB(), null, 2));
document.querySelector("#c").addEventListener("click", () => targetElement.textContent = JSON.stringify(treasureC(), null, 2));
document.querySelector("#d").addEventListener("click", () => targetElement.textContent = JSON.stringify(treasureD(), null, 2));
document.querySelector("#e").addEventListener("click", () => targetElement.textContent = JSON.stringify(treasureE(), null, 2));
document.querySelector("#f").addEventListener("click", () => targetElement.textContent = JSON.stringify(treasureF(), null, 2));