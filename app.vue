<template>
  <Navigation/>
  <!--<OldMenu/>-->
  <!--<NavTest/>-->
  <SitePreloader />
  <!--<ReadingProgressBar/>-->
  <!--<Menu/>-->
  <!--<CookieBanner/>-->
  <DevOnly>
    <TWScreen/>
  </DevOnly>
  <NuxtPage/>
  <!--<Cursor/>-->
</template>
<script setup>

</script>
<style lang="sass">
@font-face
  font-family: 'Poppins'
  src: url('assets/fonts/Poppins/Poppins-Medium.ttf') format('truetype')
  font-weight: 500
  font-style: normal
  font-display: swap
#__nuxt, html, body
  --hue: none
  --hue-complimentary1: none
  --hue-complimentary2: none
  --dark-color: hsl(var(--hue), 100%, 9%)
  --light-color: hsl(var(--hue), 95%, 98%)
  --base: hsl(var(--hue), 95%, 50%)
  --complimentary1: hsl(var(--hue-complimentary1), 95%, 50%)
  --complimentary2: hsl(var(--hue-complimentary2), 95%, 50%)
  --bg-gradient: linear-gradient(to bottom, hsl(var(--hue), 95%, 99%), hsl(var(--hue), 95%, 84%))
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  --font-family: "Poppins", system-ui
  font-family: var(--font-family)
  &.cursoring, &.cursoring *, &.cursoring *:hover
    cursor: none
  @apply max-w-full overflow-x-hidden

.site-preload
  &.animated
    @apply scale-[30%] rounded-[8.75vw]
  @apply grid grid-cols-1 place-items-center place-content-center h-screen text-black bg-black text-white
#presite
  box-shadow: 2px 9px 64px 3px rgba(0,0,0,0.75)
  @apply bg-black h-screen w-full grid grid-cols-1 place-items-center place-content-center absolute top-0 left-0 z-50
  button
    font-size: calc(100vw / 10)
    @apply p-4 rounded-lg text-center text-white font-thin
.orb-canvas
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  pointer-events: none
  z-index: -1
  background: var(--bg-gradient)
  filter: blur(70px)
  -webkit-backface-visibility: hidden
  -webkit-perspective: 1000px
  -webkit-transform: translate3d(0,0,0) translateZ(0)
  -ms-transform: translate3d(0,0,0) translateZ(0)
  backface-visibility: hidden
  perspective: 1000px
  transform: translate3d(0,0,0) translateZ(0)
</style>