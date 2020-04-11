export default {
  passpost (auth = 'users') {
    return {
      grant_type: 'password',
      client_id: 2,
      client_secret: 'HwcU4niGOT6IYRgOMnFXM4CGPlnQwIbRZW5SgBhU',
      provider: auth
    }
  }
}
