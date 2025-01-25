<template>
  <footer class="bg-footerColor">
    <div class="flex grid grid-cols-1 sm:grid-cols-3 items-center justify-center px-4 py-12 sm:px-[200px]">
      <div>
        <p class="font-standard text-sm">
          Sanneloes van Kessel<br>
          Casteren, Noord-Brabant, Nederland<br>
          <a href="mailto:info@sanneloesfotografie.nl" class="hover:underline">info@sanneloesfotografie.nl</a><br>
          <a href="tel:+31617193407" class="hover:underline">Tel: 06-17193407</a><br>
          KVK: 77018753
        </p>
      </div>
      <div class="flex items-center justify-center">
        <a href="/"><nuxt-img src="/assets/pictures/logo_klein.webp" alt="Sanneloes Fotografie" class="w-[100px] sm:w-[200px] h-auto"/></a>
      </div>
      <div>
        <p class="font-standard text-sm text-right">
          <a href="/algemene-voorwaarden" class="hover:underline">Algemene Voorwaarden</a><br><br>

          <a href="/privacy-verklaring" class="hover:underline">Privacy Verklaring</a><br><br>

          <a href="/contact" class="hover:underline">FAQ</a>
        </p>
      </div>
    </div>
    
    <section class="flex grid grid-cols-2 items-center justify-center px-[150px] py-4 bg-buttonColor px-6 text-sm">	
      <div class="flex">
        <p class="text-white uppercase">
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