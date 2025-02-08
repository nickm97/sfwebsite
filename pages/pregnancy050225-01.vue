<template>
  <section class="flex flex-col items-center justify-center px-6 bg-buttonColor">
    <div class="w-[50%] flex items-center justify-center">
      <!-- canva 800x300 160 lettertype -->
      <nuxt-img
        src="/assets/pictures/pregnancy-page/pregnancy-050225-01/daisy.webp"
        alt="Sanneloes Fotografie Zwangerschap"
        class="h-[120px] flex items-center justify-center"
      />
    </div>
  </section>

  <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 py-4 space-y-4 px-4">
    <div v-for="(photo, index) in photos" :key="index">
      <!-- Gebruik nu de nuxt-img component voor lazy loading -->
      <nuxt-img :src="photo.url" :alt="photo.alt" class="w-full break-inside-avoid shadow-lg hover:scale-105 transition-transform duration-300" />
    </div>
  </div>

</template>

<!-- <script>
import photoList from '~/assets/photoList-wedding-tom-cynthia.json';

export default {
  data() {
    return {
      photos: photoList, // Foto's laden vanuit JSON-bestand
    };
  },
};
</script> -->

<script>
export default {
  data() {
    return {
      photos: [ 
      { url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_08772-2.webp', alt: 'SF_08772-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_08781-2.webp', alt: 'SF_08781-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09098.webp', alt: 'SF_09098.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09105.webp', alt: 'SF_09105.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09140.webp', alt: 'SF_09140.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09158.webp', alt: 'SF_09158.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09165.webp', alt: 'SF_09165.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09166.webp', alt: 'SF_09166.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09172.webp', alt: 'SF_09172.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09176.webp', alt: 'SF_09176.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09269.webp', alt: 'SF_09269.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09283.webp', alt: 'SF_09283.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09311.webp', alt: 'SF_09311.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09338.webp', alt: 'SF_09338.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09372.webp', alt: 'SF_09372.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09566-2.webp', alt: 'SF_09566-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09635.webp', alt: 'SF_09635.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09938.webp', alt: 'SF_09938.webp' }
] 
    };
  }
};
</script>
