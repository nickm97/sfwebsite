<template>
    <footer class="bg-offWhite-800 text-black font-textNav py-4 px-4 sm:px-20">
    <!-- Flex Container for Footer -->
    <div class="flex flex-col sm:flex-row items-center justify-center w-full space-y-4 sm:space-y-0">
      
      <!-- Logo -->
      <div class="flex items-center justify-center sm:justify-start -mt-3 sm:mt-0 -mb-4 sm:mb-0 cursor-pointer">
        <a href="/"><img src="/assets/pictures/logo-klein.svg" alt="Your Logo" class="w-[100px] sm:w-[125px] h-auto" /></a>
      </div>

      <!-- Footer Links -->
      <div class="flex flex-wrap items-center justify-center text-center space-x-2 sm:space-x-4">
        <a href="mailto:info@sanneloesfotografie.nl" class="text-sm sm:text-lg hover:underline">info@sanneloesfotografie.nl</a>
        <span>|</span>
        <a href="tel:+31617193407" class="text-sm sm:text-lg hover:underline">+31617193407</a>
        <span>|</span>
        <a href="/contact" class="text-sm sm:text-lg hover:underline">Contact</a>
        <span>|</span>
        <a href="/algemene-voorwaarde" class="text-sm sm:text-lg hover:underline">Algemene Voorwaarde</a>
        <span>|</span>
        <a href="/privacy-verklaring" class="text-sm sm:text-lg hover:underline">Privacy Verklaring</a>
        <span>|</span>
        <span class="text-sm sm:text-lg">KvK 77018753</span>
      </div>
    </div>

    <!-- Social Media - Outside of Links Section -->
    <div class="flex items-center justify-center mt-2 sm:-mt-8">	
      <a href="https://www.instagram.com/sanneloesfotografie/" target="_blank" class="text-4xl instagram-icon">
        <i class="fa-brands fa-instagram"></i>
      </a>
    </div>

    <!-- Copyright Section -->
    <div class="mt-4 text-center">
      <p class="text-sm">© 2024 Sanneloes Fotografie. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
  .instagram-icon i {
    background: linear-gradient(45deg, #F77737, #FDCB82, #9B59B6);
    background-clip: text;
    color: transparent;
  }
</style>