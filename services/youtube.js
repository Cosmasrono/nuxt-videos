import { createApi } from '@nuxtjs/axios'

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY

const api = createApi({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  headers: {
    common: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  },
  params: {
    key: 'AIzaSyCWDAc-lAyfe0u0o5GGYewQX1Fq8yt8m5w' 
  }
})

export const searchVideos = async (query, maxResults = 10) => {
  const { data } = await api.get('/search', {
    params: {
      part: 'snippet',
      q: query,
      type: 'video',
      maxResults
    }
  })
  return data.items
}
