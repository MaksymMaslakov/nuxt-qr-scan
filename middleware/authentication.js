export default function ({ store, redirect, route }) {
  // Get jwt from localStorage
  const jwt = localStorage.getItem('jwt')

  // Check jwt data and redirect on login if not exist
  if (jwt) {
    store.commit('auth/LOGIN_SUCCESS', jwt)
  } else if (route.name !== 'login') {
    redirect({ path: '/login' })
  }
}
