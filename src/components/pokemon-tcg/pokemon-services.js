const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL

export async function buyBoosterPack(boosterPack) {
    try {
        const res = await fetch(`${BACKEND_URL}/booster-packs/${boosterPack}/buy-pack`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        const json = await res.json()
        console.log(json)
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