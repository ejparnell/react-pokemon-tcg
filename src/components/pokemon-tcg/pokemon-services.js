const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL

export async function getBoosterPack(boosterPack) {
    try {
        console.log('getBoosterPack', boosterPack)
        const res = await fetch(`${BACKEND_URL}/pokemon/${boosterPack}`)
        const json = await res.json()
        return json
    } catch (err) {
        throw new Error(err)
    }
}