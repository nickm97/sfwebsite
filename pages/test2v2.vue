<template>
    <div class="flex justify-center items-center w-[400px] relative" 
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
  
      <div class="cards h-[200px] relative w-full flex justify-center items-center">

        <label class="transition-transform duration-400 ease-in-out cursor-grab overflow-hidden w-[60%] margin-auto absolute flex justify-center items-center" for="item-1" id="song-1">
          <div class="relative w-[150px] h-[200px] flex flex-col bg-background_3 items-center justify-center border border-white rounded-lg cursor-pointer group">
            <!-- Normale tekst (KAAS) -->
            <p class="font-playFair text-center uppercase tracking-widest text-textBeige text-xl px-2 group-hover:opacity-0 transition-opacity duration-300">
              Kaas
            </p>
        
            <!-- Hover tekst -->
            <p class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white font-standard px-2 py-1 text-xs select-none pointer-events-none">
              IK HOU VAN KAAS. Altijd als ik op reis ben, verlang ik naar kaas. Of het nou jong belegen, oude, feta, brie, fondue of geitenkaas is. Ik word er blij van.
            </p>
          </div>
        </label>
        <label class="transition-transform duration-400 ease-in-out cursor-grab overflow-hidden w-[60%] margin-auto absolute flex justify-center items-center" for="item-2" id="song-2">
          <div class="relative w-[150px] h-[200px] flex flex-col bg-background_3 items-center justify-center border border-white rounded-lg cursor-pointer group">
            <!-- Normale tekst (KAAS) -->
            <p class="font-playFair text-center uppercase tracking-widest text-textBeige text-xl px-2 group-hover:opacity-0 transition-opacity duration-300">
              EEN MOOIE REIS
            </p>
        
            <!-- Hover tekst -->
            <p class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white font-standard px-2 py-1 text-xs select-none pointer-events-none">
              Reizen maakt me echt happy. Andere omgevingen, mooie natuur, nieuwe culturen en mensen... Het zorgt voor rust in je hoofd én je kan lekker doen waar je zin in hebt.
            </p>
          </div>
        </label>
        <label class="transition-transform duration-400 ease-in-out cursor-grab overflow-hidden w-[60%] margin-auto absolute flex justify-center items-center" for="item-3" id="song-3">
          <div class="relative w-[150px] h-[200px] flex flex-col bg-background_3 items-center justify-center border border-white rounded-lg cursor-pointer group">
            <!-- Normale tekst (KAAS) -->
            <p class="font-playFair text-center uppercase tracking-widest text-textBeige text-xl px-2 group-hover:opacity-0 transition-opacity duration-300">
              INTERIEUR STYLING
            </p>
        
            <!-- Hover tekst -->
            <p class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white font-standard px-2 py-1 text-xs select-none pointer-events-none">
              Iets wat voor mij echt verslavend kan werken. Ik kan uuuren huizen inrichten, inspiratie opdoen en experimenteren met kleuren, vormen en materialen. Love it.
            </p>
          </div>
        </label>

        <label class="transition-transform duration-400 ease-in-out cursor-grab overflow-hidden w-[60%] margin-auto absolute flex justify-center items-center" for="item-4" id="song-4">
          <div class="relative w-[150px] h-[200px] flex flex-col bg-background_3 items-center justify-center border border-white rounded-lg cursor-pointer group">
            <!-- Normale tekst (KAAS) -->
            <p class="font-playFair text-center uppercase tracking-widest text-textBeige text-xl px-2 group-hover:opacity-0 transition-opacity duration-300">
              EEN GOED BUBBELTJE
            </p>
        
            <!-- Hover tekst -->
            <p class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white font-standard px-2 py-1 text-xs select-none pointer-events-none">
              Yes please!. Maar... een goed glas wijn (rood, wit, rosé I don't care) of een koud wit speciaal biertje in de zomer is ook heaven. Af en toe dan, want wel met mate uiteraard.
            </p>
          </div>
        </label>
      </div>
  
      <button class="absolute top-[50%] left-[10%] transform -translate-x-1/2 -translate-y-1/2" @click="prevItem">❮</button>
      <button class="absolute top-[50%] right-[10%] transform translate-x-1/2 -translate-y-1/2" @click="nextItem">❯</button>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';


  const selectedItem = ref('item-1');
  const items = ['item-1', 'item-2', 'item-3', 'item-4'];
  const isDragging = ref(false);
  const startX = ref(0);
  const currentTranslate = ref(0);
  const prevTranslate = ref(0);
  
  // Berekent de huidige index
  const currentIndex = computed(() => items.indexOf(selectedItem.value));
  
  // Stijl voor de cards container
  const cardsStyle = computed(() => ({
    transform: `translateX(${currentTranslate.value}px)`,
    transition: isDragging.value ? 'none' : 'transform 0.3s ease-out',
    cursor: isDragging.value ? 'grabbing' : 'grab'
  }));
  
  const startDrag = (e) => {
    isDragging.value = true;
    startX.value = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    prevTranslate.value = currentTranslate.value;
  };
  
  const onDrag = (e) => {
    if (!isDragging.value) return;
    
    e.preventDefault();
    const currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    const diff = currentX - startX.value;
    currentTranslate.value = prevTranslate.value + diff;
  };
  
  const endDrag = () => {
    isDragging.value = false;
    
    const movedBy = currentTranslate.value - prevTranslate.value;
    
    // Bepaal of er genoeg is gesleept voor een slide change
    if (Math.abs(movedBy) > 100) {
      if (movedBy > 0) {
        prevItem();
      } else {
        nextItem();
      }
    }
    
    // Reset de translatie
    currentTranslate.value = 0;
    prevTranslate.value = 0;
  };
  
  const nextItem = () => {
    let currentIndex = items.indexOf(selectedItem.value);
    selectedItem.value = items[(currentIndex + 1) % items.length];
  };
  
  const prevItem = () => {
    let currentIndex = items.indexOf(selectedItem.value);
    selectedItem.value = items[(currentIndex - 1 + items.length) % items.length];
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
  
  /* .cards {
    position: relative;
    width: 100%;
    height: 200px;
    margin-bottom: 0px;
    will-change: transform;
  } */
  
  /* .card {
    position: absolute;
    width: 60%;
    height: 200px;
    left: 0;
    right: 0;
    margin: auto;
    transition: transform .4s ease;
    cursor: grab;
    overflow: hidden;
  } */
  
  
  
  #item-1:checked ~ .cards #song-1, 
#item-2:checked ~ .cards #song-2, 
#item-3:checked ~ .cards #song-3,
#item-4:checked ~ .cards #song-4 {
  transform: translatex(0) scale(1);
  opacity: 1;
  z-index: 2;
}

#item-1:checked ~ .cards #song-2, 
#item-2:checked ~ .cards #song-3, 
#item-3:checked ~ .cards #song-4,
#item-4:checked ~ .cards #song-1 {
  transform: translatex(30%) scale(.8);
  opacity: 0.6;
  z-index: 1;
}

#item-1:checked ~ .cards #song-4, 
#item-2:checked ~ .cards #song-1, 
#item-3:checked ~ .cards #song-2,
#item-4:checked ~ .cards #song-3 {
  transform: translatex(-30%) scale(.8);
  opacity: 0.6;
  z-index: 1;
}

#item-1:checked ~ .cards #song-3, 
#item-2:checked ~ .cards #song-4, 
#item-3:checked ~ .cards #song-1,
#item-4:checked ~ .cards #song-2 {
  transform: translatex(60%) scale(.6);
  opacity: 0.3;
  z-index: 0;
}

#item-1:checked ~ .cards #song-4, 
#item-2:checked ~ .cards #song-1, 
#item-3:checked ~ .cards #song-2,
#item-4:checked ~ .cards #song-3 {
  transform: translatex(-60%) scale(.6);
  opacity: 0.3;
  z-index: 0;
}


  </style>