export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://test.rasberry-berry.com/'
    : 'http://localhost:8000'
