import { HomePage } from '../../../shared/HomePage'

const buyDecksHomeData = [{
    header: 'Water Deck',
    text: 'Buy a Water Deck.',
    link: '/buy/decks/Water Deck',
    image: '../../../../../public/water-deck.png'
}, {
    header: 'Fire Deck',
    text: 'Buy a Fire Deck.',
    link: '/buy/decks/Fire Deck',
    image: '../../../../../public/fire-deck.png'
}, {
    header: 'Grass Deck',
    text: 'Buy a Grass Deck.',
    link: '/buy/decks/Grass Deck',
    image: '../../../../../public/grass-deck.png'
}, {
    header: 'Electric Deck',
    text: 'Buy an Electric Deck.',
    link: '/buy/decks/Electric Deck',
    image: '../../../../../public/lighting-deck.png'
}, {
    header: 'Psychic Deck',
    text: 'Buy a Psychic Deck.',
    link: '/buy/decks/Psychic Deck',
    image: '../../../../../public/psychic-deck.png'
}, {
    header: 'Fighting Deck',
    text: 'Buy a Fighting Deck.',
    link: '/buy/decks/Fighting Deck',
    image: '../../../../../public/ground-deck.png'
}]

export function BuyDecksHome() {
    return (
        <HomePage data={buyDecksHomeData} />
    )
}