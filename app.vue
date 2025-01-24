<template>
  <div>
  <head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=The+Seasons&display=swap" rel="stylesheet">
  </head>

    <!-- Navbar -->
    <nav class="bg-white text-black px-4 py-2 flex items-center h-[70px] border-b-1 border-gray-500">
      <!-- Grid-container -->
      <div class="grid grid-cols-3 w-full items-center">
        
        <!-- Left: Navigation Links -->
        <div class="flex items-center space-x-6 justify-start">
          <NuxtLink to="/" class="font-playFair tracking-wide text-sizeNavText hover:text-gray-400 hover:-translate-y-1 transform transition duration-300">
            HOME
          </NuxtLink>
          <NuxtLink to="/weddings" class="font-playFair tracking-wide text-sizeNavText hover:text-gray-400 hover:-translate-y-1 transform transition duration-300">
            WEDDINGS
          </NuxtLink>
          <NuxtLink to="/shoots" class="font-playFair tracking-wide text-sizeNavText hover:text-gray-400 hover:-translate-y-1 transform transition duration-300">
            SHOOTS
          </NuxtLink>
          <NuxtLink to="/shoots" class="font-playFair tracking-wide text-sizeNavText hover:text-gray-400 hover:-translate-y-1 transform transition duration-300">
            BRANDING
          </NuxtLink>
        </div>
        
        <!-- Middle: Logo -->
        <div class="flex justify-center">
          <NuxtLink to="/">
            <img src="/public/logo.svg" alt="Sanneloes Fotografie" class="w-[350px] h-auto" />
          </NuxtLink>
        </div>
        
        <!-- Right: Navigation Links -->
        <div class="flex items-center space-x-6 justify-end">
          <NuxtLink to="/portfolio" class="font-playFair tracking-wide text-sizeNavText hover:text-gray-400 hover:-translate-y-1 transform transition duration-300">
            PORTFOLIO
          </NuxtLink>
          <NuxtLink to="/daylightstudio" class="font-playFair tracking-wide text-sizeNavText hover:text-gray-400 hover:-translate-y-1 transform transition duration-300">
            DAYLIGHT STUDIO
          </NuxtLink>
          <NuxtLink to="/about" class="font-playFair tracking-wide text-sizeNavText hover:text-gray-400 hover:-translate-y-1 transform transition duration-300">
            ABOUT
          </NuxtLink>
          <NuxtLink to="/contact" class="font-playFair tracking-wide text-sizeNavText hover:text-gray-400 hover:-translate-y-1 transform transition duration-300">
            CONTACT
          </NuxtLink>
        </div>
        
      </div>
    </nav>


    <!-- Mobile Menu (conditional display) -->
    <div v-if="isMenuOpen" class="sm:hidden bg-offWhite text-black flex flex-col items-center space-y-4 p-4">
      <NuxtLink to="/" @click="closeMenu" class="font-playFair text-sizeNavText hover:text-gray-400">Home</NuxtLink>
      <NuxtLink to="/shoots" @click="closeMenu" class="font-playFair text-sizeNavText hover:text-gray-400">Shoots</NuxtLink>
      <NuxtLink to="/portfolio" @click="closeMenu" class="font-playFair text-sizeNavText hover:text-gray-400">Portfolio</NuxtLink>
      <NuxtLink to="/about" @click="closeMenu" class="font-playFair text-sizeNavText hover:text-gray-400">About</NuxtLink>
      <NuxtLink to="/contact" @click="closeMenu" class="font-playFair text-sizeNavText hover:text-gray-400">Contact</NuxtLink>
    </div>

    <!-- Page Content -->
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false, // Track the state of the mobile menu
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Toggle the menu
    },
    closeMenu() {
      this.isMenuOpen = false; // Close the menu when a link is clicked
    },
  },
};
</script>

<style scoped>
/* Optional styling for the hamburger icon */
button {
  background: none;
  border: none;
  padding: 0;
}
</style>
