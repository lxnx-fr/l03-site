<template>
  <canvas id="canvas" class="orb-canvas"></canvas>
  <button class="randomise-colors" @click="updateBackground">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M512 255.1C512 256.9 511.1 257.8 511.1 258.7C511.6 295.2 478.4 319.1 441.9 319.1H344C317.5 319.1 296 341.5 296 368C296 371.4 296.4 374.7 297 377.9C299.2 388.1 303.5 397.1 307.9 407.8C313.9 421.6 320 435.3 320 449.8C320 481.7 298.4 510.5 266.6 511.8C263.1 511.9 259.5 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256V255.1zM96 255.1C78.33 255.1 64 270.3 64 287.1C64 305.7 78.33 319.1 96 319.1C113.7 319.1 128 305.7 128 287.1C128 270.3 113.7 255.1 96 255.1zM128 191.1C145.7 191.1 160 177.7 160 159.1C160 142.3 145.7 127.1 128 127.1C110.3 127.1 96 142.3 96 159.1C96 177.7 110.3 191.1 128 191.1zM256 63.1C238.3 63.1 224 78.33 224 95.1C224 113.7 238.3 127.1 256 127.1C273.7 127.1 288 113.7 288 95.1C288 78.33 273.7 63.1 256 63.1zM384 191.1C401.7 191.1 416 177.7 416 159.1C416 142.3 401.7 127.1 384 127.1C366.3 127.1 352 142.3 352 159.1C352 177.7 366.3 191.1 384 191.1z"/>
    </svg>
    <span class="da">
      Regenerate Colors
    </span>
  </button>
  <div class="h-screen text-black flex items-center justify-center">
    Please close this page. Here is no valueable information<br/>
    <h1 class="text-white px-4">
      Improve
    </h1>
  </div>

</template>

<script setup>
import {updateBackground, createBackground} from "assets/js/background";

onMounted(() => {
  createBackground();
});
</script>

<style scoped lang="sass">
.randomise-colors
  box-shadow: 0 0 15px 0 rgba(0,0,0,0.2)
  background-color: transparent
  transition: width 0.5s ease-in-out
  @apply flex gap-3 fixed top-2 left-2 px-2 py-1.5 font-semibold text-xs transition-colors duration-300 ease-in-out rounded-full
  svg
    width: 16px
  .da
    display: none
  &:hover
    .da
      display: block
    transition: width 0.5s ease-in-out
    @apply bg-yellow-400

</style>