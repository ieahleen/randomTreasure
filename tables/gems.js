import {
  randomItemFromArray,
  randomItemFromArraySimple,
} from '../utils/helpers.js';

const gems10Definition = [
  'Azurite (opaque mottled deep blue)',
  () =>
    `Banded agate (translucent striped ${randomItemFromArraySimple(
      'brown',
      'blue',
      'white',
      'red'
    )})`,
  'Blue quartz (transparent pale blue)',
  () =>
    `Eye agate (translucent circles of ${randomItemFromArraySimple(
      'gray',
      'white',
      'brown',
      'blue',
      'green'
    )})`,
  'Hematite (opaque gray-black)',
  'Lapis lazuli (opaque light and dark blue with yellow flecks)',
  'Malachite (opaque striated light and dark green)',
  () =>
    `Moss agate (translucent ${randomItemFromArraySimple(
      'pink',
      'yellow-white'
    )} with ${randomItemFromArraySimple('mossy gray', 'green')} markings)`,
  'Obsidian (opaque black)',
  'Rhodochrosite (opaque light pink)',
  'Tiger eye (translucent brown with golden center)',
  'Turquoise (opaque light blue-green)',
];

export const gems10 = randomItemFromArray(gems10Definition);

const gems50Definition = [
  'Bloodstone (opaque dark gray with red flecks)',
  'Carnelian (opaque orange to red-brown)',
  'Chalcedony (opaque white)',
  'Chrysoprase (translucent green)',
  'Citrine (transparent pale yellow-brown)',
  () =>
    `Jasper (opaque ${randomItemFromArraySimple('blue', 'black', 'brown')})`,
  'Moonstone (translucent white with pale blue glow)',
  () =>
    `Onyx (opaque bands of ${randomItemFromArraySimple(
      'black and white',
      'pure black',
      'pure white'
    )})`,
  () =>
    `Quartz (transparent ${randomItemFromArraySimple(
      'white',
      'smoky gray',
      'yellow'
    )})`,
  'Sardonyx (opaque bands of red and white)',
  'Zircon (transparent pale blue-green)',
];

export const gems50 = randomItemFromArray(gems50Definition);

const gems100Definition = [
  'Amber (transparent watery gold to rich gold)',
  'Amethyst (transparent deep purple)',
  'Chrysoberyl (transparent yellow-green to pale green)',
  'Coral (opaque crimson)',
  () =>
    `Garnet (transparent ${randomItemFromArraySimple(
      'red',
      'brown-green',
      'violet'
    )})`,
  () =>
    `Jade (transparent ${randomItemFromArraySimple(
      'light green',
      'deep green',
      'white'
    )})`,
  'Jet (opaque deep black)',
  () =>
    `Pearl (opaque lustruous ${randomItemFromArraySimple(
      'white',
      'yellow',
      'pink'
    )})`,
  () =>
    `Spinel (transparent ${randomItemFromArraySimple(
      'red',
      'red-brown',
      'deep green'
    )})`,
  () =>
    `Tourmaline (transparent ${randomItemFromArraySimple(
      'pale green',
      'blue',
      'brown',
      'red'
    )})`,
];

export const gems100 = randomItemFromArray(gems100Definition);

const gems500Definition = [
  'Alexandrite (transparent dark green)',
  'Aquamarine (transparent pale blue-green)',
  'Black pearl (opaque pure black)',
  'Blue spinel (transparent deep blue)',
  'Peridot (transparent rich olive green)',
  'Topaz (transparent golden yellow)',
];

export const gems500 = randomItemFromArray(gems500Definition);

const gems1000Definition = [
  'Black opal (translucent dark green with black mottling and golden flecks)',
  'Blue sapphire (transparent blue-white to medium blue)',
  'Emerald (transparent deep bright green)',
  'Fire opal (translucent fiery red)',
  'Opal (translucent pale blue with green and golden mottling)',
  'Star ruby (translucent ruby with white star-shaped center)',
  'Star sapphire (translucent blue sapphire with white star-shaped center)',
  () =>
    `Yellow sapphire (transparent ${randomItemFromArraySimple(
      'fiery yellow',
      'yellow-green'
    )})`,
];
export const gems1000 = randomItemFromArray(gems1000Definition);

const gems5000Definition = [
  'Black sapphire (translucent lustruous black with glowing highlights)',
  () =>
    `Diamond (transparent ${randomItemFromArraySimple(
      'blue-white',
      'canary',
      'pink',
      'brown',
      'blue'
    )})`,
  'Jacinth (transparent fiery orange)',
  'Ruby (transparent clear red to deep crimson)',
];

export const gems5000 = randomItemFromArray(gems5000Definition);
