<template>
    <section class="py-8 px-4">
      <h1 class="text-3xl font-standard text-center mb-8">SERENA & DAVID</h1>

       <!-- Masonry Grid -->
      <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        <nuxt-img
          v-for="(photo, index) in photos"
          :key="index"
          :src="`/assets/wedding-serina-david/${photo}`"
          :alt="`Foto ${index + 1}`"
          class="w-full break-inside-avoid shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
</template>

<script>
import photoList from '~/assets/photoList-wedding-serina-david.json';

export default {
  data() {
    return {
      photos: photoList, // Foto's laden vanuit JSON-bestand
    };
  },
};
</script>
