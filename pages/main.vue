<template>
  <div>
    <h1>YouTube Videos</h1>
    <div v-for="video in videos" :key="video.id">
      <h2>{{ video.title }}</h2>
      <p>{{ video.description }}</p>
      <iframe :src="`https://www.youtube.com/embed/${video.id}`" width="640" height="360" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: []
    }
  },
  mounted() {
    this.fetchVideos()
  },
  methods: {
    async fetchVideos() {
      const url = 'https://youtube138.p.rapidapi.com/auto-complete/?q=desp&hl=en&gl=US'
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '6e9f2c50dbmsh389990409a785fcp165e1cjsnd1ba82894207',
          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
      }
      try {
        const response = await fetch(url, options)
        const result = await response.json()
        console.log(result)

        const videos = result[1].map(item => ({
          id: item[3],
          title: item[0],
          description: item[2]
        }))
        this.videos = videos
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style>
/* CSS styles go here */
</style>
