<template>
  <div class="w-[150px] h-[200px] flex flex-col bg-background_3 items-center justify-center border border-white rounded-lg group">
    <p class="group-hover:hidden font-playFair text-center uppercase tracking-widest text-textBeige text-xl px-2">
      {{ review.name }}
    </p>

    <div class="group-hover:flex hidden text-center text-white font-standard px-2 py-1 text-xs select-none pointer-events-none">
      <p>"{{ review.text }}"</p>
    </div>
  </div>
</template>

  <script setup>
  defineProps({
    review: Object
  })
  </script>
  