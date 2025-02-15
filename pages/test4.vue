<template>
    <div class="carousel-container">
      <div class="carousel" 
           ref="carousel"
           @mousedown="startDrag"
           @mousemove="onDrag"
           @mouseup="endDrag"
           @mouseleave="endDrag"
           @touchstart="startDrag"
           @touchmove="onDrag"
           @touchend="endDrag">
        <div class="image-container">
          <img src="/assets/pictures/boudoir-page/boudoir-01.webp" alt="Image 1">
        </div>
        <div class="image-container">
          <img src="/assets/pictures/boudoir-page/boudoir-02.webp" alt="Image 2">
        </div>
        <div class="image-container">
          <img src="/assets/pictures/boudoir-page/boudoir-03.webp" alt="Image 3">
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const carousel = ref(null);
  const isDragging = ref(false);
  const startX = ref(0);
  const scrollLeft = ref(0);
  
  const startDrag = (e) => {
    isDragging.value = true;
    const pos = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    startX.value = pos - carousel.value.offsetLeft;
    scrollLeft.value = carousel.value.scrollLeft;
  };
  
  const onDrag = (e) => {
    if (!isDragging.value) return;
    e.preventDefault();
    
    const pos = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    const x = pos - carousel.value.offsetLeft;
    const walk = (x - startX.value) * 2;
    carousel.value.scrollLeft = scrollLeft.value - walk;
  };
  
  const endDrag = () => {
    isDragging.value = false;
  };
  </script>
  
  <style scoped>
  .carousel-container {
    width: 100%;
    max-width: 100vw;
    padding: 20px;
    overflow: hidden;
  }
  
  .carousel {
    display: flex;
    gap: 20px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    cursor: grab;
    padding: 20px 0;
  }
  
  .carousel::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }
  
  .carousel:active {
    cursor: grabbing;
  }
  
  .image-container {
    flex: 0 0 auto;
    width: 80%;
    max-width: 500px;
    aspect-ratio: 3/4;
    scroll-snap-align: center;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    pointer-events: none;
    user-select: none;
  }
  
  @media (max-width: 768px) {
    .image-container {
      width: 90%;
    }
  }
  </style>