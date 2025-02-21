<template>
    <div class="flex flex-col items-center px-4 sm:pb-16 sm:pt-10 pb-6 bg-background_4">
        <p class="hidden sm:flex uppercase font-playFair text-center text-lg sm:text-4xl py-4">
            What the brides and grooms said
        </p>
        <p class="hidden sm:flex uppercase font-standard text-center text-sm sm:text-md pb-4">
            TAP TO READ
        </p>
      <p class="sm:hidden uppercase font-playFair text-center text-4xl sm:text-4xl sm:py-4 pt-4 sm:pt-0">
        WEDDING<br>REVIEWS
      </p>
      <p class="sm:hidden uppercase font-standard font-light text-[12px] text-center sm:text-4xl py-4">
        Scroll to see more and tap to read
      </p>
      <!-- Desktop Grid Layout -->
      <div class="hidden sm:grid grid-cols-5 gap-8">
        <ReviewCard v-for="(review, index) in reviews" :key="index" :review="review" />
      </div>
  
      <!-- Mobile Slider -->
      <div class="sm:hidden flex flex-col items-center relative w-full overflow-hidden">
        <div ref="sliderContainer" class="flex gap-6 overflow-x-auto scroll-smooth px-4 whitespace-nowrap w-full">
          <div v-for="(review, index) in reviews" :key="index" class="shrink-0 w-[225px]">
            <ReviewCard :review="review" />
          </div>
        </div>
  
        <!-- Navigatie Knoppen
        <div class="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
          <button @click="prevReview" class="bg-black text-white p-2 rounded-full">◀</button>
          <button @click="nextReview" class="bg-black text-white p-2 rounded-full">▶</button>
        </div>-->
      </div> 
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const reviews = ref([
  {
    name: "Sam & Inge",
    date: "13 juli 2024",
    image: "/assets/pictures/sam&inge.webp",
    text: "Hoe zoek je nou dé juiste fotograaf voor je bruiloft? Nou: boek Sanneloes! Zij is diegene die je er bij wilt hebben op je dag: vrolijk, energiek, enthousiast en gepassioneerd. Een daggast met een camera in haar handen! De foto’s overtroffen al onze verwachtingen! Na een paar dagen al de méga preview en wat later alle foto’s. Ze zijn prachtig en hebben alles zo vastgelegd dat we de dag telkens opnieuw kunnen beleven én momenten konden beleven waar we zelf niet bij waren geweest. Het contact met Sanneloes is heel goed, ze reageert snel en is mega betrokken. Sanneloes, je bent echt een topper!"
  },
  {
    name: "Nicky & Ward",
    date: "24 augustus 2024",
    image: "/assets/pictures/nicky&ward.webp",
    text: "Wij zijn ontzettend blij met de prachtige foto's die Sanneloes voor ons heeft gemaakt tijdens onze bruiloft. Een herinnering voor het leven. Zo'n lieve meid, die vanaf moment één ons een vertrouwd gevoel gaf en ons liet shinen. Met oog voor detail, enthousiasme en passie voor haar vak is zij de beste fotograaf die wij kennen. Wij zijn Sanneloes dankbaar voor deze onvergetelijke herinnering aan onze dag. Liefs Ward & Nicky"
  },
  {
    name: "Brit & Lotte",
    date: "12 oktober 2024",
    image: "/assets/pictures/brit&lotte.webp",
    text: "We zijn zó blij met het resultaat! Vanaf het eerste contact voelde het alsof ze precies begreep wat we wilden. Op de dag zelf mengde ze zich perfect tussen de gasten; het voelde alsof ze er gewoon bij hoorde. Hierdoor heeft ze de meest spontane en pure momenten vastgelegd. Haar oog voor detail, creativiteit en professionaliteit zijn echt uitzonderlijk. De foto's brengen ons direct terug naar die bijzondere dag, met al de emoties en liefde die we voelden. We kunnen Sanneloes niet genoeg bedanken en raden haar van harte aan aan iedereen die op zoek is naar een fotograaf met passie en talent. Veel liefs, B&L"
  },
  {
    name: "Luuk & Mandy",
    date: "5 oktober 2024",
    image: "/assets/pictures/luuk&mandy.webp",
    text: "Mijn man en ik hebben Sanneloes als fotograaf gekozen voor onze bruiloft op 5 oktober 2024. Wat heeft ze het geweldig gedaan! Sanneloes is heel sociaal en toegankelijk, waardoor er totaal geen ongemakkelijke momenten waren. Ze heeft echt geweldig mooie foto’s gemaakt. De previewfoto’s waren al prachtig en het krijgen van alle foto’s was ook heel mooi. De kracht van Sanneloes is volgens ons het maken van spontane foto’s. Dus geen ongemakkelijke en statische foto’s. Sanneloes, nogmaals heel erg bedankt!"
  },
  {
    name: "Rick & Marlou",
    date: "24 mei 2024",
    image: "/assets/pictures/rick&marlou.webp",
    text: "Wat een fijne meid om erbij te hebben, door haar gezelligheid en de rust die ze uitstraalt ;). De foto’s die we hebben ontvangen zijn! Ookal hadden wij een regenachtige dag, onze dag was perfect! En hier had Sanneloes een groot aandeel in.. Ze was heel creatief met de regen en daardoor zijn de foto’s super mooi en origineel geworden! Sterker nog, de foto’s met paraplu zijn zelfs onze favoriet 😍. Het was dan ook echt een feestje om de ‘ruime’ preview te ontvangen tijdens onze honeymoon. En de rest van de foto’s waren ook snel binnen :) Inmiddels is onze bruiloft alweer 2,5 maand geleden maar dankzij de foto’s blijven we mega nagenieten! Wij raden iedereen een ‘Sanneloes’ aan op de mooiste dag van je leven!!"
  }
])

  
  const sliderContainer = ref(null)
  
  const nextReview = () => {
    if (sliderContainer.value) {
      sliderContainer.value.scrollBy({ left: 250, behavior: "smooth" }) // Scroll naar rechts
    }
  }
  
  const prevReview = () => {
    if (sliderContainer.value) {
      sliderContainer.value.scrollBy({ left: -250, behavior: "smooth" }) // Scroll naar links
    }
  }
  
  onMounted(() => {
    if (sliderContainer.value) {
      sliderContainer.value.scrollLeft = 2 // Begin altijd bij de eerste review
    }
  })
  </script>
  
  <style scoped>
  /* something */
  </style>
  