<template>
  <div id="menu-btn" @click="loadMenu">
    <div class="point-wrapper">
      <svg fill="#000" width="5px" height="5px" viewBox="0 0 64 64">
        <g transform="matrix(1,0,0,1,-576,-320)">
          <g id="circle-filled" transform="matrix(1.70002,0,0,1.70002,-316.778,-246.387)">
            <circle cx="543.992" cy="352" r="14.13"></circle>
          </g>
        </g>
      </svg>
    </div>
    <svg class="ring-wrapper" width="64" height="64" viewBox="74.38 82.56 155.08 135.44">
      <defs>
        <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
      </defs>
      <g>
        <use xlink:href="#circlePath" fill="none"/>
        <text fill="#000" class="text-[1.55rem] font-bold uppercase font-sans">
          <textPath xlink:href="#circlePath">Menu • Menu • Menu • Menu •</textPath>
        </text>
      </g>
    </svg>
  </div>
  <div v-if="state.menuOpen" id="menu">
    <div class="tag-box">
      <div class="tag projects" >Projects</div>
      <div class="tag"><NuxtLink to="/about">About</NuxtLink></div>
      <div class="tag">Imprint</div>
      <div class="tag">Home</div>
    </div>
  </div>
</template>

<script setup>
import {addObject, setCursorStyle} from "assets/js/dynamicCursor";

const state = reactive({
  menuOpen: false,
});

function loadMenu() {
  if (state.menuOpen) {
    let opacity = 1;
    const loop = setInterval(function () {
      if (opacity > 0 ) {
        opacity -= 0.1;
        if (document.querySelector('#menu') !== null) {
          document.querySelector('#menu').style.opacity = opacity;

        } else {
          clearInterval(loop);
        }
      } else {
        clearInterval(loop);
      }
    }, 30);
    setTimeout(() => {
      state.menuOpen = false;
    }, 300);
  } else {
    state.menuOpen = true
    addObject('.projects', (element) => {
        setCursorStyle('#fff', '#fff', '0px', '20px');
      }, (element) => {
    });
  }
}

onMounted(() => {
  addObject('#menu-btn', (element) => {
    setCursorStyle('#fff', '#fff', '50px', '20px');
  }, (element) => {
  });
});
</script>

<style scoped lang="sass">

.ring-wrapper
  animation: rotate 5s linear infinite
  &:hover
    //animation-play-state: paused
    g text
      @apply ease-in-out duration-200
#menu
  @apply absolute grid grid-cols-2 h-screen bg-neutral-900 w-screen z-[600] animate-fadein
  .tag-box
    border: 1px solid yellow
    @apply grid grid-rows-4 place-items-center place-content-center
    .tag
      @apply animate-fadescale text-9xl
#menu-btn
  @apply fixed flex items-center justify-center right-6 top-6 z-[610]
  .point-wrapper
    @apply text-white absolute w-[80px] h-[80px] flex justify-center items-center
@keyframes rotate
  to
    transform: rotate(-360deg)
</style>