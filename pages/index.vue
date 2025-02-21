
<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

  </head>
  <section class="flex h-[calc(100vh-70px)] w-full relative">

    <!-- Left Image (Slideshow) -->
    <div class="hidden sm:block flex-1 relative overflow-hidden">
      <nuxt-img
        v-for="(image, index) in leftImages"
        :key="'left-' + index"
        :src="image.src"
        alt="Left Image"
        class="w-full h-full object-cover absolute transition-opacity duration-1000"
        :style="{ 
          opacity: currentLeftImage === index ? 1 : 0,
          objectPosition: image.position || 'center 85%'
        }"
      />
    </div>

    <!-- Right Image (Slideshow) -->
    <div class="sm:block flex-1 relative overflow-hidden">
      <nuxt-img
        v-for="(image, index) in rightImages"
        :key="'right-' + index"
        :src="image.src"
        alt="Right Image"
        class="w-full h-full object-cover absolute transition-opacity duration-1000"
        :style="{ 
          opacity: currentRightImage === index ? 1 : 0,
          objectPosition: image.position || 'center 75%'
        }"
      />
    </div>

    <!-- Left Arrow -->
    <button @click="previousImage" class="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl z-10">
      &#8592;
    </button>

    <!-- Right Arrow -->
    <button @click="nextImage" class="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl z-10">
      &#8594;
    </button>

    <!-- Left Image (Slideshow) -->
    <!-- <div class="hidden sm:block flex-1 relative overflow-hidden">
      <nuxt-img
        v-for="(image, index) in leftImages"
        :key="'left-' + index"
        :src="image"
        alt="Left Image"
        class="w-full h-full object-cover absolute transition-opacity duration-1000 object-top"style="object-position: center 85%;"
        :style="{ opacity: currentLeftImage === index ? 1 : 0 }"
      />
    </div> -->

    <!-- Right Image (Slideshow) -->
    <!-- <div class="sm:block flex-1 relative overflow-hidden">
      <nuxt-img
        v-for="(image, index) in rightImages"
        :key="'right-' + index"
        :src="image"
        alt="Right Image"
        class="w-full h-full object-cover absolute transition-opacity duration-1000 object-top"style="object-position: center 75%;"
        :style="{ opacity: currentRightImage === index ? 1 : 0 }"
      />
    </div> -->

    <!-- Discover More (Overlapping) -->
    <div
      class="hidden sm:block absolute bottom-[65px] sm:bottom-[40px] text-white left-1/2 transform -translate-x-1/2 font-standard text-center cursor-pointer"
      @click="scrollToNextSection"
    >
      <div class="text-[13px]">SCROLL TO DISCOVER MORE</div>
      <i class="fa-solid fa-chevron-down text-sm mt-1"></i>
    </div>
  </section>

  <section class="flex flex-col items-center justify-center text-center py-12 px-4 pb-[50px] bg-buttonColor">
    <nuxt-img
      src="/assets/pictures/home-page/dare_a_little.webp"
      alt="Sanneloes Fotografie Logo"
      class="hidden sm:block object-cover h-[45px] sm:h-[150px]"
    />
    <nuxt-img
      src="/assets/pictures/home-page/home-page-mobile-qoute-01.webp"
      alt="Sanneloes Fotografie Logo"
      class="sm:hidden object-cover h-[80px]"
    />
    <div class="sm:flex sm:w-[1250px] text-left sm:text-left text-[14.5px] sm:text-[16px] text-white items-center sm:gap-12 py-4 sm:py-6 font-standard font-light">
      <p class="sm:w-1/2">
        Sanneloes is een professionele en creatieve fotografe die de kunst 
        van het vastleggen van bijzondere momenten beheerst. Met een oog voor 
        detail en een passie voor storytelling, biedt Sanneloes Fotografie unieke
        fotosessies die emoties en spontaniteit benadrukken. Liefde voor jezelf of 
        elkaar staat voorop. 
      </p>
      <p class="mt-4 sm:mt-0 sm:w-1/2">
        Of het nu gaat om pure portretten, bruiloften of plezierige gezinsfoto's, 
        de stijl van Sanneloes combineert warmte en authenticiteit. De beelden vertellen
        een verhaal dat je keer op keer wilt herbeleven. Perfect voor iedereen die op zoek 
        is naar tijdloze herinneringen! Dat alles in een jasje van liefde, plezier en echtheid.
      </p>
    </div>
    <p class="text-white text-left sm:text-center font-standard sm:pt-6 font-light text-[14.5px] sm:text-[16px]">
      Fotograaf voor bruiloften, branding en lifestyle shoots omgeving Eindhoven, Noord-Brabant
    </p>
  </section>

  <section class="relative parallax">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/20 flex items-center justify-center">
      <!-- Knop -->
      <a
        href="/contact"
        class="text-white text-sm font-semibold border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300">
          Laat mij jullie verhaal vastleggen
      </a>
    </div>
  </section>

  <section class="items-center justify-center">
    <div class="flex flex-col sm:flex-row sm:gap-16 items-center justify-center py-12 w-full sm:max-w-[1200px] sm:mx-auto">
  
      <!-- Afbeelding
      <div class="w-full sm:w-1/2 px-4 flex items-center justify-center">
        <nuxt-img
          src="/assets/pictures/home-page/review-home-page.webp"
          alt="Sanneloes"
          class="w-[300px] sm:w-[500px]"
        />
      </div> -->
      <!-- Afbeelding -->
      <div class="w-full sm:w-1/2 px-4 flex items-center justify-center relative">
        <nuxt-img
          src="/assets/pictures/home-page/review-home-page-back.webp"
          alt="Sanneloes"
          class="w-[300px] sm:w-[400px] rounded-xl"
        />

        <nuxt-img
          src="/assets/pictures/home-page/review-home-page.webp"
          alt="Sanneloes"
          class="w-[225px] sm:w-[325px] rounded-xl absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 border-[5px] border-border"
        />

      </div>
      

      <!-- Tekst -->
      <div class="flex flex-col w-full sm:w-1/2 text-center sm:text-left py-0 sm:py-0 px-4 sm:px-0">
        <h1 class="uppercase font-playFair text-[28px] sm:text-4xl py-2">HEARTWARMING WORDS</h1>
        <p class="font-standard font-light sm:text-xl text-[14.5px] text-left">
          “Hoe zoek je nou dé juiste fotograaf voor je bruiloft? Nou: boek Sanneloes!<br><br>
          Zij is diegene die je er bij wilt hebben op je dag: vrolijk, energiek, enthousiast en 
          gepassioneerd. Een daggast met een camera in haar handen! De foto’s overtroffen al onze 
          verwachtingen! Na een paar dagen al de méga preview en wat later alle foto’s. Ze zijn 
          prachtig en hebben alles zo vastgelegd dat we de dag telkens opnieuw kunnen beleven én
          momenten konden beleven waar we zelf niet bij waren geweest.”
        </p>
        <nuxt-img
          src="/assets/pictures/home-page/review-name.webp"
          alt="Sanneloes"
          class="w-[80px] sm:w-[100px] hidden sm:block"
        />
      </div>

    </div>
  </section>

  <!-- New Section with Title and Photos -->
  <section class="px-[10px] md:px-[140px] items flex-col items-center justify-center pt-0 sm:pt-6 pb-12 sm:pb-[100px] sm:bg-buttonColor">
    <p class="hidden sm:block text-4xl font-playFair text-white font-light text-center mb-8 mt-12">
      PHOTOGRAPHY AND INFORMATION
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full">
    <!-- Tile 1 -->
    <div class="relative group rounded-lg overflow-hidden bg-background_4">
      <img
        src="/assets/pictures/home-page/page_links_03.webp"
        alt="Tile Image 1"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div class="absolute inset-0 flex items-center justify-center flex-col text-white">
        <button
          @click="redirect('/weddings')"
          class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
        >
          WEDDINGS
        </button>
      </div>
    </div>

    <!-- Tile 2 -->
    <div class="relative group rounded-lg overflow-hidden bg-gray-300">
      <img
        src="/assets/pictures/home-page/page_links_01.webp"
        alt="Tile Image 2"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div class="absolute inset-0 flex items-center justify-center flex-col text-white">
        <button
          @click="redirect('/shoots')"
          class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
        >
          SHOOTS
        </button>
      </div>
    </div>

    <!-- Tile 3 -->
    <div class="relative group rounded-lg overflow-hidden bg-gray-300 sm:order-3 order-4">
      <nuxt-img
        src="/assets/pictures/home-page/page_links_04.webp"
        alt="Tile Image 3"
        class="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div class="absolute inset-0 flex items-center justify-center flex-col text-white">
        <button
          @click="redirect('/boudoir')"
          class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
        >
          BOUDOIR
        </button>
      </div>
    </div>

    <!-- Tile 4 (Moet wisselen op mobiel) -->
    <div class="relative group rounded-lg overflow-hidden bg-gray-300 sm:order-4 order-3">
      <nuxt-img
        src="/assets/pictures/home-page/page_links_02.webp"
        alt="Tile Image 4"
        class="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div class="absolute inset-0 flex items-center justify-center flex-col text-white">
        <button
          @click="redirect('/branding')"
          class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
        >
          BRANDING
        </button>
      </div>
    </div>
    </div>
  </section>

  <section class="relative parallax_02">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/20 flex items-center justify-center">
      <!-- Knop -->
      <!-- <a
        href="/contact"
        class="text-white text-sm font-semibold border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300">
          Laat mij jullie verhaal vastleggen
      </a> -->
    </div>
  </section>

  <section class="items-center justify-center bg-background_2">
    <div class="flex flex-col-reverse sm:flex-row sm:gap-16 items-center justify-center sm:py-12 py-10 w-full max-w-[1200px] mx-auto">
      <div class="sm:w-1/2 px-12 sm:px-4 flex items-center justify-center sm:justify-start">
        <div class="relative">
          <nuxt-img
            src="/assets/pictures/home-page/about-home-page.webp"
            alt="Sanneloes"
            class="w-[400px]"
          />
          <div class="absolute w-full sm:top-[10%] top-[95%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center">
            <button
              @click="redirect('/portfolio')"
              class="px-4 py-1 sm:py-2 rounded-full bg-buttonColor_2 bg-opacity-50 hover:bg-opacity-100  font-standard 
              cursor-pointer border-[1px] border-white text-black text-[14.5px]">
              TAP TO SEE MY WORK
            </button>
          </div>
          <p class="absolute top-[30%] left-[15%] transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center text-white opacity-50 font-playFair sm:text-[80px] text-[55px]">
            PO
          </p>
          <p class="absolute top-[40%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center text-white opacity-50 font-playFair sm:text-[80px] text-[55px]">
            RT
          </p>
          <p class="absolute top-[50%] right-[26%] transform translate-x-1/2 -translate-y-1/2 z-10 flex justify-center text-white opacity-50 font-playFair sm:text-[80px] text-[55px]">
            FO
          </p>
          <p class="absolute top-[60%] right-[18%] transform translate-x-1/2 -translate-y-1/2 z-10 flex justify-center text-white opacity-50 font-playFair sm:text-[80px] text-[55px]">
            LIO
          </p>
        </div>
       
        
      </div>
      <div class="flex-col sm:w-1/2 relative sm:px-0 px-4">
        <!-- "ABOUT" tekst met absolute positie en naar boven verplaatst -->
        <p class="block sm:block absolute text-[100px] sm:text-[125px] font-playFair left-1/2 transform translate-x-[-50%] sm:top-[-220px] top-[-130px] sm:text-white">ABOUT</p>
        <div class="absolute left-1/2 transform translate-x-[-50%] sm:top-[-125px] top-[-50px]">
          <nuxt-img
            src="/assets/pictures/home-page/about-sanneloes.webp"
            alt="Sanneloes"
            class="sm:h-[150px] h-[100px] w-[170px] "
          />
        </div>
        <p class="uppercase font-playFair text-2xl mb-4 w-full text-left mt-12 sm:mt-0">hi there</p>
        <p class="font-standard font-light text-left sm:text-left text-[14.5px] sm:text-[16px] text-black">
            Dag lieve lezer! Welkom op mijn website. Ik ben Sanneloes van Kessel, 
            fulltime ondernemer; professioneel fotograaf, eigenaar van 
            <a href="https://daylightstudio-laluz.nl/" target="_blank" style="text-decoration: underline;">Daylight Studio La Luz</a> 
            en mede-oprichter van 
            <a href="https://savvy-styling.nl/" target="_blank" style="text-decoration: underline;">Savvy Styling</a>. 
            Een bezig bijtje kan je wel stellen.<br><br>

            Ik hou ervan om unieke, échte en emotionele momenten vast te leggen die jouw 
            verhaal op de mooiste en meest eerlijke manier vertelt. Ik wil dat connecties 
            en dierbare momenten bevroren worden in de tijd, zodat jij, maar ook anderen 
            na tientallen jaren nog veel plezier kunnen hebben van de foto’s. Zo blijven 
            dierbare herinneringen en personen bevroren en zullen ze nooit vergeten worden.<br><br>

            Benieuwd naar wat ik maak? Neem rustig een kijkje op mijn website en kom meer 
            te weten. Bij vragen, weet me te vinden via mijn 
            <a href="https://sanneloesfotografie.nl/contact" style="text-decoration: underline;">contactpagina</a>.
        </p>

        <div class="flex flex-col items-center justify-center py-6 font-standard">
          <button
            @click="redirect('/about')"
            class="text-[14.5px] sm:text-[16px] px-6 py-2 rounded-full bg-buttonColor_2 font-standard py-12 cursor-pointer border-[1px] border-white hover:bg-white hover:text-black hover:bg-white"
          >
            MEER OVER SANNELOES
          </button>
        </div>
      </div>

    </div>
  </section>
  
  <!-- <reviews-sf></reviews-sf> -->
  <reviews-carousel></reviews-carousel>

  <section class="bg-buttonColor flex items-center justify-center py-12">
    <div class="flex-col">
      <div class="flex items-center justify-center text-white text-center font-standard font-light max-w-[600px] px-4">
        <p>
          Sanneloes Fotografie focust zich met name op bruiloften, gezinsfotografie, 
          boudoir, zwangerschappen, newborns en enthousiaste ondernemers die content 
          nodig hebben voor hun website of sociale media.
        </p>
      </div>
      <div class="flex flex-col items-center justify-center py-6 font-standard">
        <button
          @click="redirect('/contact')"
          class="px-6 py-2 rounded-full bg-buttonColor border border-1-white text-white font-standard py-12 cursor-pointer hover:bg-white hover:text-black"
        >
        Top! Dan kan jij me vast helpen
        </button>
      </div>
    </div>
  </section>

  <section>
    <div class="flex-col items-center justify-center py-12">
      <div class="flex items-center justify-center py-2 gap-6">
        <a href="https://www.instagram.com/sanneloesfotografie/" target="_blank" class="text-4xl text-black instagram-icon">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <p class="uppercase font-standard sm:text-2xl text-lg text-center font-light">
          #SANNELOESFOTOGRAFIE
        </p>
      </div>
      
      <social-links></social-links>
      

    </div>

  </section>

  <section class="flex items-center justify-center sm:py-8">
    <div class="flex-col w-full">
      <div class="flex items-center justify-center px-4 bg-background_2 py-6">
        <p class="text-black text-center uppercase font-standard sm:w-[60%]">
          omdat ik m'N LIEVE KLANTEN ZO DANKBAAR BEN, HEB IK EEN CADEAUTJE!
          keer je als klant teRUG EN KOM JE NOG EENS VOOR DE LENS STAAN? ONTVANG JE 5 
          EXTRA FOTO'S CADEAU! GEEF BIJ JE RESERVERING <strong>‘TERUGKERENDE KLANT’</strong> AAN EN DOE JEZELF EEN CADEAUTJE
        </p>
      </div>
    </div>
  </section>

  <footer-sf></footer-sf>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { ref, onMounted } from 'vue';

  // Vue-router voor navigatie
  const router = useRouter();

  // Scroll naar de volgende sectie
  function scrollToNextSection() {
    window.scrollBy({
      top: window.innerHeight, // Scrollt een volledige viewport naar beneden
      behavior: "smooth" // Vloeiende scroll animatie
    });
  }

  // Redirect naar een nieuwe route
  function redirect(path) {
    router.push(path); // Navigeer naar de gewenste route
  }

  const leftImages = [
    { src: "/assets/pictures/home-page/banner-image-01.webp", position: "center 85%" },
    { src: "/assets/pictures/home-page/banner-image-02.webp", position: "center 80%" },
    { src: "/assets/pictures/home-page/banner-image-03.webp", position: "center 10%" },
    { src: "/assets/pictures/home-page/banner-image-04-02.webp", position: "center 10%" },
    { src: "/assets/pictures/home-page/banner-image-05.webp", position: "center 70%" }
  ];

  const rightImages = [
    { src: "/assets/pictures/home-page/banner-image-01-1.webp", position: "center 75%" },
    { src: "/assets/pictures/home-page/banner-image-02-01.webp", position: "center 20%" },
    { src: "/assets/pictures/home-page/banner-image-03-01.webp", position: "center 55%" },
    { src: "/assets/pictures/home-page/banner-image-04-01.webp", position: "center 30%" },
    { src: "/assets/pictures/home-page/banner-image-05-01.webp", position: "center 30%" }
  ];
// Huidige afbeelding bijhouden
const currentLeftImage = ref(0);
const currentRightImage = ref(0);

// Interval ID voor de slideshow
let slideshowInterval = null;

// Functie om de slideshow te starten
function startSlideshow() {
  // Start de interval timer
  slideshowInterval = setInterval(() => {
    nextImage();
  }, 7000); // Elke 7 seconden
}

// Functie om de interval te stoppen
function stopSlideshow() {
  if (slideshowInterval) {
    clearInterval(slideshowInterval);
  }
}

// Functie om de interval opnieuw te starten
function resetSlideshow() {
  stopSlideshow();  // Stop de huidige slideshow
  startSlideshow(); // Start de slideshow opnieuw
}

// Functies voor het navigeren naar de volgende en vorige afbeelding (voor beide afbeeldingen tegelijk)
function nextImage() {
  currentLeftImage.value = (currentLeftImage.value + 1) % leftImages.length;
  currentRightImage.value = (currentRightImage.value + 1) % rightImages.length;
  resetSlideshow(); // Reset de slideshow timer
}

function previousImage() {
  currentLeftImage.value = (currentLeftImage.value - 1 + leftImages.length) % leftImages.length;
  currentRightImage.value = (currentRightImage.value - 1 + rightImages.length) % rightImages.length;
  resetSlideshow(); // Reset de slideshow timer

}

  // Slider logica
  const currentIndex = ref(0);
  const maxIndex = 6; // Aantal afbeeldingen minus 1 (7 afbeeldingen)

  function moveLeft() {
    if (currentIndex.value > 0) {
      currentIndex.value--;
      updateSliderPosition();
    }
  }

  function moveRight() {
    if (currentIndex.value < maxIndex) {
      currentIndex.value++;
      updateSliderPosition();
    }
  }

  function updateSliderPosition() {
    const slider = document.querySelector('.content');
    const offset = currentIndex.value * 320; // Breedte van de afbeelding (320px)
    slider.style.transform = `translateX(-${offset}px)`;
  }

  onMounted(() => {
    startSlideshow(); // Start de slideshow bij het laden van de component
  });
</script>

<style scoped>
  .parallax {
    /* The image used */
    background-image: url("/public/assets/pictures/home-page/scroll-banner.webp");

    min-height: 450px;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
  }
  .parallax_02 {
    /* The image used */
    background-image: url("/public/assets/pictures/home-page/scroll_banner_02.webp");

    min-height: 450px;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  
  @media only screen and (min-width: 1920px) {
    .parallax_02 {
      min-height: 800px;
    }
  }

  @media only screen and (min-width: 1920px) {
    .parallax {
      min-height: 800px;
    }
  }


</style>
