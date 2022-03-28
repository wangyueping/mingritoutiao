const key = 'oldwang'

const setToken = (token) => {
    localStorage.setItem(key, token)
}

const getToken = () => {
    return localStorage.getItem(key)
}

const removeToken = () => {
    localStorage.removeItem(key)
}

export { setToken, getToken, removeToken }