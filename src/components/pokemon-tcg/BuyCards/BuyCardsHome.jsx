import { HomePage } from '../../shared/HomePage'

const buyCardsHomeData = [{
    header: 'Buy Decks',
    text: 'Buy Prebuilt Decks.',
    link: '/buy/decks',
    image: ''
}, {
    header: 'Buy Booster Packs',
    text: 'Buy Booster Packs.',
    link: '/buy/booster-packs',
    image: ''
}]

export function BuyCardsHome() {
    return (
        <HomePage data={buyCardsHomeData} />
    )
}