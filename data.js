// Short summaries adapted from the official Star Wars Databank and film pages.
// https://www.starwars.com/databank and https://www.starwars.com/films
// Each source below identifies the entry used for that item.
export const planets = [
  {
    name: 'Tatooine',
    facts: ['Terrain: desert', 'Known for: twin suns'],
    description: 'Anakin and Luke Skywalker grew up on this remote desert world. Moisture farms and busy spaceports dot its harsh landscape.',
    source: 'https://www.starwars.com/databank/tatooine',
  },
  {
    name: 'Hoth',
    facts: ['Climate: cold', 'Terrain: snow and ice'],
    description: 'The Rebel Alliance hid Echo Base on Hoth. Wampas and tauntauns live among its frozen plains and glaciers.',
    source: 'https://www.starwars.com/databank/hoth',
  },
  {
    name: 'Naboo',
    facts: ['Climate: temperate', 'Terrain: plains and swamps'],
    description: 'Humans and Gungans share this green world. Its elegant river cities contrast with the Gungans\' underwater settlements.',
    source: 'https://www.starwars.com/databank/naboo',
  },
  {
    name: 'Coruscant',
    facts: ['Terrain: city', 'Known for: Jedi Temple'],
    description: 'A planet covered by a vast city, Coruscant served as the capital of the Republic and later the Empire.',
    source: 'https://www.starwars.com/databank/coruscant',
  },
  {
    name: 'Dagobah',
    facts: ['Climate: humid', 'Terrain: swamps'],
    description: 'Yoda lived in hiding on this secluded, life-filled world. Its misty wetlands became the setting for Luke\'s Jedi training.',
    source: 'https://www.starwars.com/databank/dagobah',
  },
  {
    name: 'Kashyyyk',
    facts: ['Climate: temperate', 'Terrain: forests'],
    description: 'The Wookiee homeworld has immense trees and advanced treetop settlements. Yoda helped defend it near the end of the Clone Wars.',
    source: 'https://www.starwars.com/databank/kashyyyk',
  },
];

export const spaceships = [
  {
    name: 'Millennium Falcon',
    facts: ['Type: light freighter', 'Pilots: Han Solo and Chewbacca'],
    description: 'A heavily modified Corellian freighter, the Falcon carried smugglers and Rebel heroes through some of the galaxy\'s most dangerous missions.',
    source: 'https://www.starwars.com/databank/millennium-falcon',
  },
  {
    name: 'X-wing Starfighter',
    facts: ['Type: starfighter', 'Affiliation: Rebel Alliance'],
    description: 'Four laser cannons, proton torpedoes, and a hyperdrive make the X-wing a versatile fighter. Luke flew one against the first Death Star.',
    source: 'https://www.starwars.com/databank/x-wing-starfighter',
  },
  {
    name: 'TIE Fighter',
    facts: ['Type: starfighter', 'Affiliation: Galactic Empire'],
    description: 'This single-pilot Imperial fighter is built for fast dogfights. Star Destroyers and battle stations carry squadrons into combat.',
    source: 'https://www.starwars.com/databank/tie-fighter',
  },
  {
    name: 'Imperial Star Destroyer',
    facts: ['Type: capital ship', 'Length: 1,600 meters'],
    description: 'The Empire\'s wedge-shaped warship carries TIE fighters and ground forces. Turbolasers and tractor beams help it control surrounding space.',
    source: 'https://www.starwars.com/databank/imperial-star-destroyer',
  },
  {
    name: 'Y-wing Starfighter',
    facts: ['Type: bomber / starfighter', 'Affiliation: Rebel Alliance'],
    description: 'A dependable design dating to the Clone Wars, the Y-wing attacks enemy ships and ground targets on bombing missions.',
    source: 'https://www.starwars.com/databank/y-wing-starfighter',
  },
  {
    name: 'Razor Crest',
    facts: ['Type: former military craft', 'Pilot: Din Djarin'],
    description: 'This former patrol craft provided transport and living space for the Mandalorian and Grogu on their travels.',
    source: 'https://www.starwars.com/databank/razor-crest',
  },
];

// The Skywalker saga is listed in episode order, rather than release order.
export const films = [
  {
    name: 'The Phantom Menace',
    facts: ['Episode I', 'Released: 1999'],
    description: 'Qui-Gon Jinn and Obi-Wan Kenobi discover young Anakin Skywalker while helping Queen Amidala defend Naboo.',
    source: 'https://www.starwars.com/films/star-wars-episode-i-the-phantom-menace',
  },
  {
    name: 'Attack of the Clones',
    facts: ['Episode II', 'Released: 2002'],
    description: 'Anakin protects Padme while Obi-Wan investigates a mysterious clone army. The Republic moves toward war with the Separatists.',
    source: 'https://www.starwars.com/films/star-wars-episode-ii-attack-of-the-clones',
  },
  {
    name: 'Revenge of the Sith',
    facts: ['Episode III', 'Released: 2005'],
    description: 'As the Clone Wars end, Anakin falls to the dark side and becomes Darth Vader. The Galactic Empire rises.',
    source: 'https://www.starwars.com/films/star-wars-episode-iii-revenge-of-the-sith',
  },
  {
    name: 'A New Hope',
    facts: ['Episode IV', 'Released: 1977'],
    description: 'Luke Skywalker joins Leia, Han Solo, and the Rebel Alliance in a desperate attempt to destroy the Death Star.',
    source: 'https://www.starwars.com/films/star-wars-episode-iv-a-new-hope',
  },
  {
    name: 'The Empire Strikes Back',
    facts: ['Episode V', 'Released: 1980'],
    description: 'The Empire pursues the Rebels after the battle on Hoth. Luke trains with Yoda before confronting Darth Vader.',
    source: 'https://www.starwars.com/films/star-wars-episode-v-the-empire-strikes-back',
  },
  {
    name: 'Return of the Jedi',
    facts: ['Episode VI', 'Released: 1983'],
    description: 'The Rebels attack a second Death Star while Luke faces Vader and the Emperor in a final struggle for his father\'s future.',
    source: 'https://www.starwars.com/films/star-wars-episode-vi-return-of-the-jedi',
  },
  {
    name: 'The Force Awakens',
    facts: ['Episode VII', 'Released: 2015'],
    description: 'Rey and Finn join the Resistance as the First Order threatens the galaxy. A missing Luke Skywalker offers a possible hope.',
    source: 'https://www.starwars.com/films/star-wars-episode-vii-the-force-awakens',
  },
  {
    name: 'The Last Jedi',
    facts: ['Episode VIII', 'Released: 2017'],
    description: 'Rey seeks guidance from Luke while the Resistance struggles to escape the First Order. Kylo Ren tests her understanding of the Force.',
    source: 'https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi',
  },
  {
    name: 'The Rise of Skywalker',
    facts: ['Episode IX', 'Released: 2019'],
    description: 'Rey and her friends confront the return of Emperor Palpatine as the Resistance gathers for the saga\'s final battle.',
    source: 'https://www.starwars.com/films/star-wars-episode-ix-the-rise-of-skywalker',
  },
];
