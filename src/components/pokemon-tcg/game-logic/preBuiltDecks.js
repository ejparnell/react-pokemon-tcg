// waterDeck - in the database
// Pokémon (20)
// Squirtle (4x) - Basic Pokémon
// Wartortle (3x) - Stage 1 Evolution of Squirtle
// Blastoise (3x) - Stage 2 Evolution with powerful water attacks
// Poliwag (4x) - Basic Pokémon
// Poliwhirl (2x) - Stage 1 Evolution of Poliwag
// Poliwrath (2x) - Stage 2 Evolution with versatile attack options
// Energy (20)
// Water Energy (20x) - Provides Energy required for your Water-type attacks
// Trainer Cards (20)
// Bill (4x) - Draw 2 cards.
// Professor Oak (4x) - Discard your hand and draw 7 cards.
// Energy Retrieval (4x) - Retrieve up to 2 basic Energy cards from your discard pile and add them to your hand.
// Potion (4x) - Heal 20 damage from one of your Pokémon.
// Super Potion (4x) - Heal 60 damage but discard a Energy card attached to that Pokémon.
export const waterDeck = {
    pokemon: [
        { name: 'Squirtle', quantity: 4 },
        { name: 'Wartortle', quantity: 3 },
        { name: 'Blastoise', quantity: 3 },
        { name: 'Poliwag', quantity: 4 },
        { name: 'Poliwhirl', quantity: 2 },
        { name: 'Poliwrath', quantity: 2 },
    ],
    energy: [
        { name: 'Water Energy', quantity: 20 },
    ],
    trainer: [
        { name: 'Bill', quantity: 4 },
        { name: 'Professor Oak', quantity: 4 },
        { name: 'Energy Retrieval', quantity: 4 },
        { name: 'Potion', quantity: 4 },
        { name: 'Super Potion', quantity: 4 },
    ],
}

// fireDeck
// Charizard - Base Set (x2)
// Charmeleon - Base Set (x3)
// Charmander - Base Set (x4)
// Ninetales - Base Set (x2)
// Vulpix - Base Set (x3)
// Arcanine - Base Set (x2)
// Growlithe - Base Set (x3)
// Magmar - Fossil (x3)
// Trainer Cards (20):
// Professor Oak - Base Set (x2)
// Bill - Base Set (x4)
// Energy Retrieval - Base Set (x2)
// Energy Search - Base Set (x2)
// Switch - Base Set (x2)
// Gust of Wind - Base Set (x2)
// Potion - Base Set (x2)
// Computer Search - Base Set (x1)
// Item Finder - Base Set (x1)
// Pokémon Trader - Fossil (x2)
// Energy Cards (20):
// Fire Energy (x20)
export const fireDeck = {
    pokemon: [
        { name: 'Charizard', quantity: 2 },
        { name: 'Charmeleon', quantity: 3 },
        { name: 'Charmander', quantity: 4 },
        { name: 'Ninetales', quantity: 2 },
        { name: 'Vulpix', quantity: 3 },
        { name: 'Arcanine', quantity: 2 },
        { name: 'Growlithe', quantity: 3 },
        { name: 'Magmar', quantity: 3 },
    ],
    energy: [
        { name: 'Fire Energy', quantity: 20 },
    ],
    trainer: [
        { name: 'Professor Oak', quantity: 2 },
        { name: 'Bill', quantity: 4 },
        { name: 'Energy Retrieval', quantity: 2 },
        { name: 'Energy Search', quantity: 2 },
        { name: 'Switch', quantity: 2 },
        { name: 'Gust of Wind', quantity: 2 },
        { name: 'Potion', quantity: 2 },
        { name: 'Computer Search', quantity: 1 },
        { name: 'Item Finder', quantity: 1 },
        { name: 'Pokémon Trader', quantity: 2 },
    ],
}

// electricDeck
// Pokémon (20):
// Raichu - Base Set (x2)
// Pikachu - Base Set (x4)
// Electrode - Base Set (x2)
// Voltorb - Base Set (x3)
// Zapdos - Fossil (x2)
// Magnemite - Base Set (x3)
// Magneton - Base Set (x2)
// Electabuzz - Base Set (x3)
// Trainer Cards (20):
// Professor Oak - Base Set (x2)
// Bill - Base Set (x4)
// Energy Retrieval - Base Set (x2)
// Energy Search - Base Set (x2)
// Switch - Base Set (x2)
// Gust of Wind - Base Set (x2)
// Potion - Base Set (x2)
// Computer Search - Base Set (x1)
// Item Finder - Base Set (x1)
// Pokémon Center - Base Set (x1)
// Energy Cards (20):
// Electric Energy (x20)
export const electricDeck = {
    pokemon: [
        { name: 'Raichu', quantity: 2 },
        { name: 'Pikachu', quantity: 4 },
        { name: 'Electrode', quantity: 2 },
        { name: 'Voltorb', quantity: 3 },
        { name: 'Zapdos', quantity: 2 },
        { name: 'Magnemite', quantity: 3 },
        { name: 'Magneton', quantity: 2 },
        { name: 'Electabuzz', quantity: 3 },
    ],
    energy: [
        { name: 'Electric Energy', quantity: 20 },
    ],
    trainer: [
        { name: 'Professor Oak', quantity: 2 },
        { name: 'Bill', quantity: 4 },
        { name: 'Energy Retrieval', quantity: 2 },
        { name: 'Energy Search', quantity: 2 },
        { name: 'Switch', quantity: 2 },
        { name: 'Gust of Wind', quantity: 2 },
        { name: 'Potion', quantity: 2 },
        { name: 'Computer Search', quantity: 1 },
        { name: 'Item Finder', quantity: 1 },
        { name: 'Pokémon Center', quantity: 1 },
    ],
}

// grassDeck
// Pokémon (20):
// Venusaur - Base Set (x2)
// Ivysaur - Base Set (x3)
// Bulbasaur - Base Set (x4)
// Vileplume - Jungle (x2)
// Gloom - Jungle (x3)
// Oddish - Jungle (x4)
// Scyther - Jungle (x4)
// Trainer Cards (20):
// Brock's Grit - Rocket (x1)
// Professor Oak - Base Set (x2)
// Bill - Base Set (x4)
// Energy Retrieval - Base Set (x2)
// Energy Search - Base Set (x2)
// Switch - Base Set (x2)
// Gust of Wind - Base Set (x2)
// Potion - Base Set (x2)
// Computer Search - Base Set (x1)
// Pokémon Center - Base Set (x1)
// Energy Cards (20):
// Grass Energy (x20)
export const grassDeck = {
    pokemon: [
        { name: 'Venusaur', quantity: 2 },
        { name: 'Ivysaur', quantity: 3 },
        { name: 'Bulbasaur', quantity: 4 },
        { name: 'Vileplume', quantity: 2 },
        { name: 'Gloom', quantity: 3 },
        { name: 'Oddish', quantity: 4 },
        { name: 'Scyther', quantity: 4 },
    ],
    energy: [
        { name: 'Grass Energy', quantity: 20 },
    ],
    trainer: [
        { name: "Brock's Grit", quantity: 1 },
        { name: 'Professor Oak', quantity: 2 },
        { name: 'Bill', quantity: 4 },
        { name: 'Energy Retrieval', quantity: 2 },
        { name: 'Energy Search', quantity: 2 },
        { name: 'Switch', quantity: 2 },
        { name: 'Gust of Wind', quantity: 2 },
        { name: 'Potion', quantity: 2 },
        { name: 'Computer Search', quantity: 1 },
        { name: 'Pokémon Center', quantity: 1 },
    ],
}

// psychicDeck
// Pokémon (20):
// Alakazam - Base Set (x2)
// Kadabra - Base Set (x3)
// Abra - Base Set (x4)
// Gengar - Fossil (x2)
// Gastly - Fossil (x4)
// Haunter - Fossil (x2)
// Mewtwo - Base Set (x2)
// Drowzee - Base Set (x3)
// Hypno - Base Set (x2)
// Trainer Cards (20):
// Professor Oak - Base Set (x2)
// Bill - Base Set (x4)
// Energy Retrieval - Base Set (x2)
// Energy Search - Base Set (x2)
// Switch - Base Set (x2)
// Gust of Wind - Base Set (x2)
// Potion - Base Set (x2)
// Computer Search - Base Set (x1)
// Item Finder - Base Set (x1)
// Pokémon Center - Base Set (x1)
// Energy Cards (20):
// Psychic Energy (x20)
export const psychicDeck = {
    pokemon: [
        { name: 'Alakazam', quantity: 2 },
        { name: 'Kadabra', quantity: 3 },
        { name: 'Abra', quantity: 4 },
        { name: 'Gengar', quantity: 2 },
        { name: 'Gastly', quantity: 4 },
        { name: 'Haunter', quantity: 2 },
        { name: 'Mewtwo', quantity: 2 },
        { name: 'Drowzee', quantity: 3 },
        { name: 'Hypno', quantity: 2 },
    ],
    energy: [
        { name: 'Psychic Energy', quantity: 20 },
    ],
    trainer: [
        { name: 'Professor Oak', quantity: 2 },
        { name: 'Bill', quantity: 4 },
        { name: 'Energy Retrieval', quantity: 2 },
        { name: 'Energy Search', quantity: 2 },
        { name: 'Switch', quantity: 2 },
        { name: 'Gust of Wind', quantity: 2 },
        { name: 'Potion', quantity: 2 },
        { name: 'Computer Search', quantity: 1 },
        { name: 'Item Finder', quantity: 1 },
        { name: 'Pokémon Center', quantity: 1 },
    ],
}

// fightingDeck
// Pokémon (20):
// Machamp - Base Set (x2)  
// Machoke - Base Set (x3)  
// Machop - Base Set (x4)  
// Hitmonchan - Base Set (x4)  
// Hitmonlee - Base Set (x2)  
// Poliwrath - Base Set (x2)  
// Poliwag - Base Set (x3)  
// Kabutops - Fossil (x2)
// Trainer Cards (20):
// Professor Oak - Base Set (x2)
// Bill - Base Set (x4)
// Energy Retrieval - Base Set (x2)
// Energy Search - Base Set (x2)
// Switch - Base Set (x2)
// Gust of Wind - Base Set (x2)
// Potion - Base Set (x2)
// Computer Search - Base Set (x1)
// Item Finder - Base Set (x1)
// Pokémon Center - Base Set (x1)
// Energy Cards (20):
// Fighting Energy (x20)
export const fightingDeck = {
    pokemon: [
        { name: 'Machamp', quantity: 2 },
        { name: 'Machoke', quantity: 3 },
        { name: 'Machop', quantity: 4 },
        { name: 'Hitmonchan', quantity: 4 },
        { name: 'Hitmonlee', quantity: 2 },
        { name: 'Poliwrath', quantity: 2 },
        { name: 'Poliwag', quantity: 3 },
        { name: 'Kabutops', quantity: 2 },
    ],
    energy: [
        { name: 'Fighting Energy', quantity: 20 },
    ],
    trainer: [
        { name: 'Professor Oak', quantity: 2 },
        { name: 'Bill', quantity: 4 },
        { name: 'Energy Retrieval', quantity: 2 },
        { name: 'Energy Search', quantity: 2 },
        { name: 'Switch', quantity: 2 },
        { name: 'Gust of Wind', quantity: 2 },
        { name: 'Potion', quantity: 2 },
        { name: 'Computer Search', quantity: 1 },
        { name: 'Item Finder', quantity: 1 },
        { name: 'Pokémon Center', quantity: 1 },
    ],
}

// Raindance Deck
// Core Pokémon (20):
// Blastoise (Base Set) - (x3)
// Squirtle (Base Set) - (x4)
// Wartortle (Base Set) - (x2)
// Gyarados (Fossil) - (x2)
// Lapras (Base Set) - (x2)
// Articuno (Fossil) - (x2)
// Seel (Base Set) - (x3)
// Dewgong (Base Set) - (x2)
// Trainer Cards (20):
// Professor Oak (Base Set) - (x2)
// Bill (Base Set) - (x4)
// Energy Retrieval (Base Set) - (x2)
// Energy Search (Base Set) - (x2)
// Super Energy Retrieval (Base Set) - (x2)
// Computer Search (Base Set) - (x1)
// Pokémon Breeder (Base Set) - (x2)
// Gust of Wind (Base Set) - (x2)
// Potion (Base Set) - (x2)
// Energy Cards (20):
// Water Energy (x20)
export const raindanceDeck = {
    pokemon: [
        { name: 'Blastoise', quantity: 3 },
        { name: 'Squirtle', quantity: 4 },
        { name: 'Wartortle', quantity: 2 },
        { name: 'Gyarados', quantity: 2 },
        { name: 'Lapras', quantity: 2 },
        { name: 'Articuno', quantity: 2 },
        { name: 'Seel', quantity: 3 },
        { name: 'Dewgong', quantity: 2 },
    ],
    energy: [
        { name: 'Water Energy', quantity: 20 },
    ],
    trainer: [
        { name: 'Professor Oak', quantity: 2 },
        { name: 'Bill', quantity: 4 },
        { name: 'Energy Retrieval', quantity: 2 },
        { name: 'Energy Search', quantity: 2 },
        { name: 'Super Energy Retrieval', quantity: 2 },
        { name: 'Computer Search', quantity: 1 },
        { name: 'Pokémon Breeder', quantity: 2 },
        { name: 'Gust of Wind', quantity: 2 },
        { name: 'Potion', quantity: 2 },
    ],
}

// Haymaker Deck
// Core Pokémon (20):
// Hitmonchan (Base Set) - (x4)
// Hitmonlee (Base Set) - (x2)
// Scyther (Jungle) - (x3)
// Jigglypuff (Base Set) - (x3)
// Wigglytuff (Base Set) - (x2)
// Electabuzz (Base Set) - (x3)
// Mewtwo (Base Set) - (x2)
// Poliwag (Base Set) - (x1)
// Trainer Cards (20):
// Professor Oak (Base Set) - (x2)
// Bill (Base Set) - (x4)
// Energy Retrieval (Base Set) - (x2)
// Energy Search (Base Set) - (x2)
// Switch (Base Set) - (x2)
// Gust of Wind (Base Set) - (x2)
// Potion (Base Set) - (x2)
// Computer Search (Base Set) - (x1)
// Card Doppler (Base Set) - (x1)
// Item Finder (Base Set) - (x1)
// Energy Cards (20):
// Fighting Energy (x15)
// Basic Energy (x5) - (such as Colorless Energy)
export const haymakerDeck = {
    pokemon: [
        { name: 'Hitmonchan', quantity: 4 },
        { name: 'Hitmonlee', quantity: 2 },
        { name: 'Scyther', quantity: 3 },
        { name: 'Jigglypuff', quantity: 3 },
        { name: 'Wigglytuff', quantity: 2 },
        { name: 'Electabuzz', quantity: 3 },
        { name: 'Mewtwo', quantity: 2 },
        { name: 'Poliwag', quantity: 1 },
    ],
    energy: [
        { name: 'Fighting Energy', quantity: 15 },
        { name: 'Basic Energy', quantity: 5 },
    ],
    trainer: [
        { name: 'Professor Oak', quantity: 2 },
        { name: 'Bill', quantity: 4 },
        { name: 'Energy Retrieval', quantity: 2 },
        { name: 'Energy Search', quantity: 2 },
        { name: 'Switch', quantity: 2 },
        { name: 'Gust of Wind', quantity: 2 },
        { name: 'Potion', quantity: 2 },
        { name: 'Computer Search', quantity: 1 },
        { name: 'Card Doppler', quantity: 1 },
        { name: 'Item Finder', quantity: 1 },
    ],
}

export const preBuiltDecks = [
    { name: 'Water Deck', deck: waterDeck },
    { name: 'Fire Deck', deck: fireDeck },
    { name: 'Electric Deck', deck: electricDeck },
    { name: 'Grass Deck', deck: grassDeck },
    { name: 'Psychic Deck', deck: psychicDeck },
    { name: 'Fighting Deck', deck: fightingDeck },
    { name: 'Raindance Deck', deck: raindanceDeck },
    { name: 'Haymaker Deck', deck: haymakerDeck },
]