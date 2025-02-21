<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-12 py-4 sm:py-12">
    <nuxt-img
      v-for="(image, index) in images"
      :key="index"
      :src="image.url"
      :alt="'Sanneloes Fotografie Portfolio'"
      width="100%" 
      height="900"
      class="rounded-md shadow-lg object-cover w-full" 
      placeholder
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { url: '/assets/pictures/portfolio-page/1.webp' },
        { url: '/assets/pictures/portfolio-page/2.webp' },
        { url: '/assets/pictures/portfolio-page/3.webp' },
        { url: '/assets/pictures/portfolio-page/4.webp' },
        { url: '/assets/pictures/portfolio-page/5.webp' },
        { url: '/assets/pictures/portfolio-page/6.webp' },
        { url: '/assets/pictures/portfolio-page/7.webp' },
        { url: '/assets/pictures/portfolio-page/8.webp' },
        { url: '/assets/pictures/portfolio-page/9.webp' },
        { url: '/assets/pictures/portfolio-page/10.webp' },
        { url: '/assets/pictures/portfolio-page/11.webp' },
        { url: '/assets/pictures/portfolio-page/12.webp' },
        { url: '/assets/pictures/portfolio-page/13.webp' },
        { url: '/assets/pictures/portfolio-page/14.webp' },
        { url: '/assets/pictures/portfolio-page/15.webp' },
        { url: '/assets/pictures/portfolio-page/16.webp' },
        { url: '/assets/pictures/portfolio-page/17.webp' },
        { url: '/assets/pictures/portfolio-page/18.webp' },
        { url: '/assets/pictures/portfolio-page/19.webp' },
        { url: '/assets/pictures/portfolio-page/20.webp' },
        { url: '/assets/pictures/portfolio-page/21.webp' },
        { url: '/assets/pictures/portfolio-page/22.webp' },
        { url: '/assets/pictures/portfolio-page/23.webp' },
        { url: '/assets/pictures/portfolio-page/24.webp' },
        { url: '/assets/pictures/portfolio-page/25.webp' },
        { url: '/assets/pictures/portfolio-page/26.webp' },
        { url: '/assets/pictures/portfolio-page/27.webp' },
        { url: '/assets/pictures/portfolio-page/28.webp' },
        { url: '/assets/pictures/portfolio-page/29.webp' },
        { url: '/assets/pictures/portfolio-page/30.webp' },
        { url: '/assets/pictures/portfolio-page/31.webp' },
        { url: '/assets/pictures/portfolio-page/32.webp' },
        { url: '/assets/pictures/portfolio-page/33.webp' },
        { url: '/assets/pictures/portfolio-page/34.webp' },
        { url: '/assets/pictures/portfolio-page/35.webp' },
        { url: '/assets/pictures/portfolio-page/36.webp' },
        { url: '/assets/pictures/portfolio-page/37.webp' },
        { url: '/assets/pictures/portfolio-page/38.webp' },
        { url: '/assets/pictures/portfolio-page/39.webp' },
        { url: '/assets/pictures/portfolio-page/40.webp' },
        { url: '/assets/pictures/portfolio-page/41.webp' },
        { url: '/assets/pictures/portfolio-page/42.webp' },
        { url: '/assets/pictures/portfolio-page/43.webp' },
        { url: '/assets/pictures/portfolio-page/44.webp' },
        { url: '/assets/pictures/portfolio-page/45.webp' },
        { url: '/assets/pictures/portfolio-page/46.webp' },
        { url: '/assets/pictures/portfolio-page/47.webp' },
        { url: '/assets/pictures/portfolio-page/48.webp' },
        { url: '/assets/pictures/portfolio-page/49.webp' },
        { url: '/assets/pictures/portfolio-page/50.webp' },
        { url: '/assets/pictures/portfolio-page/51.webp' },
        { url: '/assets/pictures/portfolio-page/52.webp' },
        { url: '/assets/pictures/portfolio-page/53.webp' },
        { url: '/assets/pictures/portfolio-page/54.webp' },
        { url: '/assets/pictures/portfolio-page/55.webp' },
        { url: '/assets/pictures/portfolio-page/56.webp' },
        { url: '/assets/pictures/portfolio-page/57.webp' },
        { url: '/assets/pictures/portfolio-page/58.webp' },
        { url: '/assets/pictures/portfolio-page/59.webp' },
        { url: '/assets/pictures/portfolio-page/60.webp' }
        // Voeg hier al je afbeeldingen toe
      ]
    }
  }
}
</script>
