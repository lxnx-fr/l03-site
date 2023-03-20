<template>
  <div id="tf2-solo-page">
    <div class="page-content">
      <div class="hero-section">
        <div class="col-span-3 uppercase font-sans gap-0 z-10">
          <h1 class="first" >
            saka
          </h1>
          <h1 class="third">
            Solo
          </h1>
        </div>
      </div>
    </div>
    <div class="tabs">
      <div class="tab">
        <div class="title">Changelog</div>
        <div class="tab-content">
          <div>
            <h3>Release 1.3</h3>
            <p>
              <span>lx media solutions</span><br>
              Bindsachser Straße 20<br>
              63683 Ortenberg<br>
              Telefon: <a href="tel:4916092055319">+49 160 92055319</a><br>
              E-Mail: <a href="mailto:hi@l03.dev">hi@l03.dev</a>
            </p>
          </div>
          <div>
            <h3>Release 1.2</h3>
            <p>
              <span>lx media solutions</span><br>
              Bindsachser Straße 20<br>
              63683 Ortenberg<br>
              Telefon: <a href="tel:4916092055319">+49 160 92055319</a><br>
              E-Mail: <a href="mailto:hi@l03.dev">hi@l03.dev</a>
            </p>
          </div>
          <div>
            <h3>Release 1.1</h3>
            <p>
              <span>lx media solutions</span><br>
              Bindsachser Straße 20<br>
              63683 Ortenberg<br>
              Telefon: <a href="tel:4916092055319">+49 160 92055319</a><br>
              E-Mail: <a href="mailto:hi@l03.dev">hi@l03.dev</a>
            </p>
          </div>
          <div>
            <h3>Initial Release - 13. March 2023</h3>
            <p>
              <span>lx media solutions</span><br>
              Bindsachser Straße 20<br>
              63683 Ortenberg<br>
              Telefon: <a href="tel:4916092055319">+49 160 92055319</a><br>
              E-Mail: <a href="mailto:hi@l03.dev">hi@l03.dev</a>
            </p>
          </div>
        </div>
      </div>
      <div class="tab">
        <div class="title">Commands</div>
        <div class="accordion-wrapper">
          <div class="accordion-item">
            <div class="accordion-title">
              <h3>!solo</h3>
            </div>
            <div class="accordion-content">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const state = reactive({
  tabs: 'description'
})
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
    viewFactor: 0.5,
  };
  await $ScrollReveal().reveal(".hero-section .first", options);

  options.delay = 900;
  await $ScrollReveal().reveal(".hero-section .second", options);

  options.delay = 900;
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
.accordion-content
  transition: max-height 0.3s ease-out, padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)
.tabs
  @apply mx-6 rounded-3xl mt-10 grid grid-cols-4 grid-rows-2 overflow-hidden gap-6
  .tab
    @apply animate-fadeinleft col-span-2 bg-neutral-900 overflow-hidden rounded-2xl p-4 h-min
    .title
      @apply text-3xl text-[#FFD796] font-bold text-center py-2
    .tab-content
      @apply text-white
    h1
      @apply text-5xl text-[#FFD796] font-bold pb-10
    h3
      @apply w-fit text-2xl pt-2 text-[#FFD796]
    p
      @apply pb-2 text-neutral-500
    span
      @apply text-neutral-300
    a
      @apply no-underline text-white
    ul
      @apply list-disc list-inside text-neutral-500
#tf2-solo-page
  @apply bg-neutral-800 h-full py-6
  .hero-section
    @apply grid grid-cols-5 gap-0 relative
    .first
      font-size: 9rem
      line-height: 85%
      @apply italic
    .third
      font-size: 18rem
      line-height: 85%
      @apply italic pl-3.5
    h1
      @apply text-[#FFD796] font-bold ml-16
    .img-section
      @apply col-span-2 relative flex justify-end
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
  .product-description
    @apply grid grid-cols-5 gap-0 relative rounded-3xl bg-neutral-900 px-6 py-8 mx-6 mt-10

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
