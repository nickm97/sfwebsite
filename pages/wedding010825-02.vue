<template>
  <section class="flex flex-col items-center justify-center px-6 bg-buttonColor">
    <div class="w-[50%] flex items-center justify-center">
      <!-- canva 800x300 -->
      <nuxt-img
        src="/assets/pictures/wedding-page/wedding-010825-02/cynthia&tom.png"
        alt="Bruiloft"
        class="h-[100px] flex items-center justify-center"
      />
    </div>
  </section>

    <section class="py-8 px-4">
      <h1 class="text-3xl font-standard text-center mb-8">TOM & CYNTHIA</h1>

       <!-- Masonry Grid -->
      <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        <nuxt-img
          v-for="(photo, index) in photos"
          :key="index"
          :src="`/assets/wedding-tom-cynthia/${photo}`"
          :alt="`Foto ${index + 1}`"
          class="w-full break-inside-avoid shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
</template>

<script>
import photoList from '~/assets/photoList-wedding-tom-cynthia.json';

export default {
  data() {
    return {
      photos: photoList, // Foto's laden vanuit JSON-bestand
    };
  },
};
</script>
