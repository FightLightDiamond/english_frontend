export default {
  passpost (auth = 'users') {
    return {
      grant_type: 'password',
      client_id: 2,
      client_secret: 'DFF6f2IX9TOhZ2vqH73xYQlxS92ogMpxPTY1fDQx',
      provider: auth
    }
  }
}
