const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL

export async function buyBoosterPack(boosterPack) {
    try {
        const res = await fetch(`${BACKEND_URL}/booster-packs/${boosterPack}/buy-pack`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        const json = await res.json()
        return json
    } catch (err) {
        throw new Error(err)
    }
}

export async function getBinder() {
    try {
        const res = await fetch(`${BACKEND_URL}/binders`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        const json = await res.json()
        return json
    } catch (err) {
        throw new Error(err)
    }
}

export async function getDeckPokemon(names) {
    try {
        const res = await fetch(`${BACKEND_URL}/pokemon/deck-pokemon`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ names })
        })
        const json = await res.json()
        return json
    } catch(err) {
        throw new Error(err)
    }
}
// restructure
export async function fetchPreBuiltDeck(name) {
    try {
        const res = await fetch(`${BACKEND_URL}/decks/${name}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        })
        const json = await res.json()
        return json
    } catch (error) {
        throw new Error(error)
    }
}

export async function buyPreBuiltDecks(deckName, cards) {
    try {
        const res = await fetch(`${BACKEND_URL}/decks/buy`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ deckName: deckName, cards })
        })
        const json = await res.json()
        return json
    } catch(err) {
        throw new Error(err)
    }
}

export async function fetchBinder() {
    try {
        const res = await fetch(`${BACKEND_URL}/binders`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        const json = await res.json()
        return json
    } catch (err) {
        throw new Error(err)
    }
}