const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL

export async function getBoosterPack(boosterPack, userId) {
    try {
        console.log('getBoosterPack', boosterPack)
        const res = await fetch(`${BACKEND_URL}/pokemon/${userId}/${boosterPack}`)
        const json = await res.json()
        return json
    } catch (err) {
        throw new Error(err)
    }
}

export async function getBinder(userId) {
    try {
        const res = await fetch(`${BACKEND_URL}/binders/${userId}`)
        const json = await res.json()
        return json
    } catch (err) {
        throw new Error(err)
    }
}