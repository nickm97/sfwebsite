<template>
    <div class="flex flex-col items-center w-full py-4">
      <!-- Desktop: Grid Layout -->
      <div class="hidden xl:flex gap-6 items-center justify-center w-full">
        <a v-for="(link, index) in socialLinks" :key="index" :href="link.url" target="_blank">
          <nuxt-img :src="link.image" alt="Sanneloes Fotografie" class="object-cover w-full max-w-[200px] sm:max-w-[300px]" />
        </a>
      </div>
  
      <!-- Mobile: Overflow Slider -->
      <div class="xl:hidden flex flex-col items-center relative w-full overflow-hidden">
        <!-- Container voor afbeeldingen met horizontale scroll -->
        <div class="flex w-full gap-6 overflow-x-auto scroll-smooth px-4">
          <a v-for="(link, index) in socialLinks" :key="index" :href="link.url" target="_blank" class="shrink-0 w-[200px] sm:w-[300px]">
            <nuxt-img :src="link.image" alt="Sanneloes Fotografie" class="object-cover w-full h-auto"/>
          </a>
        </div>
  
        <!-- Navigatie Knoppen -->
        <div class="hidden sm:absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
          <button @click="prevImage" class="bg-black text-white p-2 rounded-full">◀</button>
          <button @click="nextImage" class="bg-black text-white p-2 rounded-full">▶</button>
        </div>
      </div>
      <p class="sm:hidden uppercase font-standard text-[13px] mt-4 font-light">
        SCROLL TO SEE MORE
      </p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const socialLinks = ref([
    { url: "https://www.instagram.com/sanneloesfotografie", image: "/assets/pictures/home-page/social_link_1.webp" },
    { url: "https://www.instagram.com/sanneloesfotografie", image: "/assets/pictures/home-page/social_link_2.webp" },
    { url: "https://www.instagram.com/sanneloesfotografie", image: "/assets/pictures/home-page/social_link_3.webp" },
    { url: "https://www.instagram.com/sanneloesfotografie", image: "/assets/pictures/home-page/social_link_4.webp" },
    { url: "https://www.instagram.com/sanneloesfotografie", image: "/assets/pictures/home-page/social_link_5.webp" },
    { url: "https://www.instagram.com/sanneloesfotografie", image: "/assets/pictures/home-page/social_link_6.webp" },
    { url: "https://www.instagram.com/sanneloesfotografie", image: "/assets/pictures/home-page/social_link_7.webp" }
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
  button {
    transition: all 0.2s ease-in-out;
  }
  button:hover {
    background-color: gray;
  }
  </style>
  