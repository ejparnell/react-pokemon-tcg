import { HomePage } from '../../shared/HomePage'

const buyCardsHomeData = [{
    header: 'Buy Deck',
    text: 'Buy Prebuilt Decks.',
    link: '/buy/decks',
    image: ''
}, {
    header: 'Buy Booster Packs',
    text: 'Buy Booster Packs.',
    link: '/buy-booster-packs',
    image: ''
}, {
    header: 'Buy Individual Cards',
    text: 'Buy Individual Cards.',
    link: '/buy-individual-cards',
    image: ''
}]

export function BuyCardsHome() {
    return (
        <HomePage data={buyCardsHomeData} />
    )
}