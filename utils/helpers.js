import { spells1, spells2, spells3 } from '../lists/spells.js';
import { gems100 } from '../tables/gems.js';

export const randomItemFromTableCompound =
  (dist) =>
  (num, ...args) => {
    const keys = Object.keys(dist)
      .map((d) => parseInt(d))
      .sort((a, b) => a - b);
    const key = keys.find((key) => num <= key);
    const result = dist[key];
    return typeof result === 'function' ? result(...args) : result;
  };

const randomItemFromTable =
  (maxDie, dist) =>
  (...args) => {
    const num = rwn(maxDie);
    const keys = Object.keys(dist)
      .map((d) => parseInt(d))
      .sort((a, b) => a - b);
    const key = keys.find((key) => num <= key);
    const result = dist[key];
    return typeof result === 'function' ? result(...args) : result;
  };

const partition = (arr, num) => {
  const result = [];
  for (let i = 0; i < arr.length; i += num) {
    result.push(arr.slice(i, i + num));
  }
  return result;
};

export const randomRangeSelection =
  (ranges) =>
  (num, ...args) => {
    const parts = partition(ranges, 2);
    const [rangeDef, rangeResult] = parts.find(([rangeDef, result]) => {
      if (!result) return true;
      return rangeDef.some(([from, to]) => num >= from && num <= to);
    });
    const result = rangeResult ? rangeResult : rangeDef;
    return typeof result === 'function' ? result(...args) : result;
  };

export function randomItemFromArray(...arr) {
  if (Array.isArray(arr[0])) arr = arr[0];
  return arr[Math.floor(Math.random() * arr.length)];
}

export function randomWholeNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

export function listOfObjectsFromTable(
  numberOfDice,
  typeOfDie,
  itemFromRandomTable
) {
  let numberOfItems = 0;
  for (let i = 0; i < numberOfDice; i++) {
    numberOfItems += randomWholeNumber(typeOfDie);
  }
  const listOfOutputObjects = [];
  for (let j = 0; j < numberOfItems; j++) {
    listOfOutputObjects.push(itemFromRandomTable());
  }

  return listOfOutputObjects;
}

const randomAlignmentDefinition = [
  20,
  {
    2: 'chaotic evil',
    4: 'chaotic neutral',
    7: 'chaotic good',
    9: 'neutral evil',
    11: 'pure neutral',
    13: 'neutral good',
    15: 'lawful evil',
    17: 'lawful neutral',
    20: 'lawful good',
  },
];

export const randomAlignment = randomItemFromTable(
  ...randomAlignmentDefinition
);

const carpetSizeDefinition = [
  100,
  {
    20: '3 ft. x 5 ft.',
    55: '4 ft. x 6 ft.',
    80: '5 ft. x 7 ft.',
    100: '6 ft. x 9 ft.',
  },
];

export const carpetSize = randomItemFromTable(...carpetSizeDefinition);

const randomFeatherTokenDefinition = [
  100,
  {
    20: 'anchor',
    35: 'bird',
    50: 'fan',
    65: 'swan boat',
    90: 'tree',
    100: 'whip',
  },
];

export const randomFeatherToken = randomItemFromTable(
  ...randomFeatherTokenDefinition
);

const randomPatchDefinition = [
  100,
  {
    8: 'Bag of 100 gp',
    15: 'Silver coffer',
    22: 'Iron door',
    30: () => [
      gems100(),
      gems100(),
      gems100(),
      gems100(),
      gems100(),
      gems100(),
      gems100(),
      gems100(),
      gems100(),
      gems100(),
    ],
    44: 'Wooden ladder 24 ft.',
    51: 'A riding horse with saddle bags',
    59: 'Pit',
    68: '4 potions of healing',
    75: 'Rowboat 12 ft.',
    83: randomItemFromTable(6, {
      3: () => `${randomItemFromArray(spells1)} spell scroll (1st level)`,
      5: () => `${randomItemFromArray(spells2)} spell scroll (2nd level)`,
      6: () => `${randomItemFromArray(spells3)} spell scroll (3rd level)`,
    }),
    90: '2 mastiffs',
    96: 'Window (2 ft. x 4 ft. and up to 2 feet deep)',
    100: `Portable ram`,
  },
];

const randomPatch = randomItemFromTable(...randomPatchDefinition);

export function randomPatches() {
  const n = numberOfCoins(4, 4, 1);
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(randomPatch());
  }
  return arr;
}

export function randomProtection() {
  const n = randomWholeNumber(100);
  if (n <= 10) return 'aberrations';
  if (n <= 20) return 'beats';
  if (n <= 30) return 'celestials';
  if (n <= 40) return 'elementals';
  if (n <= 50) return 'fey';
  if (n <= 75) return 'fiends';
  if (n <= 80) return 'plants';
  if (n <= 100) return 'undead';
}

export function numberOfCoins(n, d, m) {
  let c = 1;
  for (let i = 0; i < n; i++) {
    c += randomWholeNumber(d);
  }
  return c * m;
}
