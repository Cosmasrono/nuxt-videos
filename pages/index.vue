<template>
  <div>
    <h1>YouTube Videos</h1>
    <div v-for="video in videos" :key="video.id" class="flex flex-row ">
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
      const url = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=desp&maxResults=10&key=6e9f2c50dbmsh389990409a785fcp165e1cjsnd1ba82894207';

      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '6e9f2c50dbmsh389990409a785fcp165e1cjsnd1ba82894207',
          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
      }
      try {
        const response = await fetch(url, options)
        const data = await response.json()
        const videos = []
        for (let item of data[1]) {
          videos.push({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description
          })
        }
        this.videos = videos
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
<style>
  .video-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
  }

  .video {
    width: 640px;
    height: 360px;
    border: 1px solid #ccc;
    padding: 1rem;
    box-sizing: border-box;
  }

  .video h2 {
    margin: 0 0 0.5rem 0;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .video p {
    margin: 0 0 1rem 0;
    font-size: 1rem;
  }

  @media screen and (max-width: 640px) {
    .video {
      width: 100%;
    }
  }
</style>
