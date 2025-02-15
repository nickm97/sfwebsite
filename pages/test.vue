<template>
  <div class="container">
    <input type="radio" name="slider" id="item-1" v-model="selectedItem" value="item-1" checked>
    <input type="radio" name="slider" id="item-2" v-model="selectedItem" value="item-2">
    <input type="radio" name="slider" id="item-3" v-model="selectedItem" value="item-3">

    <div class="cards">
      <label class="card" for="item-1" id="song-1">
        <img src="/assets/pictures/boudoir-page/boudoir-03.webp" alt="song">
      </label>
      <label class="card" for="item-2" id="song-2">
        <img src="/assets/pictures/boudoir-page/boudoir-03.webp" alt="song">
      </label>
      <label class="card" for="item-3" id="song-3">
        <img src="/assets/pictures/boudoir-page/boudoir-03.webp" alt="song">
      </label>
    </div>

    <!-- Navigatie pijlen -->
    <button class="arrow left" @click="prevItem">❮</button>
    <button class="arrow right" @click="nextItem">❯</button>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedItem = ref('item-1');

const items = ['item-1', 'item-2', 'item-3'];

const nextItem = () => {
  let currentIndex = items.indexOf(selectedItem.value);
  selectedItem.value = items[(currentIndex + 1) % items.length]; // Circulair navigeren
};

const prevItem = () => {
  let currentIndex = items.indexOf(selectedItem.value);
  selectedItem.value = items[(currentIndex - 1 + items.length) % items.length]; // Circulair navigeren
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap");

* {
  box-sizing: border-box;
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
}

.cards {
  position: relative;
  width: 100%;
  height: 400px;
  margin-bottom: 20px;
}

.card {
  position: absolute;
  width: 60%;
  height: 400px;
  left: 0;
  right: 0;
  margin: auto;
  transition: transform .4s ease;
  cursor: pointer;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
}

/* Pijlen */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  /* background: rgba(0, 0, 0, 0.5); */
  color: burlywood;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 24px;
  border-radius: 50%;
  z-index: 10;
  transition: 0.3s;
}

.arrow:hover {
  background: rgba(0, 0, 0, 0.8);
}

.left {
  left: 10px;
}

.right {
  right: 10px;
}

/* Transformatie voor selectie */
#item-1:checked ~ .cards #song-3, 
#item-2:checked ~ .cards #song-1, 
#item-3:checked ~ .cards #song-2 {
  transform: translatex(-40%) scale(.8);
  opacity: .4;
  z-index: 0;
}

#item-1:checked ~ .cards #song-2, 
#item-2:checked ~ .cards #song-3, 
#item-3:checked ~ .cards #song-1 {
  transform: translatex(40%) scale(.8);
  opacity: .4;
  z-index: 0;
}

#item-1:checked ~ .cards #song-1, 
#item-2:checked ~ .cards #song-2, 
#item-3:checked ~ .cards #song-3 {
  transform: translatex(0) scale(1);
  opacity: 1;
  z-index: 1;
}

#item-1:checked ~ .cards #song-1 img, 
#item-2:checked ~ .cards #song-2 img, 
#item-3:checked ~ .cards #song-3 img {
  box-shadow: 0px 0px 5px 0px rgba(81, 81, 81, 0.47);
}
</style>
