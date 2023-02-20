export const state = () => ({
    authenticated: false,
    token: null
  })
  
  export const mutations = {
    SET_AUTHENTICATED (state, authenticated) {
      state.authenticated = authenticated
    },
    
    setToken (state, token) {
      state.token = token
    }
  }