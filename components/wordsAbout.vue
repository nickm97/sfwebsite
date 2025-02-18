<template>
    <!-- <div class="relative w-64 h-40 flex items-center justify-center bg-yellow-300 rounded-xl shadow-lg cursor-pointer group" -->
     <div class="relative w-[150px] h-[200px] flex flex-col bg-background_3 items-center justify-center border border-white rounded-lg cursor-pointer group">
      <!-- Normale tekst (KAAS) -->
      <p class="font-playFair text-center uppercase tracking-widest text-textBeige text-xl px-2 group-hover:opacity-0 transition-opacity duration-300">
        {{ wordsAbout.word }}
      </p>
  
      <!-- Hover tekst -->
      <p class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white font-standard px-2 py-1 text-xs select-none pointer-events-none">
        {{ wordsAbout.text }}
      </p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    wordsAbout: Object
  })
  </script>