<template>
  <div class="relative">
      <section class="flex flex-col items-center justify-center px-6 bg-buttonColor">
          <div class="w-[50%] flex items-center justify-center">
          <!-- canva 800x300 -->
          <nuxt-img
              src="/assets/pictures/wedding-page/wedding-010825-01/david&serena.webp"
              alt="Bruiloft"
              class="h-[100px] flex items-center justify-center"
          />
          </div>
      </section>
    <!-- Loader -->
    <div v-if="isLoading" class="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <img src="/assets/pictures/logo_klein.webp" alt="Logo" class="w-[300px] h-[225px] animate-pulse" />
      <p class="text-lg mt-4 font-standard font-light animate-pulse text-center">De gallerij wordt voor u opgehaald.<br>Een ongenblik geduld alstublieft.</p>
    </div>

    <!-- Foto Galerij -->
    <div class="flex flex-row gap-4 py-4 space-y-4 px-4">
      <div v-for="(photo, index) in photos1" :key="index" class="flex flex-col">
        <nuxt-img 
          :src="photo.url" 
          :alt="photo.alt" 
          loading="lazy"
          class="w-full break-inside-avoid shadow-lg hover:scale-105 transition-transform duration-300"
          @load="imageLoaded"
        />
      </div>
      <div v-for="(photo, index) in photos2" :key="index" class="flex flex-col">
        <nuxt-img 
          :src="photo.url" 
          :alt="photo.alt" 
          loading="lazy"
          class="w-full break-inside-avoid shadow-lg hover:scale-105 transition-transform duration-300"
          @load="imageLoaded"
        />
      </div>
      <div v-for="(photo, index) in photos3" :key="index" class="flex flex-col">
        <nuxt-img 
          :src="photo.url" 
          :alt="photo.alt" 
          loading="lazy"
          class="w-full break-inside-avoid shadow-lg hover:scale-105 transition-transform duration-300"
          @load="imageLoaded"
        />
      </div>
      <div v-for="(photo, index) in photos4" :key="index" class="flex flex-col">
        <nuxt-img 
          :src="photo.url" 
          :alt="photo.alt" 
          loading="lazy"
          class="w-full break-inside-avoid shadow-lg hover:scale-105 transition-transform duration-300"
          @load="imageLoaded"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Data
const photos1 = ref([
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07713.webp', alt: 'SF_07713.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07714.webp', alt: 'SF_07714.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07716.webp', alt: 'SF_07716.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07946-2.webp', alt: 'SF_07946-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07962-2.webp', alt: 'SF_07962-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07978-2.webp', alt: 'SF_07978-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07990-2.webp', alt: 'SF_07990-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08016-2.webp', alt: 'SF_08016-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08020-2.webp', alt: 'SF_08020-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08060.webp', alt: 'SF_08060.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08082.webp', alt: 'SF_08082.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08099.webp', alt: 'SF_08099.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08110.webp', alt: 'SF_08110.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08111.webp', alt: 'SF_08111.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08114.webp', alt: 'SF_08114.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08115.webp', alt: 'SF_08115.webp' },
])
const photos2 = ref([
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08343.webp', alt: 'SF_08343.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08348.webp', alt: 'SF_08348.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08356.webp', alt: 'SF_08356.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08411.webp', alt: 'SF_08411.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08414.webp', alt: 'SF_08414.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08417.webp', alt: 'SF_08417.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08440.webp', alt: 'SF_08440.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08442.webp', alt: 'SF_08442.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08450-2.webp', alt: 'SF_08450-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08450.webp', alt: 'SF_08450.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08454.webp', alt: 'SF_08454.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08456.webp', alt: 'SF_08456.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08458.webp', alt: 'SF_08458.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08460.webp', alt: 'SF_08460.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08463.webp', alt: 'SF_08463.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08468.webp', alt: 'SF_08468.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08471-2.webp', alt: 'SF_08471-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08479-2.webp', alt: 'SF_08479-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08483-2.webp', alt: 'SF_08483-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08486-2.webp', alt: 'SF_08486-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08495-2.webp', alt: 'SF_08495-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08496-2.webp', alt: 'SF_08496-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08503-2.webp', alt: 'SF_08503-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08509-2.webp', alt: 'SF_08509-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08510-2.webp', alt: 'SF_08510-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08512-2.webp', alt: 'SF_08512-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08517.webp', alt: 'SF_08517.webp' },
])
const photos3 = ref([
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07713.webp', alt: 'SF_07713.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07714.webp', alt: 'SF_07714.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07716.webp', alt: 'SF_07716.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07946-2.webp', alt: 'SF_07946-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07962-2.webp', alt: 'SF_07962-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07978-2.webp', alt: 'SF_07978-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07990-2.webp', alt: 'SF_07990-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08016-2.webp', alt: 'SF_08016-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08517.webp', alt: 'SF_08517.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08520.webp', alt: 'SF_08520.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08522.webp', alt: 'SF_08522.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08530-2.webp', alt: 'SF_08530-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08530.webp', alt: 'SF_08530.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08532.webp', alt: 'SF_08532.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08537.webp', alt: 'SF_08537.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08540.webp', alt: 'SF_08540.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08547.webp', alt: 'SF_08547.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08552.webp', alt: 'SF_08552.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08557.webp', alt: 'SF_08557.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08563.webp', alt: 'SF_08563.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08564.webp', alt: 'SF_08564.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08567.webp', alt: 'SF_08567.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08573.webp', alt: 'SF_08573.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08575.webp', alt: 'SF_08575.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08578.webp', alt: 'SF_08578.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08583.webp', alt: 'SF_08583.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08586.webp', alt: 'SF_08586.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08589.webp', alt: 'SF_08589.webp' }
])
const photos4 = ref([
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07713.webp', alt: 'SF_07713.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07714.webp', alt: 'SF_07714.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07716.webp', alt: 'SF_07716.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07946-2.webp', alt: 'SF_07946-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07962-2.webp', alt: 'SF_07962-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07978-2.webp', alt: 'SF_07978-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07990-2.webp', alt: 'SF_07990-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08016-2.webp', alt: 'SF_08016-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08020-2.webp', alt: 'SF_08020-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08060.webp', alt: 'SF_08060.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08082.webp', alt: 'SF_08082.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08099.webp', alt: 'SF_08099.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08110.webp', alt: 'SF_08110.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08111.webp', alt: 'SF_08111.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08114.webp', alt: 'SF_08114.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08115.webp', alt: 'SF_08115.webp' },
])





</script>
