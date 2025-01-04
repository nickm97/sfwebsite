
<template>
  <div class="bg-lightBeige">
    
    <div class="justify-center flex flex-col items-center">
      <h2 class="text-sm font-serif font-thin mt-12 tracking-widest">BEHIND THE BRAND</h2>
      <p class="text-3xl font-serif font-light mt-6 tracking-tight font-black">Photographer & Your Newest Hype Woman</p>
      <nuxt-img
        placeholder
        src="/assets/pictures/loes2.jpg"
        alt="First Image"
        width="800"
        height="400"
        fit="cover"
        class="mt-12 filter grayscale"
      />

      <div class="flex flex-row mt-12 pb-12">
        <div class="w-[50%] px-36">
          <h4 class="text-4xl font-serif font-normal tracking-tight font-black">
            Hi, I'm Sanneloes
          </h4>
          <p class="text-4xl font-fancy mt-6 tracking-tight">
            If you like raw & honest photos,<br>I'm your wing woman.
          </p>
          <p class="text-lg font-sans font-light mt-6 tracking-tight">
            I'm a photographer based in the Netherlands. I love capturing the beauty of everyday life and the people in it. I'm here to help you feel confident and beautiful in front of the camera. Let's create some magic together!
          </p>
        </div>
        <div class="w-[50%] px-24">
          <nuxt-img
            placeholder
            src="/assets/pictures/loes-schattig.jpg"
            alt="First Image"
            width="800"
            height="800"
            fit="cover"
            class=""
          />
        </div>
      </div>
    </div>

  </div>
  <footer-sf></footer-sf>
</template>
  
  
<script setup>
  // setup() {
</script>
<style scoped>
  h1 {
    color: #333;
  }
  h2 {
    color: #333;
  }
</style>
  