const BOOSTER_CARD_COUNT_MAP = {
    common: 4,
    uncommon: 4,
    rare: 1,
    energy: 1,
}

export function createBoosterPack(data, energyData) {
    const holoChance = Math.round(Math.random() * 10)

    const commonCards = data.filter(card => card.rarity === 'Common')
    const uncommonCards = data.filter(card => card.rarity === 'Uncommon')
    const rareCards = data.filter(card => card.rarity === 'Rare')
    const rareHoloCards = data.filter(card => card.rarity === 'Rare Holo')

    const boosterPack = []

    for (let i = 0; i < BOOSTER_CARD_COUNT_MAP.common; i++) {
        const randomIndex = Math.floor(Math.random() * commonCards.length)
        boosterPack.push(commonCards[randomIndex])
    }
    for (let i = 0; i < BOOSTER_CARD_COUNT_MAP.uncommon; i++) {
        if (holoChance < 1 && i === 3) {
            const randomIndex = Math.floor(Math.random() * rareHoloCards.length)
            boosterPack.push(rareHoloCards[randomIndex])
        } else {
            const randomIndex = Math.floor(Math.random() * uncommonCards.length)
            boosterPack.push(uncommonCards[randomIndex])
        }
    }
    for (let i = 0; i < BOOSTER_CARD_COUNT_MAP.rare; i++) {
        const randomIndex = Math.floor(Math.random() * rareCards.length)
        boosterPack.push(rareCards[randomIndex])
    }
    for (let i = 0; i < BOOSTER_CARD_COUNT_MAP.energy; i++) {
        const randomIndex = Math.floor(Math.random() * energyData.length)
        boosterPack.push(energyData[randomIndex])
    }

    return boosterPack
}