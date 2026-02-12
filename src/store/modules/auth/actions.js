
let logoutTimer;

export default {
    login(context, payload) {
      // Simulated login (replace with real API)
      const fakeToken = 'abc123'
      const expiresIn = 60 * 60 * 1000 // 1 hour

      const expirationDate = new Date().getTime() + expiresIn

      localStorage.setItem('token', fakeToken)
      localStorage.setItem('userId', payload.userId)
      localStorage.setItem('tokenExpiration', expirationDate)

      context.commit('setUser', {
        token: fakeToken,
        userId: payload.userId
      })

      logoutTimer = setTimeout(() => {
        context.dispatch('autoLogout')
      }, expiresIn)
    },

    logout(context) {
      context.commit('setUser', {
        token: null,
        userId: null
      })

      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      localStorage.removeItem('tokenExpiration')

      if (logoutTimer) {
        clearTimeout(logoutTimer)
      }
    },

    autoLogin(context) {
      const token = localStorage.getItem('token')
      const userId = localStorage.getItem('userId')
      const expiration = localStorage.getItem('tokenExpiration')

      if (!token || !expiration) return

      const expiresIn = +expiration - new Date().getTime()

      if (expiresIn < 0) return

      context.commit('setUser', {
        token,
        userId
      })

      logoutTimer = setTimeout(() => {
        context.dispatch('autoLogout')
      }, expiresIn)
    },

    autoLogout(context) {
      context.dispatch('logout')
    }
  }