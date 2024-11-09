const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL

export function getUser() {
    const token = localStorage.getItem('token')
    if (!token) return null
    const user = JSON.parse(atob(token.split('.')[1]))
    return user
}

export async function signUp(formData) {
    try {
        const res = await fetch(`${BACKEND_URL}/users/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
        const json = await res.json()
        if (json.error) throw new Error(json.error)
        localStorage.setItem('token', json.token)
        return json
    } catch (err) {
        throw new Error(err)
    }
}

export async function signIn(user) {
    try {
        const res = await fetch(`${BACKEND_URL}/users/signin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        })
        const json = await res.json()
        if (json.error) throw new Error(json.error)
        if (json.token) {
            localStorage.setItem('token', json.token)
            const user = JSON.parse(atob(json.token.split('.')[1]))
            return user
        }
    } catch (err) {
        throw new Error(err)
    }
}

export function signOut() {
    localStorage.removeItem('token')
}
