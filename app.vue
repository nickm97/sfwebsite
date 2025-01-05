<template>
  <div>
  <head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=The+Seasons&display=swap" rel="stylesheet">
  </head>

    <!-- Navbar -->
    <nav class="bg-offWhite text-black px-4 py-2 flex items-center justify-between h-[70px] border-b border-gray-500">
       <!-- Left section: Hamburger Menu (Only on small screens) -->
      <!-- Left section: Hamburger Menu (Only on small screens) -->
      <div class="sm:hidden flex justify-between items-center w-full relative">
        <!-- Hamburger Icon (Left side) -->
        <button @click="toggleMenu" class="text-[30px] flex-shrink-0">
          <i class="fas fa-bars"></i> 
        </button>

        <!-- Logo in the center (visible on small screens) -->
        <div class="sm:hidden absolute left-1/2 transform -translate-x-1/2">
          <a href="/">
            <img src="/public/logo.svg" alt="Sanneloes Fotografie" class="w-[200px] h-auto" />
          </a>
        </div>
      </div>

      <!-- Left Section: 3 Links -->
      <div class="hidden sm:flex items-center space-x-4">
        <NuxtLink to="/" class="font-textNav tracking-wide text-sizeNavText hover:text-gray-400 hover:-translate-y-1 transform transition duration-300">
          HOME
        </NuxtLink>
        <NuxtLink to="/weddings" class="font-textNav tracking-wide text-sizeNavText hover:text-gray-400 hover:-translate-y-1 transform transition duration-300">
          WEDDINGS
        </NuxtLink>
        <NuxtLink to="/shoots" class="font-textNav tracking-wide text-sizeNavText hover:text-gray-400 hover:-translate-y-1 transform transition duration-300">
          SHOOTS
        </NuxtLink>
      </div>

      <!-- Middle: Logo -->
      <div class="hidden sm:flex justify-center items-center w-[250px] mx-auto cursor-pointer">
        <a href="/">
          <img src="/public/logo.svg" alt="Sanneloes Fotografie" class="w-[250px] h-auto" />
        </a>
      </div>

      <!-- Right Section: 3 Links -->
      <div class="hidden sm:flex items-center space-x-4">
        <NuxtLink to="/portfolio" class="font-textNav tracking-wide text-sizeNavText hover:text-gray-400 hover:-translate-y-1 transform transition duration-300">
          PORTFOLIO
        </NuxtLink>
        <NuxtLink to="/about" class="font-textNav tracking-wide text-sizeNavText hover:text-gray-400 hover:-translate-y-1 transform transition duration-300">
          ABOUT
        </NuxtLink>
        <NuxtLink to="/contact" class="font-textNav tracking-wide text-sizeNavText hover:text-gray-400 hover:-translate-y-1 transform transition duration-300">
          CONTACT
        </NuxtLink>
      </div>
    </nav>

    <!-- Mobile Menu (conditional display) -->
    <div v-if="isMenuOpen" class="sm:hidden bg-offWhite text-black flex flex-col items-center space-y-4 p-4">
      <NuxtLink to="/" @click="closeMenu" class="font-textNav text-sizeNavText hover:text-gray-400">Home</NuxtLink>
      <NuxtLink to="/shoots" @click="closeMenu" class="font-textNav text-sizeNavText hover:text-gray-400">Shoots</NuxtLink>
      <NuxtLink to="/portfolio" @click="closeMenu" class="font-textNav text-sizeNavText hover:text-gray-400">Portfolio</NuxtLink>
      <NuxtLink to="/about" @click="closeMenu" class="font-textNav text-sizeNavText hover:text-gray-400">About</NuxtLink>
      <NuxtLink to="/contact" @click="closeMenu" class="font-textNav text-sizeNavText hover:text-gray-400">Contact</NuxtLink>
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
