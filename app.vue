<template>
  <div>
  <head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=The+Seasons&display=swap" rel="stylesheet">
  </head>

    <!-- Navbar -->
    <nav class="sticky top-0 z-[100] bg-white text-black sm:px-12 py-2 flex items-center h-[70px] border-b-1 border-gray-500">

      <div class="hidden lg:grid grid-cols-3 w-full items-center">
        
        <div class="flex items-center space-x-6 justify-start">
          <NuxtLink to="/" class="font-standard tracking-wide text-sizeNavText hover:text-gray-400 hover:-translate-y-1 transform transition duration-300">
            HOME
          </NuxtLink>
          <NuxtLink to="/weddings" class="font-standard tracking-wide text-sizeNavText hover:text-gray-400 hover:-translate-y-1 transform transition duration-300">
            WEDDINGS
          </NuxtLink>
          <!-- <NuxtLink to="/shoots" class="font-standard tracking-wide text-sizeNavText hover:text-gray-400 hover:-translate-y-1 transform transition duration-300">
            SHOOTS
          </NuxtLink> -->
          <!-- SHOOTS met dropdown -->
          <div class="relative group">
            <NuxtLink to="/shoots" class="font-standard tracking-wide text-sizeNavText hover:text-gray-400 hover:-translate-y-1 transform transition duration-300">
              SHOOTS
            </NuxtLink>
            <!-- Dropdown-menu -->
            <div class="absolute left-0 mt-2 w-48 bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <NuxtLink to="/pregnancy" class="block px-4 py-2 text-black hover:bg-gray-100 font-standard uppercase">Pregnancy</NuxtLink>
              <NuxtLink to="/newborn" class="block px-4 py-2 text-black hover:bg-gray-100 font-standard uppercase">Newborn</NuxtLink>
              <NuxtLink to="/family" class="block px-4 py-2 text-black hover:bg-gray-100 font-standard uppercase">Family</NuxtLink>
              <NuxtLink to="/lovers" class="block px-4 py-2 text-black hover:bg-gray-100 font-standard uppercase">Lovers</NuxtLink>
              <NuxtLink to="/boudoir" class="block px-4 py-2 text-black hover:bg-gray-100 font-standard uppercase">Boudoir</NuxtLink>
            </div>
          </div>

          <NuxtLink to="/branding" class="font-standard tracking-wide text-sizeNavText hover:text-gray-400 hover:-translate-y-1 transform transition duration-300">
            BRANDING
          </NuxtLink>
          <NuxtLink to="/portfolio" class="font-standard tracking-wide text-sizeNavText hover:text-gray-400 hover:-translate-y-1 transform transition duration-300">
            PORTFOLIO
          </NuxtLink>
        </div>
        
        <div class="flex justify-center">
          <NuxtLink to="/">
            <img src="/public/logo.svg" alt="Sanneloes Fotografie" class="w-[350px] h-auto" />
          </NuxtLink>
        </div>
        
        <div class="flex items-center space-x-6 justify-end">
          <NuxtLink to="/event-styling" class="font-standard tracking-wide text-sizeNavText hover:text-gray-400 hover:-translate-y-1 transform transition duration-300">
            EVENT STYLING
          </NuxtLink>
          <NuxtLink to="/daylightstudio" class="font-standard tracking-wide text-sizeNavText hover:text-gray-400 hover:-translate-y-1 transform transition duration-300">
            DAYLIGHT STUDIO
          </NuxtLink>
          <NuxtLink to="/about" class="font-standard tracking-wide text-sizeNavText hover:text-gray-400 hover:-translate-y-1 transform transition duration-300">
            ABOUT
          </NuxtLink>
          <NuxtLink to="/contact" class="font-standard tracking-wide text-sizeNavText hover:text-gray-400 hover:-translate-y-1 transform transition duration-300">
            CONTACT
          </NuxtLink>
        </div>
        
      </div>

      <div class="lg:hidden w-full flex items-center px-2 justify-between">
        <div class="flex justify-start">
            <NuxtLink to="/">
              <img src="/public/logo.svg" alt="Sanneloes Fotografie" class="w-[250px] h-auto" />
            </NuxtLink>
          </div>

          
        <div v-show="menuOpen" class="absolute top-[70px] left-0 w-full bg-white border-t border-gray-300 shadow-lg lg:hidden">
          <div class="flex flex-col items-center space-y-4 py-6">
            <NuxtLink to="/" class="nav-link-mobile" @click="closeMenu">HOME</NuxtLink>
            <NuxtLink to="/weddings" class="nav-link-mobile" @click="closeMenu">WEDDINGS</NuxtLink>
            <NuxtLink to="/shoots" class="nav-link-mobile" @click="closeMenu">SHOOTS</NuxtLink>
            <NuxtLink to="/branding" class="nav-link-mobile" @click="closeMenu">BRANDING</NuxtLink>
            <NuxtLink to="/portfolio" class="nav-link-mobile" @click="closeMenu">PORTFOLIO</NuxtLink>
            <NuxtLink to="/event-styling" class="nav-link-mobile" @click="closeMenu">EVENT STYLING</NuxtLink>
            <NuxtLink to="/daylightstudio" class="nav-link-mobile" @click="closeMenu">DAYLIGHT STUDIO</NuxtLink>
            <NuxtLink to="/about" class="nav-link-mobile" @click="closeMenu">ABOUT</NuxtLink>
            <NuxtLink to="/contact" class="nav-link-mobile" @click="closeMenu">CONTACT</NuxtLink>
          </div>
        </div>
        <!-- <button @click="toggleMenu" class="lg:hidden text-3xl p-2">
            <i :class="menuOpen ? 'fa-solid fa-xmark' : 'fa-light fa-bars'"></i>
        </button> -->
        <button @click="toggleMenu" class="lg:hidden text-3xl p-2">
  <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" class="w-8 h-8">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
  </svg>
  <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" class="w-8 h-8">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
  </svg>
</button>
      </div>

    </nav>

    
    <!-- Page Content -->
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

// Sluit menu als je ergens buiten klikt
const closeMenu = () => {
  menuOpen.value = false
}
</script>


