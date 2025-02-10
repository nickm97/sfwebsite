<template>
    <div class="w-[225px] h-[365px] flex flex-col bg-white items-center border border-1 border-black rounded-lg group">
      <div class="group-hover:hidden pl-4 pr-4 pt-4">
        <nuxt-img :src="review.image" :alt="review.name" class="w-full h-full object-cover" />
      </div>
      <p class="group-hover:hidden font-standard uppercase tracking-widest text-sm py-1">
        {{ review.name }}
      </p>
      <div class="group-hover:hidden border-1 border-b border-black w-[60%]"></div>
      <p class="group-hover:hidden font-light font-standard text-xs py-1">
        {{ review.date }}
      </p>
      <div class="group-hover:flex hidden text-left px-2 py-1 text-xs select-none pointer-events-none break-words whitespace-normal">
        <p>"{{ review.text }}"</p>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    review: Object
  })
  </script>
  