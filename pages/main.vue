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
      videos: [5]
   

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
        
       
        this.videos = result;
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
<style>
 
  .flex {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .video {
    border: 1px solid #ccc;
    padding: 1rem;
    box-sizing: border-box;
    width: 100%;
  }

  .video h2 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .video p {
    margin: 0;
    font-size: 1rem;
  }

  .video iframe {
    width: 100%;
    height: 360px;

  }
</style>
 

