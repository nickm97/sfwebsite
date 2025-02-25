<template>
  <div class="flex flex-col items-center w-full py-4">
    <!-- Desktop: Grid Layout -->
    <div class="hidden xl:flex gap-6 items-center justify-center w-full px-6 py-12">
      <a
        v-for="(link, index) in socialLinks"
        :key="index"
        :href="link.url"
        target="_blank"
        class="relative w-full max-w-[200px] sm:max-w-[300px]"
      >
        <!-- Afbeelding -->
        <nuxt-img :src="link.image" alt="Sanneloes Fotografie" class="object-cover w-full h-auto" />
        
        <!-- Overlay met tekst -->
        <div class="absolute inset-0 flex items-center justify-center flex-col">
          <h1 class="uppercase font-playFair text-2xl text-white z-10">{{ link.text }}</h1>
        </div>
        <div class="absolute inset-0 bg-black/50"></div>
      </a>
    </div>

    <!-- Mobile: Overflow Slider -->
    <div class="xl:hidden flex flex-col items-center relative w-full overflow-hidden">
      <!-- Container voor afbeeldingen met horizontale scroll -->
      <div class="flex w-full gap-4 overflow-x-auto scroll-smooth px-4">
        <a
          v-for="(link, index) in socialLinks"
          :key="index"
          :href="link.url"
          target="_blank"
          class="relative shrink-0 w-[200px] sm:w-[300px]"
        >
          <!-- Afbeelding -->
          <nuxt-img :src="link.image" alt="Sanneloes Fotografie" class="object-cover w-full h-auto" />
          
          <!-- Overlay met tekst -->
          <div class="absolute inset-0 flex items-center justify-center flex-col">
            <h1 class="uppercase font-playFair text-2xl text-white z-10">{{ link.text }}</h1>
          </div>
          <div class="absolute inset-0 bg-black/50"></div>
        </a>
      </div>

      <!-- Navigatie Knoppen -->
      <div class="hidden sm:absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
        <button @click="prevImage" class="bg-black text-white p-2 rounded-full">◀</button>
        <button @click="nextImage" class="bg-black text-white p-2 rounded-full">▶</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const socialLinks = ref([
  { url: "https://www.instagram.com/sanneloesfotografie", image: "/assets/pictures/about-page/lief.webp", text: "Lief" },
  { url: "https://www.instagram.com/sanneloesfotografie", image: "/assets/pictures/about-page/creatief.webp", text: "Creatief" },
  { url: "https://www.instagram.com/sanneloesfotografie", image: "/assets/pictures/about-page/zorgzaam.webp", text: "Zorgzaam" },
  { url: "https://www.instagram.com/sanneloesfotografie", image: "/assets/pictures/about-page/harde-werker.webp", text: "Reislustig" },
  { url: "https://www.instagram.com/sanneloesfotografie", image: "/assets/pictures/about-page/reislustig.webp", text: "Doorzetter" },
  { url: "https://www.instagram.com/sanneloesfotografie", image: "/assets/pictures/about-page/open.webp", text: "Open" },
  { url: "https://www.instagram.com/sanneloesfotografie", image: "/assets/pictures/about-page/enthousiast.webp", text: "Enthousiast" }
])

const currentIndex = ref(3)

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % socialLinks.value.length
  updateScrollPosition()
}

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + socialLinks.value.length) % socialLinks.value.length
  updateScrollPosition()
}

// Scroll de actieve afbeelding naar het midden
const updateScrollPosition = () => {
  const container = document.querySelector('.overflow-x-auto')
  const items = container.children
  const targetItem = items[currentIndex.value]
  const targetPosition = targetItem.offsetLeft - container.offsetWidth / 2 + targetItem.offsetWidth / 2
  container.scrollTo({
    left: targetPosition,
    behavior: 'smooth'
  })
}

// Zorg ervoor dat we beginnen met de eerste afbeelding in het midden
onMounted(() => {
  updateScrollPosition()
})
</script>

<style scoped>

</style>
