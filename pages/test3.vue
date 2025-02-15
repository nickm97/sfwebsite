<template>
    <div class="container" 
         @mousedown="startDrag"
         @mousemove="onDrag"
         @mouseup="endDrag"
         @mouseleave="endDrag"
         @touchstart="startDrag"
         @touchmove="onDrag"
         @touchend="endDrag">
      <input type="radio" name="slider" id="item-1" v-model="selectedItem" value="item-1" checked>
      <input type="radio" name="slider" id="item-2" v-model="selectedItem" value="item-2">
      <input type="radio" name="slider" id="item-3" v-model="selectedItem" value="item-3">
  
      <div class="cards" :style="cardsStyle">
        <label class="card" 
               v-for="(item, index) in items" 
               :key="item"
               :for="item"
               :id="`song-${index + 1}`"
               :style="getCardStyle(index)">
          <img src="/assets/pictures/boudoir-page/boudoir-03.webp" alt="song">
        </label>
      </div>
  
      <button class="arrow left" @click.prevent="prevItem">❮</button>
      <button class="arrow right" @click.prevent="nextItem">❯</button>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const selectedItem = ref('item-1');
  const items = ['item-1', 'item-2', 'item-3'];
  const isDragging = ref(false);
  const startX = ref(0);
  const currentTranslate = ref(0);
  const prevTranslate = ref(0);
  const currentIndex = ref(0);
  const animationID = ref(null);
  const draggedDistance = ref(0);
  
  const getCardStyle = (index) => {
    const position = (index - currentIndex.value + items.length) % items.length;
    const baseTransform = `translateX(${draggedDistance.value}px)`;
    
    if (position === 0) {
      return {
        transform: `${baseTransform} scale(1)`,
        opacity: 1,
        zIndex: 1
      };
    } else if (position === 1 || position === -2) {
      return {
        transform: `${baseTransform} translateX(40%) scale(0.8)`,
        opacity: 0.4,
        zIndex: 0
      };
    } else {
      return {
        transform: `${baseTransform} translateX(-40%) scale(0.8)`,
        opacity: 0.4,
        zIndex: 0
      };
    }
  };
  
  const cardsStyle = computed(() => ({
    transform: `translateX(${currentTranslate.value}px)`,
    transition: isDragging.value ? 'none' : 'all 0.3s ease-out'
  }));
  
  const animation = () => {
    if (isDragging.value) {
      draggedDistance.value = currentTranslate.value - prevTranslate.value;
      requestAnimationFrame(animation);
    }
  };
  
  const startDrag = (e) => {
    isDragging.value = true;
    startX.value = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    prevTranslate.value = currentTranslate.value;
    
    animationID.value = requestAnimationFrame(animation);
  };
  
  const onDrag = (e) => {
    if (!isDragging.value) return;
    
    const currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    const diff = currentX - startX.value;
    currentTranslate.value = prevTranslate.value + diff;
  };
  
  const endDrag = () => {
    isDragging.value = false;
    cancelAnimationFrame(animationID.value);
    
    const movedBy = currentTranslate.value - prevTranslate.value;
    
    if (Math.abs(movedBy) > 50) {
      if (movedBy > 0) {
        prevItem();
      } else {
        nextItem();
      }
    }
    
    // Reset translaties
    currentTranslate.value = 0;
    prevTranslate.value = 0;
    draggedDistance.value = 0;
  };
  
  const nextItem = () => {
    currentIndex.value = (currentIndex.value + 1) % items.length;
    selectedItem.value = items[currentIndex.value];
  };
  
  const prevItem = () => {
    currentIndex.value = (currentIndex.value - 1 + items.length) % items.length;
    selectedItem.value = items[currentIndex.value];
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap");
  
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  
  input[type=radio] {
    display: none;
  }
  
  .container {
    width: 100%;
    max-width: 800px;
    height: 600px;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    touch-action: none;
    user-select: none;
    overflow: hidden;
  }
  
  .cards {
    position: relative;
    width: 100%;
    height: 400px;
    margin-bottom: 20px;
    will-change: transform;
    transform-style: preserve-3d;
    perspective: 1000px;
  }
  
  .card {
    position: absolute;
    width: 60%;
    height: 400px;
    left: 0;
    right: 0;
    margin: auto;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: grab;
    overflow: hidden;
    transform-origin: center center;
  }
  
  .card:active {
    cursor: grabbing;
  }
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    pointer-events: none;
    touch-action: none;
    -webkit-user-drag: none;
  }
  
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.3);
    color: white;
    border: none;
    padding: 12px 16px;
    cursor: pointer;
    font-size: 24px;
    border-radius: 50%;
    z-index: 10;
    transition: 0.3s;
    opacity: 0.7;
  }
  
  .arrow:hover {
    background: rgba(0, 0, 0, 0.8);
    opacity: 1;
  }
  
  .left {
    left: 10px;
  }
  
  .right {
    right: 10px;
  }
  
  @media (max-width: 768px) {
    .card {
      width: 80%;
    }
    
    .arrow {
      padding: 8px 12px;
      font-size: 20px;
    }
  }
  </style>