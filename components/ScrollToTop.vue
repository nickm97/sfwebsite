<template>
    <button
      v-show="showButton"
      @click="scrollToTop"
      class="fixed bottom-5 right-5 w-12 h-12 flex items-center justify-center 
             bg-white text-black rounded-full shadow-lg transition-opacity 
             duration-300 hover:bg-buttonColor hover:text-white font-bold text-[22px]"
    >
      &#8593; <!-- ↑ Pijl omhoog -->
    </button>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const showButton = ref(false);
  
  const checkScroll = () => {
    showButton.value = window.scrollY > 300; // Toon knop na 300px scrollen
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  onMounted(() => {
    window.addEventListener('scroll', checkScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll);
  });
  </script>
  