<template>
  <div class="flex flex-col items-center px-4 py-16">
    <p class="uppercase font-playFair text-center text-lg sm:text-4xl py-4">
      What the brides and grooms said
    </p>

    <!-- Desktop Grid Layout -->
    <div class="hidden sm:grid grid-cols-5 gap-8">
      <ReviewCard v-for="(review, index) in reviews" :key="index" :review="review" />
    </div>

    <!-- Mobile Slider -->
    <div class="sm:hidden flex flex-col items-center relative w-full">
      <ReviewCard :review="reviews[currentIndex]" />
      
      <!-- Navigatie Knoppen -->
      <div class="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-0">
        <button @click="prevReview" class="skip-button text-black p-2 rounded-full">
          <i class="fa-solid fa-chevron-left text-[16px]"></i>
        </button>
        <button @click="nextReview" class="skip-button text-black p-2 rounded-full">
          <i class="fa-solid fa-chevron-right text-[16px]"></i>
        </button>
      </div>
    </div>
  </div>
  
</template>

<script setup>
import { ref } from 'vue'

// Review data
const reviews = ref([
  {
    name: "Sam & Inge",
    date: "13/Jul/24",
    image: "/assets/pictures/sam&inge.jpg",
    text: "Hoe zoek je nou dé juiste fotograaf voor je bruiloft? Nou: boek Sanneloes! Zij is diegene die je er bij wilt hebben op je dag: vrolijk, energiek, enthousiast en gepassioneerd. Een daggast met een camera in haar handen! De foto’s overtroffen al onze verwachtingen! Na een paar dagen al de méga preview en wat later alle foto’s. Ze zijn prachtig en hebben alles zo vastgelegd dat we de dag telkens opnieuw kunnen beleven én momenten konden beleven waar we zelf niet bij waren geweest. Het contact met Sanneloes is heel goed, ze reageert snel en is mega betrokken. Sanneloes, je bent echt een topper!"
  },
  {
    name: "Nicky & Ward",
    date: "24/Aug/24",
    image: "/assets/pictures/nicky&ward.jpg",
    text: "Wij zijn ontzettend blij met de prachtige foto's die Sanneloes voor ons heeft gemaakt tijdens onze bruiloft. Een herinnering voor het leven. Zo'n lieve meid, die vanaf moment één ons een vertrouwd gevoel gaf en ons liet shinen. Met oog voor detail, enthousiasme en passie voor haar vak is zij de beste fotograaf die wij kennen. Wij zijn Sanneloes dankbaar voor deze onvergetelijke herinnering aan onze dag. Liefs Ward & Nicky"
  },
  {
    name: "Brit & Lotte",
    date: "12/Okt/24",
    image: "/assets/pictures/brit&lotte.jpg",
    text: "We zijn zó blij met het resultaat! Vanaf het eerste contact voelde het alsof ze precies begreep wat we wilden. Op de dag zelf mengde ze zich perfect tussen de gasten; het voelde alsof ze er gewoon bij hoorde. Hierdoor heeft ze de meest spontane en pure momenten vastgelegd. Haar oog voor detail, creativiteit en professionaliteit zijn echt uitzonderlijk. De foto's brengen ons direct terug naar die bijzondere dag, met al de emoties en liefde die we voelden. We kunnen Sanneloes niet genoeg bedanken en raden haar van harte aan aan iedereen die op zoek is naar een fotograaf met passie en talent. Veel liefs, B&L"
  },
  {
    name: "Luuk & Mandy",
    date: "5/Okt/24",
    image: "/assets/pictures/luuk&mandy.jpg",
    text: "Mijn man en ik hebben Sanneloes als fotograaf gekozen voor onze bruiloft op 5 oktober 2024. Wat heeft ze het geweldig gedaan! Sanneloes is heel sociaal en toegankelijk, waardoor er totaal geen ongemakkelijke momenten waren. Ze heeft echt geweldig mooie foto’s gemaakt. De previewfoto’s waren al prachtig en het krijgen van alle foto’s was ook heel mooi. De kracht van Sanneloes is volgens ons het maken van spontane foto’s. Dus geen ongemakkelijke en statische foto’s. Sanneloes, nogmaals heel erg bedankt!"
  },
  {
    name: "Rick & Marlou",
    date: "24/Mei/24",
    image: "/assets/pictures/rick&marlou.jpg",
    text: "Wat een fijne meid om erbij te hebben, door haar gezelligheid en de rust die ze uitstraalt ;). De foto’s die we hebben ontvangen zijn! Ookal hadden wij een regenachtige dag, onze dag was perfect! En hier had Sanneloes een groot aandeel in.. Ze was heel creatief met de regen en daardoor zijn de foto’s super mooi en origineel geworden! Sterker nog, de foto’s met paraplu zijn zelfs onze favoriet 😍. Het was dan ook echt een feestje om de ‘ruime’ preview te ontvangen tijdens onze honeymoon. En de rest van de foto’s waren ook snel binnen :) Inmiddels is onze bruiloft alweer 2,5 maand geleden maar dankzij de foto’s blijven we mega nagenieten! Wij raden iedereen een ‘Sanneloes’ aan op de mooiste dag van je leven!!"
  }
])

const currentIndex = ref(0)

// Navigatie functies
const nextReview = () => {
  currentIndex.value = (currentIndex.value + 1) % reviews.value.length
}
const prevReview = () => {
  currentIndex.value = (currentIndex.value - 1 + reviews.value.length) % reviews.value.length
}
</script>

<style scoped>
/* .skip-button {
  transition: all 0.2s ease-in-out;
}
.skip-button:hover {
  background-color: gray;
} */
</style>

    <!-- Titel -->
    <!-- <div class="pb-2">
      <nuxt-img
        placeholder
        src="/assets/pictures/home-page/reviews.webp"
        alt="Reviews"
        class="h-[130px]"
      />
    </div> -->