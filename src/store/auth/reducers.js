export const login = (state) => {
    state.isAuthenticated = true
}

export const logout = (state) => {
    state.isAuthenticated = false
}