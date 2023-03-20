<template>
  <div id="about-page">
    <h1 class="page-title"></h1>
    <div class="page-content">
      <div class="hero-section">
        <div class="col-span-2 uppercase font-sans gap-0 z-10">
          <h1 class="first" >
            Do
          </h1>
          <h1 class="second">
            what
          </h1>
          <h1 class="third">
            you
          </h1>
          <h1 class="fourth">
            can't
          </h1>
        </div>
        <div class="img-section">
          <img src="../assets/img/meadadad.jpeg" alt="hero image">
        </div>
      </div>
      <div class="h-[50px] bg-white"></div>
      <div class="dsd">
        <div class="col-span-2 uppercase font-sans gap-0 z-10">
          <h1 class="first" >
            Do
          </h1>
          <h1 class="second">
            what
          </h1>
          <h1 class="third">
            you
          </h1>
          <h1 class="fourth">
            can't
          </h1>
        </div>
        <div class="img-section">
          <img src="../assets/img/meadadad.jpeg" alt="hero image">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $ScrollReveal } = useNuxtApp();
async function initScrollReveal() {
  const easingType = "cubic-bezier(1,.2,.32,.93)";
  const origin = "left";
  const distance = "200px";
  let initial = {
    first: true,
    second: true,
    third: true,
    fourth: true,
  };
  const options = {
    distance: distance,
    origin: origin,
    easing: easingType,
    cleanup: true,
    delay: 300,
    duration: 700,
    viewFactor: 0.3
  };
  await $ScrollReveal().reveal(".hero-section .first", options);

  options.delay = 900;
  await $ScrollReveal().reveal(".hero-section .second", options);

  options.delay = 1500;
  await $ScrollReveal().reveal(".hero-section .third", options);

  options.delay = 2100;
  await $ScrollReveal().reveal(".hero-section .fourth", options);
}

onMounted(() => {
  (async () => {
    await initScrollReveal();
  })();
});
</script>
<style lang="sass">

#about-page
  @apply bg-neutral-800 h-full py-6
  .hero-section
    @apply grid grid-cols-5 gap-0 relative
    .first
      font-size: 9rem
      line-height: 85%
      @apply italic
    .second
      font-size: 10rem
      line-height: 85%
    .third
      font-size: 18rem
      line-height: 85%
      @apply italic pl-3.5
    .fourth
      font-size: 18rem
      line-height: 85%


    h1
      @apply text-[#FFD796] font-bold ml-16
    .img-section
      @apply col-span-3 relative flex justify-end
      img
        @apply rounded-2xl w-4/5 h-full object-cover z-[2]
  .page-content
    @apply backdrop-blur-[50px] p-10 overflow-hidden mx-6 rounded-3xl bg-neutral-900
    h3
      @apply w-fit text-2xl pt-2 text-[#FFD796]
    p
      @apply pb-2 text-neutral-500
    span
      @apply text-neutral-300
    a
      @apply no-underline text-white
  .highlight
    display: table
    @apply relative text-white no-underline transition-all
    &:hover
      transform: skew(-10deg)
      letter-spacing: 2px
      @apply transition-all duration-200 ease-in-out
      &:after
        @apply scale-x-100 origin-bottom-left
    &:after
      display: table-cell
      @apply w-full absolute -bottom-0.5 left-0 h-[4px] content-[''] bg-[#FFD796] transition-transform duration-200 ease-in-out scale-x-0 origin-bottom-right

</style>
