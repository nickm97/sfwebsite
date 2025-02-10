<template>
  <footer class="bg-footerColor">
    <div class="flex grid grid-cols-1 sm:grid-cols-3 items-center justify-center px-4 py-6 sm:py-12 sm:px-[200px]">
      <div class="text-center sm:text-left mb-4 sm:mb-0">
        <p class="font-standard text-sm">
          Sanneloes van Kessel<br>
          Casteren, Noord-Brabant, Nederland<br>
          <a href="mailto:info@sanneloesfotografie.nl" class="hover:underline">info@sanneloesfotografie.nl</a><br>
          <a href="tel:+31617193407" class="hover:underline">Tel: 06-17193407</a><br>
          KVK: 77018753
        </p>
      </div>
      <div class="flex items-center justify-center mb-4 sm:mb-0">
        <a href="/"><nuxt-img src="/assets/pictures/logo_klein.webp" alt="Sanneloes Fotografie" class="w-[200px] sm:w-[200px] h-auto"/></a>
      </div>
      <div>
        <p class="font-standard text-center text-sm sm:text-right">
          <a href="/algemene-voorwaarden" class="hover:underline">Algemene Voorwaarden</a>
          <br class="sm:inline"> <!-- 1 enter op kleine schermen -->
          <br class="hidden sm:inline"> <!-- Extra enter op grote schermen -->

          <a href="/privacy-verklaring" class="hover:underline">Privacy Verklaring</a>
          <br class="sm:inline"> <!-- 1 enter op kleine schermen -->
          <br class="hidden sm:inline"> <!-- Extra enter op grote schermen -->

          <!-- <a @click="navigateToSection('faq')" class="hover:underline cursor-pointer">FAQ</a> -->
          <a href="/FAQS" class="hover:underline">FAQ</a>

          
        </p>
      </div>
    </div>
    
    <section class="flex grid grid-cols-2 items-center justify-center px-[10px] sm:px-[150px] py-4 bg-buttonColor text-sm">	
      <div>
        <p class="text-white uppercase whitespace-nowrap">
          © 2025 Sanneloes Fotografie
        </p>
      </div>
      <!-- Social Media - Outside of Links Section -->
      <div class="flex justify-end">	
        <a href="https://www.instagram.com/sanneloesfotografie/" target="_blank" class="text-4xl text-white instagram-icon">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
    </section>

  </footer>
</template>

<style scoped>
  /* .instagram-icon i {
    background: linear-gradient(45deg, #F77737, #FDCB82, #9B59B6);
    background-clip: text;
    color: transparent;
  } */
   
</style>

<script>

// export default {
//   methods: {
//   navigateToSection(sectionId) {
//     const targetPage = '/contact';

//     if (this.$route && this.$route.path !== targetPage) {
//       // Als je Vue Router gebruikt, navigeer naar de andere pagina
//       this.$router.push(targetPage).then(() => {
//         // Wacht even om er zeker van te zijn dat de DOM is geladen
//         this.scrollToSectionAfterNavigation(sectionId);
//       });
//     } else if (window.location.pathname !== targetPage) {
//       // Als je geen Vue Router gebruikt, navigeer met window.location
//       window.location.href = `${targetPage}#${sectionId}`;
      
//       // Gebruik een event listener om te wachten tot de pagina is geladen
//       window.addEventListener('load', () => {
//         this.scrollToSection(sectionId);
//       });
//     } else {
//       // Als je al op de pagina bent, scroll direct
//       this.scrollToSection(sectionId);
//     }
//   },

//   scrollToSectionAfterNavigation(sectionId) {
//     // Wacht een klein beetje na navigatie voor scrollen
//     setTimeout(() => {
//       this.scrollToSection(sectionId);
//     }, 100); // Pas aan indien nodig
//   },

//   scrollToSection(sectionId) {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   }
// }




// };

</script>