<template>
  <section class="bg-gray-100 flex justify-center">
    <div class="flex items-center justify-center gap-[50px] w-[70%] py-16">
      <nuxt-img
        src="/assets/pictures/shoots-page/your-story-told.png"
        alt="Your story told"
        class="sm:w-[500px] sm:h-[175px] "
      />
      <p class="text-gray-700 font-standard">
        Een fotoshoot bij Sanneloes Fotografie gaat niet om stom poseren, 
        je ongemakkelijk voelen en je anders voordoen dan je bent. Het draait 
        om het vastleggen van échte momenten, precies zoals ze gebeuren. Geen 
        stijve poses of geforceerde glimlachen, maar spontane, oprechte beelden waarin 
        jij, je familie of je geliefden centraal staan. Dit zijn de foto's waarin je jezelf 
        herkent – de kleine blikken, het echte gelach, de subtiele aanrakingen die het verhaal 
        vertellen van wie jij bent.
      </p>
    </div>
  </section>

  <section class="bg-gray-100 flex items-center justify-center px-6">
    <div class="relative grid grid-cols-1 sm:grid-cols-3 gap-2 px-24 sm:px-0 w-[85%]">
      <!-- Tile 1 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/newborn-shoot.jpg"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">NEWBORN</h2>
          <button
            @click="redirect('/newborn')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>
      <!-- Tile 2 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/champagne.jpg"
          alt="Tile Image 2"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">PREGNANCY</h2>
          <button
            @click="redirect('/strong-women')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>
      <!-- Tile 3 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/shoot-02.jpg"
          alt="Tile Image 3"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">FAMILY</h2>
          <button
            @click="redirect('/strong-women')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>
    </div>

  </section>

  <div
    class="flex flex-col items-center justify-center cursor-pointer py-10 font-standard"
    @click="scrollToNextSection"
  >
    <div>SCROLL TO DISCOVER MORE</div>
    <i class="fa-solid fa-chevron-down text-sm mt-1"></i>
  </div>
      
  <section class="bg-buttonColor">
    <div class="flex flex-col py-8 text-sm items-center justify-center">
      <div class="text-white font-standard font-[20px]">
        <p>
          We creëren samen een sfeer waarin jij/jullie je comfortabel voelt/voelen, 
          zodat de foto's niet alleen mooi zijn, maar ook écht voelen. </p>
      </div>
      <div>
        <nuxt-img
          src="/assets/pictures/shoots-page/personal-emotion.png"
          alt="Personal emotion"
          class="sm:w-[350px] sm:h-[60px] "
        />
      </div>
      <div class="text-white font-standard">
        <p>
          Jouw connectie, gevoel, plezier, liefde of dagelijks leven is het waard om vastgelegd te worden.
        </p>
      </div>
    </div>
  </section>

  <section class="bg-gray-100 flex items-center justify-center px-6 py-20">
    <div class="relative grid grid-cols-1 sm:grid-cols-3 gap-2 px-24 sm:px-0 w-[85%]">
      <!-- Tile 1 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/newborn-shoot.jpg"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">COUPLES</h2>
          <button
            @click="redirect('/strong-women')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>
      <!-- Tile 2 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/champagne.jpg"
          alt="Tile Image 2"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">BOUDIOR</h2>
          <button
            @click="redirect('/strong-women')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>
      <!-- Tile 3 -->
      <div class="relative rounded-lg overflow-hidden flex flex-col items-center justify-center">
        <p class="font-playFair text-4xl font-light text-center leading-[4rem]">
          WHAT TO<br>EXPECT?
        </p>
        <ul class="list-disc pl-6 font-standard font-light leading-[2rem] py-6 w-[80%]">
          <li class="pl-2">Een ongedwongen en persoonlijke fotosessie</li>
          <li class="pl-2">Beelden vol echtheid, warmte en emotie</li>
          <li class="pl-2">In de studio, bij jullie thuis of op een buitenlocatie naar keuze</li>
        </ul>
        <p class="font-standard font-light w-[80%]">
          Boek jouw lifestyle shoot en leg het leven vast zoals het nú is óf boek 
          jouw boudoir shoot en kijk altijd vol trots naar jezelf. Je bent mooi zoals je bent, meid! Gun jezelf 
          ‘a moment of shine’.
        </p>
      </div>

    </div>
  </section>

  <footer-sf></footer-sf>
</template>

<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();
  function scrollToNextSection() {
    // Scroll naar de volgende sectie (vervang de selector naar je gewenste sectie)
    window.scrollBy({
      top: window.innerHeight, // scrollt een volledige viewport naar beneden
      behavior: "smooth" // zorgt voor een vloeiende scroll
    });
  };
  function redirect(path) {
    router.push(path); // Navigeer naar de gewenste route
  }
</script>
