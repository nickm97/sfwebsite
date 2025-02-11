<template>

<section>
    <!-- background pic -->
    <div class="relative h-screen max-h-[calc(100vh-150px)] hidden sm:block">
      <nuxt-img
        src="/assets/pictures/shoots-page/banner.webp"
        alt="Shoots Background"
        class="w-full h-full object-cover object-center"style="object-position: center 45%;"
      />
    </div>
    <div class="relative h-screen max-h-[calc(100vh-150px)] sm:hidden">
      <nuxt-img
        src="/assets/pictures/shoots-page/banner-mobile.webp"
        alt="Shoots Background"
        class="w-full h-full object-cover object-center"style="object-position: center 45%;"
      />
    </div>
    <div class="sm:block hidden">
      <p class="absolute top-[60%] left-[5%] transform -translate-x-1/2 -translate-y-1/2 
          text-white text-[80px] tracking-widest font-playFair uppercase text-center 
          -rotate-90">
        Shoots
      </p>
    </div>
    <div class="sm:hidden">
      <p class="absolute top-[50%] left-[10%] transform -translate-x-1/2 -translate-y-1/2 
          text-white text-[60px] sm:text-[80px] tracking-widest font-playFair uppercase text-center 
          -rotate-90">
        Shoots
      </p>
    </div>
    <p class="absolute bottom-[10%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 
          text-white text-[26px] font-playFair uppercase text-center w-full hidden sm:block">
        PREGNANCY - NEWBORN - LITTLE FAMILIES - COUPLES - BOUDOIR
      </p>
  </section>

  <section class="flex flex-col items-center sm:px-6 sm:pt-10 pb-10 bg-buttonColor">
    <p class="sm:hidden font-playFair uppercase text-center w-full text-white text-[12px] w-full mb-4">
      PREGNANCY-NEWBORN-LITTLE FAMILIES-COUPLES-BOUDOIR
    </p>
    <div class="w-full sm:w-[70%] px-4">
      <p class="text-white uppercase font-standard text-left font-bold">
        FOTOSHOOTS
      </p>
    </div>
    <div class="mt-6 w-full sm:w-[70%] px-4">
      <p class="text-white font-standard font-light">
        Een fotoshoot bij Sanneloes Fotografie gaat niet om stom poseren, 
          je ongemakkelijk voelen en je anders voordoen dan je bent. Het draait 
          om het vastleggen van échte momenten, precies zoals ze gebeuren. Geen 
          stijve poses of geforceerde glimlachen, maar spontane, oprechte beelden 
          waarin jij, je familie of je geliefden centraal staan. Dit zijn de foto's 
          waarin je jezelf herkent – de kleine blikken, het echte gelach, de subtiele 
          aanrakingen die het verhaal vertellen van wie jij bent.
      </p>
    </div>
  </section>

  <section class="items-center justify-center">
    <div class="flex flex-col sm:flex-row sm:gap-12 items-center justify-center py-12 w-full sm:mx-auto bg-background_4">
  
      <!-- Afbeelding -->
      <div class="px-4 flex items-center justify-center">
        <nuxt-img
          src="/assets/pictures/shoots-page/shoots-photo-qoute.webp"
          alt="Sanneloes"
          class="w-[300px] sm:w-[400px] rounded-lg"
        />
      </div>

      <div class="px-4 mt-8 sm:mt-0 flex items-center justify-center">
        <nuxt-img
          src="/assets/pictures/shoots-page/shoots-qoute-01.webp"
          alt="Sanneloes"
          class="w-[300px] sm:w-[400px]"
        />
      </div>
    </div>
  </section>

  <section>
    <div class="bg-background_2 flex items-center justify-center px-4 py-12 sm:px-6 sm:py-20">
      <div class="flex flex-col items-center justify-center">
        <div class="sm:w-[80%] flex sm:flex-row flex-col">
          <div class="flex flex-col justify-center sm:w-[60%]">
            <p class="font-playFair text-center sm:text-left sm:text-4xl text-[25px] font-light">
              WHAT TO EXPECT?
            </p>
            <ul class="list-disc pl-4 sm:pl-6 font-standard font-light leading-[1rem] sm:leading-[2rem] py-6">
              <li class="pl-2">Een ongedwongen en persoonlijke fotosessie</li>
              <li class="pl-2">Beelden vol echtheid, warmte en emotie</li>
              <li class="pl-2">In de studio, bij jullie thuis of op een buitenlocatie naar keuze</li>
            </ul>
            
          </div> 
          <p class="font-standard font-light sm:w-[40%] sm:text-[15px] text-[14.5px]">
            We creëren samen een sfeer waarin jij/jullie je comfortabel voelt/voelen, zodat de foto's 
            niet alleen mooi zijn, maar ook écht aanvoelen.<br><br>

            Jouw connectie, gevoel, plezier, liefde of dagelijks leven is het waard om vastgelegd te worden. 
            Eén keer knipperen en het moment is alweer voorbij. Het is toch zonde om maar te blijven knipperen 
            en fijne momenten nooit te bevriezen in de tijd?

          </p>
        </div>       
        <p class="font-standard font-light mt-10 sm:w-[80%] sm:text-[15px] text-[14.5px]">
          Boek jouw lifestyle shoot en leg het leven vast zoals het nú is óf boek 
          jouw boudoir shoot en kijk altijd vol trots naar jezelf. Je bent mooi zoals je bent, meid! Gun jezelf 
          ‘a moment of shine’.
        </p>
      </div>
    </div>
  </section>

  <section class="bg-background_4 flex items-center justify-center px-2 sm:px-6 py-12 sm:py-[100px]">
    <div class="relative grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-6 w-full">
      <!-- Tile 2 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/shoots-page/shoots-pregnancy.webp"
          alt="Tile Image 2"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 border-2 border-gray-300"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">PREGNANCY</h2>
          <button
            @click="redirect('/pregnancy')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>

      <!-- Tile 1 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/shoots-page/shoots-newborn.webp"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 border-2 border-gray-300"
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
      
      <!-- Tile 3 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/shoots-page/shoots-family.webp"
          alt="Tile Image 3"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 border-2 border-gray-300"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">FAMILY</h2>
          <button
            @click="redirect('/family')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/shoots-page/shoots-couples.webp"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 border-2 border-gray-300" 
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">LOVERS</h2>
          <button
            @click="redirect('/lovers')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>
      <!-- Tile 2 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/shoots-page/shoots-boudoir.webp"
          alt="Tile Image 2"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 border-2 border-gray-300"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">BOUDIOR</h2>
          <button
            @click="redirect('/boudoir')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <p class="uppercase text-center font-playFair text-[30px] sm:text-[70px] text-black">
          PRESERVE
          MOMENTS
          BEFORE 
          THEY ARE OVER

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
