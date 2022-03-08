document.querySelector("#a").addEventListener("click", treasureA);
document.querySelector("#b").addEventListener("click", treasureB);
document.querySelector("#c").addEventListener("click", treasureC);
document.querySelector("#d").addEventListener("click", treasureD);
document.querySelector("#e").addEventListener("click", treasureE);
// document.querySelector("#f").addEventListener("click", treasureF);
const weapons = "club, dagger, greatclub, handaxe, javelin, light hammer, mace, quarterstaff, sickle, spear, light crossbow, dart, shortbow, sling, battleaxe, flail, glaive, greatsword, halberd, lance, longsword, maul, mornignstar, pike, rapier, scimitar, shortsword, trident, war pick, warhammer, whip, blowgun, hand crossbow, heavy crossbow, longbow".split(
  ", "
);
const cantrips = "Acid Splash, Blade Ward, Chill Touch, Dancing Lights, Druidcraft, Eldritich Blast, Fire Bolt, Friends, Guidance, Light, Magic Hand, Mending, Message, Minor Illusion, Poison Spray, Prestidigitation, Produce Flame, Ray of Frost, Resistance, Sacred Flame, Shillelagh, Shocking Grasp, Spare the Dying, Thaumaturgy, Thorn Whip, Vicious Mockery".split(
  ", "
);
const spells1 = "Alarm, Animal Friendship, Armor of Agathys, Arms of Hadar, Bane, Bless, Bruning Hands, Charm Person, Chromatic Orb, Color Spray, Command, Compelled Duel, Comprehend Languages, Create or Destroy Water, Cure Wounds, Detect Evil and Good, Detect Magic, Detect Poison and Disease, Disguise Self, Dissonant Whispers, Divine Favor, Ensnaring Strike, Entangle, Expeditious Retreat, Faerie Fire, False Life, Ferather Fall, Find Familiar, Fog Cloud, Goodberry, Grease, Guiding Bolt, Hail of Thorns, Healing Word, Hellish Rebuke, Heroism, Hex, Hunter's Mark, Identify, Illusory Script, Inflict Wounds, Jump, Longstrider, Mage Armor, Magic Missile, Protection from Evil and Good, Purify Food and Drink, Ray of Sickness, Sanctuary, Searing Smite, Shield, Shield of Faith, Silent Image, Sleep, Speak with Animals, Tasha's Hideous Laughter, Tenser's Floating Disk, Thunderous Smite, Thunderwave, Unseen Servant, Witch Bolt, Wrathful Smite".split(
  ", "
);
const spells2 = "Aid, Alter Self, Animal Messanger, Arcane Lock, Augury, Barkskin, Beast Sense, Blindness/Deafness, Blur, Branding Smite, Calm Emotions, Cloud of Daggers, Continual Flame, Cordon of Arrows, Crown of Madness, Darkness, Darkvision, Detect Thoughts, Enhance Ability, Enlarge/Reduce, Enthrall, Find Steed, Find Traps, Flame Blade, Flaming Sphere, Gentle Repose, Gust of Wind, Heat Metal, Hold Person, Invisibility, Knock, Lesser Restoration, Levitate, Locate Animals or Plants, Locate Object, Magic Mouth, Magic Weapon, Melf's Acid Arrow, Mirror Image, Misty Step, Moonbeam, Nystul's Magic Aura, Pass Wihtout Trace, Phantasmal Force, Prayer of Healing, Protection from Poison, Ray of Enfeeblement, Rope Trick, Scorching Ray, See Invisibility, Shatter, Silence, Spider Climb, Spike Growth, Spiritual Weapon, Suggestion, Warding Bond, Web, Zone of Truth".split(
  ", "
);
const spells3 = "Animate Dead, Aura of Vitality, Beacon of Hope, Bestow Curse, Blinding Smite, Blink, Call Lightning, Clairvoyance, Conjure Barrage, Counterspell, Create Food and Water, Crusader's Mantle, Daylight, Dispel Magic, Elemental Weapon, Fear, Feign Death, Fireball, Fly, Glyph of Warding, Haste, Hunger of Hadar, Hypnotic Pattern, Leomund's Tiny Hut, Lightning Arrow, Lightning Bolt, Magic Circle, Major Image, Mass Healing Word, Meld Into Stone, Nondetection, Phantom Steed, Plant Growth, Protection from Energy, Remove Curse, Revivify, Sending, Sleet Storm, Slow, Speak with Dead, Speak with Plants, Spirit Guardians, Stinking Cloud, Tongues, Vampiric Touch, Water Breathing, Water Walk, Wind Wall".split(
  ", "
);
const spells4 = "Arcane Eye, Aura of Life, Aura of Purity, Banishment, Blight, Compulsion, Confusion, Conjure Minor Elemental, Conjure Woodland Beings, Control Water, Death Ward, Dimension Door, Divination, Evard's Black Tentacles, Fabricate, Fire Shield, Freedom of Movement, Giant Insect, Grasping Vine, Greater Invisibility, Guardian of Faith, Hallucinatory Terrain, Ice Storm, Leomund's Secret Chest, Locate Creature, Mordenkainen's Faithful Hound, Mordenkainen's Private Sanctum, Otiluke's Resilient Sphere, Phantasmal Killer, Polymorph, Staggering Smite, Wall of Fire".split(
  ", "
);
const spells5 = "Animate Object, Antilife Shield, Awaken, Banishing Smite, Bigby's Hand, Circle of Power, Cloudkill, Commune, Commune with Nature, Cone of Cold, Conjure Elemental, Conjure Volley, Contact Other Plane, Contagion, Creation, Destructive Wave, Dispel Evil and Good, Dominate Person, Dream, Flame Strike, Geas, Greater Restoration, Hallow, Hold Monster, Insect Plague, Legend Lore, Mass Cure Wounds, Mislead, Modify Memory, Passwall, Planar Binding, Raise Dead, Rary's Telepathic Bond, Reincarnate, Scrying, Seeming, Swift Quiver, Telekinesis, Teleportation Circle, Tree Strider, Wall of Force, Wall of Stone".split(
  ", "
);
const spells6 = "Arcane Gate, Blade Barrier, Chain Lightning, Circle of Death, Conjure Fey, Create Undead, Disintegrate, Eyebite, Flesh to Stone, Forbiddance, Globe of Invulnerability, Guards and Wards, Harm, Heal, Heroes' Feast, Mass Suggestion, Move Earth, Otiluke's Freezing Sphere, Planar Ally, Programmed Illusion, Sunbeam, Transport via Plants, True Seeing, Wall of Ice, Wall of Thorns, Wind Walk".split(
  ", "
);
const spells7 = "Conjure Celestial, Delayed Blast Fireball, Divine Word, Etherealness, Finger of Death, Fire Storm, Forcecage, Mirage Arcane, Mordenkainen's Magnificent Mansion, Mordenkainen's Sword, Prismatic Spray, Regenerate, Resurrection, Reverse Gravity, Sequester, Symbol, Teleport".split(
  ", "
);
const spells8 = "Animal Shapes, Antimagic Field, Antipathy, Sympathy, Control Weather, Counterspell, Demiplane, Dominate Monster, Earthquake, Feeblemind, Glibness, Holy Aura, Incendiary Cloud, Maze, Mind Blank, Power Word Stun, Sunburst, Telepathy, Tsunami".split(
  ", "
);
const spells9 = "Astral projection, Foresight, Gate, Mass Heal, Meteor Swarm, Power Word Heal, Power Word Kill, Prismatic Wall, Storm of Vengeance, Time Stop, True Polymorph, True Resurrection, Weird".split(
  ", "
);

const targetElement = document.querySelector("#t");
function rwn(max) {
  return Math.floor(Math.random() * max) + 1;
}
function numberCoins(n, d, m) {
  let c = 1;
  for (let i = 0; i < n; i++) {
    c += rwn(d);
  }
  return c * m;
}

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

function ranArr(...arr) {
  if (Array.isArray(arr[0])) arr = arr[0];
  return arr[Math.floor(Math.random() * arr.length)];
}

function objects(num, die, table) {
  let n = 0;
  for (let i = 0; i < num; i++) {
    n += rwn(die);
  }

  const arr = [];
  for (let j = 0; j < n; j++) {
    arr.push(table());
  }

  return arr;
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
function art25() {
  const n = rwn(10);
  switch (n) {
    case 1:
      return "Silver ewer";
    case 2:
      return "Carved bone statuette";
    case 4:
      return "Cloth-of-gold vestments";
    case 3:
      return "Small gold bracelet";
    case 5:
      return "Black velvet mask stitched with silver thread";
    case 6:
      return "Copper chalice with silver filigree";
    case 7:
      return "Pair of engraved bone dice";
    case 8:
      return "Small mirror set in a painted wooden frame";
    case 9:
      return "Embroided silk handkerchief";
    case 10:
      return "Gold locket with a painted portrait inside";
  }
}
function art250() {
  const a = rwn(10);
  switch (a) {
    case 1:
      return "Gold ring set with bloodstones";
    case 2:
      return "Carved ivory statuette";
    case 3:
      return "Large gold bracalet";
    case 4:
      "Silver necklace with a gemstone pendant";
    case 5:
      return "Bronze crown";
    case 6:
      return "Silk robe with gold embroidery";
    case 7:
      return "Large well-made tapestry";
    case 8:
      return "Brass mug with jade inlay";
    case 9:
      return "Box of turquoise animal figurines";
    case 10:
      return "Gold bird cage with electrum filigree";
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
function magicItemsB() {
  const n = rwn(100);
  if (n <= 15) return "Potion of greater healing";
  if (n <= 22) return "Potion of fire breath";
  if (n <= 29)
    return `Potion of resistance (${ranArr(
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
    )})`;
  if (n <= 34)
    return `Ammunition, +1 ${ranArr(
      "arrow",
      "blowgun needle",
      "crossbow bolt",
      "sling bullet"
    )}`;
  if (n <= 39) return "Potion of animal friendship";
  if (n <= 44) return "Potion of hill giant strength";
  if (n <= 49) return "Potion of growth";
  if (n <= 54) return "Potion of water breathing";
  if (n <= 59) return `${ranArr(spells2)} spell scroll (2nd level)`;
  if (n <= 64) return `${ranArr(spells3)} spell scroll (3rd level)`;
  if (n <= 67) return "Bag of Holding";
  if (n <= 70) return "Keoghtom's ointment";
  switch (n) {
    case 71:
    case 72:
    case 73:
      return "Oil of slipperiness";
    case 74:
    case 75:
      return "Dust of disappearance";
    case 76:
    case 77:
      return "Dust of dryness";
    case 78:
    case 79:
      return "Dust of sneezing and chocking";
    case 80:
    case 81:
      return `Elemental ${ranArr(
        "blue sapphire",
        "yellow diamond",
        "red corundum",
        "emerald"
      )}`;
    case 82:
    case 83:
      return "Philter of love";
    case 84:
      return "Alchemy jug";
    case 85:
      return "Cap of water breathing";
    case 86:
      return "Cloak of the manta ray";
    case 87:
      return "Driftglobe";
    case 88:
      return "Goggles of night";
    case 89:
      return "Helm of comprehending languages";
    case 90:
      return "Immovable rod";
    case 91:
      return "Lantern of revealing";
    case 92:
      return "Mariner's armor";
    case 93:
      return "Mithral Armor";
    case 94:
      return "Potion of poison";
    case 95:
      return "Ring of swimming";
    case 96:
      return "Robe of useful items";
    case 97:
      return "Rope of climbing";
    case 98:
      return "Saddle of the cavalier";
    case 99:
      return "Wand of magic detection";
    case 100:
      return "Wand of secrets";
  }
}
function magicItemsC() {
  const n = rwn(100);
  if (n <= 15) return "Potion of superior healing";
  if (n <= 22) return `${ranArr(spells4)} spell scroll (4th level)`;
  if (n <= 27)
    return `Ammunition, +2 ${ranArr(
      "arrow",
      "blowgun needle",
      "crossbow bolt",
      "sling bullet"
    )}`;
  if (n <= 32) return "Potion of clairvoyance";
  if (n <= 37) return "Potion of diminuition";
  if (n <= 42) return "Potion of gaseous form";
  if (n <= 47) return "Potion of frost giant strength";
  if (n <= 52) return "Potion of stone giant strength";
  if (n <= 57) return `Potion of heroism`;
  if (n <= 62) return "Potion of invulnerability";
  if (n <= 67) return "Potion of mind reading";
  if (n <= 72) return `${ranArr(spells5)} spell scroll (5th level)`;
  switch (n) {
    case 73:
    case 74:
    case 75:
      return "Elixir of health";
    case 76:
    case 77:
    case 78:
      return "Oil of etherealness";
    case 79:
    case 80:
    case 81:
      return "Potion of fire giant strength";
    case 82:
    case 83:
    case 84:
      return "Quaal's feather token";
    case 85:
    case 86:
    case 87:
      return "Scroll of protection";
    case 88:
    case 89:
      return "Bag of beans";
    case 90:
    case 91:
      return "Bead of force";
    case 92:
      return "Chime of opening";
    case 93:
      return "Decanter of endless water";
    case 94:
      return "Eyes of minute seeing";
    case 95:
      return "Folding boat";
    case 96:
      return "Heward's handy haversack";
    case 97:
      return "Horseshoes of speed";
    case 98:
      return "Necklace of fireballs";
    case 99:
      return "Periapt of health";
    case 100:
      return "Sending stones";
  }
}
function magicItemsD() {
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
function magicItemsE() {
  const n = rwn(100);
  if (n <= 30) return `${ranArr(spells8)} spell scroll (8th level)`;
  if (n <= 55) return "Potion of storm giant strength";
  if (n <= 70) return "Potion of supreme healing";
  if (n <= 85) return `${ranArr(spells9)} spell scroll (9th level)`;
  if (n <= 93) return "Universal solvent";
  if (n <= 98) return "Arrow of slaying";
  if (n <= 100) return "Sovereign glue";
}
function magicItemsF() {
  const n = rwn(100);

  if (n <= 15) return `Weapon, +1 ${ranArr(weapons)}`;
  switch (n) {
    case 16:
    case 17:
    case 18:
      return "Shield, +1";
    case 19:
    case 20:
    case 21:
      return "Sentinel shield";
    case 22:
    case 23:
      return "Amulet of proof against detection and location";
    case 24:
    case 25:
      return "Boots of elvenkind";
    case 26:
    case 27:
      return "Boots of striding and springing";
    case 28:
    case 29:
      return "Bracers of archery";
    case 30:
    case 31:
      return "Brooch of shielding";
    case 32:
    case 33:
      return "Broom of flying";
    case 34:
    case 35:
      return "Cloak of elvenkind";
    case 36:
    case 37:
      return "Cloak of protection";
    case 38:
    case 39:
      return "Gauntlets of ogre power";
    case 40:
    case 41:
      return "Hat of disguise";
    case 42:
    case 43:
      return "Javelin of lighting";
    case 44:
    case 45:
      return "Pearl of power";
    case 46:
    case 47:
      return "Rod of the pact keeper, +1";
    case 48:
    case 49:
      return "Slippers of spider climbing";
    case 50:
    case 51:
      return "Staff of the adder";
    case 52:
    case 53:
      return "Staff of the python";
    case 54:
    case 55:
      return "Sword of vengeance";
    case 56:
    case 57:
      return "Trident of fish command";
    case 58:
    case 59:
      return "Wand of magic missiles";
    case 60:
    case 61:
      return "Wand of the war mage, +1";
    case 62:
    case 63:
      return "Wand of web";
    case 64:
    case 65:
      return "Weapon of warning, " + ranArr(weapons);
    case 66:
      return "Adamantine armor (chain mail)";
    case 67:
      return "Adamantine armor (chain shirt)";
    case 68:
      return "Adamantine armor (scale mail)";
    case 69:
      return "Bag of tricks (gray)";
    case 70:
      return "Bag of tricks (rust)";
    case 71:
      return "Bag of tricks (tan)";
    case 72:
      return "Boots of the winterlands";
    case 73:
      return "Circlet of blasting";
    case 74:
      return "Deck of illusions";
    case 75:
      return "Eversmoking bottle";
    case 76:
      return "Eyes of charming";
    case 77:
      return "Eyes of the eagle";
    case 78:
      return "Figurine of wondrous power (silver raven)";
    case 79:
      return "Gem of brightness";
    case 80:
      return "Gloves of missile snaring";
    case 81:
      return "Gloves of swimming and climbing";
    case 82:
      return "Gloves of thievery";
    case 83:
      return "Headband of intellect";
    case 84:
      return "Helm of thelepaty";
    case 85:
      return "Instrument of the bards (Doss lute)";
    case 86:
      return "Instrument of the bards (Fochlucan bandlore)";
    case 87:
      return "Instrument of the bards (Mac-Fuimidh cittern)";
    case 88:
      return "Medallion of thoughts";
    case 89:
      return "Necklace of adaptation";
    case 90:
      return "Periapt of wound closure";
    case 91:
      return "Pipes of haunting";
    case 92:
      return "Pipes of the sewers";
    case 93:
      return "Ring of jumping";
    case 94:
      return "Ring of mind shielding";
    case 95:
      return "Ring of warmth";
    case 96:
      return "Ring of water walking";
    case 97:
      return "Quiver of Ehlonna";
    case 98:
      return "Stone of good luck";
    case 99:
      return "Wind fan";
    case 100:
      return "Winged boots";
  }
}
function magicItemsG() {
  const n = rwn(100);
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
      return `Weapon, +2 ${ranArr(weapons)}`;
    case 12:
    case 13:
    case 14:
      const str = "Figurine of wondrous power, ";
      const c = rwn(8);
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
      return "Armor of resistance (chain mail);";
    case 32:
      return "Armor, +1 (chain shirt)";
    case 33:
      return "Armor of resistance (chain shirt)";
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
      return "Dragon slayer";
    case 41:
      return "Elven chain";
    case 42:
      return "Flame tongue";
    case 43:
      return "Gem of seeing";
    case 44:
      return "Giant slayer";
    case 45:
      return "Glamoured studded leather";
    case 46:
      return "Helm of teleportation";
    case 47:
      return "Horn of blasting";
    case 48:
      const s = rwn(75);
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
      return `Armor of resistance (leather), ${ranArr(
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
      return (
        "Ring of resistance, " +
        `${ranArr(
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
        )}`
      );
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
      return `Armor, +1 scale mail`;
    case 78:
      return `Armor of resistance (scale mail), ${ranArr(
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
      return "Sword of life stealing";
    case 89:
      return "Sword of wounding";
    case 90:
      return "Tentacle rod";
    case 91:
      return "Vicious weapon";
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
// WIP
function magicItemsH() {
  const n = rwn(100);
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
      return `Weapon, +3 ${ranArr(weapons)}`;
    case 11:
    case 12:
      return "Amulet of the planes";
    case 13:
    case 14:
      return "Carpet of flying";
    case 15:
    case 16:
      return "Crystal ball (very rare version)";
    case 17:
    case 18:
      return "Ring of regeneration";
    case 19:
    case 20:
      return "Ring of shooting stars";
    case 21:
    case 22:
      return "Ring of telekinesis";
    case 23:
    case 24:
      return "Robe of scintillating colors";
    case 25:
    case 26:
      return "Robe of stars";
    case 27:
    case 28:
      return "Rod of absorption";
    case 29:
    case 30:
      return "Rod of alertness";
    case 31:
    case 32:
      return "Rod of security";
    case 33:
    case 34:
      return "Rod of the pact keeper, +3";
    case 35:
    case 36:
      return "Scimitar of speed";
    case 37:
    case 38:
      return "Shield, +1";
  }
}