<template>
  <div class="bg-spotlight" />
  <div class="bg-spotlight" />
  <div class="default-page">
    <img src="/lxms-logo-500.webp" alt="Logo" width="500" height="127"/>
    <div class="main-card">
      <h1 class="card-title">Maintenance</h1>
      <h2 class="card-subtitle">turning ideas into products</h2>
      <div class="card-box">
        <div class="title">Get notified</div>
      </div>
    </div>
  </div>
</template>
<style lang="sass">
@font-face
  font-family: 'NexaBold'
  src: url('assets/fonts/NexaBold/NexaBold.woff2') format('woff2')
  font-weight: normal
  font-style: normal
  font-display: swap
body, html, #__nuxt
  @apply bg-black max-w-full overflow-x-hidden
.default-page
  @apply text-center mx-auto h-screen flex items-center justify-center flex-col gap-6 animate-fadescale
  img
    @apply aspect-auto max-w-xs md:max-w-sm
</style>