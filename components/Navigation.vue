<template>

    <span class="menu-trigger">
      <span class="menu-trigger__line top"></span>
      <span class="menu-trigger__line middle"></span>
      <span class="menu-trigger__line bottom"></span>
    </span>
    <span class="close-trigger">
      <span class="close-trigger__line left"></span>
      <span class="close-trigger__line right"></span>
    </span>
    <div v-if="state.mobile" class="mobile-container h-screen w-full">
      <div class="top-slider">
      </div>
      <div class="center-slider">
      </div>
      <div class="bottom-slider">
      </div>
    </div>
  <div class="placeholder-menu !hidden"></div>
</template>

<script setup>
import {gsap} from "gsap";
import {Power4} from "gsap/gsap-core";
import anime from "animejs";
const state = reactive({
  mobile: false,
  current: 'closed',
})
onMounted(() => {
  state.mobile = window.innerWidth < 768;
  let openTrigger  = document.querySelector('.menu-trigger');
  let openTriggerTop  = document.querySelector('.menu-trigger__line.top');
  let openTriggerMiddle  = document.querySelector('.menu-trigger__line.middle');
  let openTriggerBottom  = document.querySelector('.menu-trigger__line.bottom');
  let closeTrigger  = document.querySelector('.close-trigger');
  let closeTriggerLeft  = document.querySelector('.close-trigger__line.left');
  let closeTriggerRight  = document.querySelector('.close-trigger__line.right');

  let menu = document.querySelector('.placeholder-menu');
  let menuTop = document.querySelector('.placeholder-menu');
  let menuMiddle = document.querySelector('.placeholder-menu');
  let menuBottom = document.querySelector('.placeholder-menu');


  let tlOpen = gsap.timeline({paused: true});
  let tlClose = gsap.timeline({paused: true});

  tlOpen.add("preOpen").to(openTriggerTop, {
    x: "+80px",
    y: "-80px",
    delay: 0.1,
    duration: 0.4,
    ease: Power4.easeIn,
    onComplete: () => closeTrigger.style.zIndex = '525'
  }, "+=0.0").to(openTriggerMiddle, {
    x: "+=80px",
    duration: 0.4,
    y: "-=80px",
    ease: Power4.easeIn,
    onComplete: () => {
      openTrigger.style.visibility = 'hidden';
      anime({
        targets: '.bottom-slider',
        translateY: ["100%", "0%"],
        duration: 700,
        easing: 'easeInOutQuad',
      });
      anime({
        targets: '.top-slider',
        translateY: ["-100%", "0%"],
        duration: 700,
        easing: 'easeInOutQuad',
      });
      anime({
        targets: '.center-slider',
        height: ['0', '40vh'],
        duration: 700,
        easing: 'easeInOutQuad',
      });
    }
  }, "preOpen").to(openTriggerBottom,{
    duration: 0.4,
    x: "+=80px",
    y: "-=80px",
    delay: 0.2,
    ease: Power4.easeIn,
  }, "preOpen").add("open","-=0.4").to(menuTop,{
    y: "13%",
    duration: 0.8,
    ease: Power4.easeInOut
  }, "open").to(menuMiddle,{
    scaleY: 1,
    duration: 0.8,
    ease: Power4.easeInOut,
  }, "open").to(menuBottom,{
    y: "-114%",
    duration: 0.8,
    ease: Power4.easeInOut,
  }, "open").fromTo(menu,{
    y: 30,
    opacity: 0,
    visibility: 'hidden',
    duration: 0.6,
  }, {
    y: 0,
    opacity: 1,
    visibility: 'visible',
    ease: Power4.easeOut
  }, "-=0.2").add("preClose", "-=0.8").to(closeTriggerLeft, {
    x: "-=100px",
    y: "+=100px",
    ease: Power4.easeOut,
    duration: 0.8,
  }, "preClose").to(closeTriggerRight, {
    duration: 0.8,
    x: "+=100px",
    y: "+=97px",
    delay: 0.2,
    ease: Power4.easeOut,
  }, "preClose");


  tlClose.add("close").to(menuTop,{
    backgroundColor: "#6295ca",
    ease: Power4.easeInOut,
    duration: 0.2,
    onComplete: () => {
      closeTrigger.style.zIndex = '505'
      openTrigger.style.visibility = 'visible';
      anime({
        targets: '.bottom-slider',
        translateY: ["0%", "100%"],
        duration: 450,
        easing: 'easeInOutQuad',
      });
      anime({
        targets: '.top-slider',
        translateY: ["0%", "-100%"],
        duration: 450,
        easing: 'easeInOutQuad',
      });
      anime({
        targets: '.center-slider',
        height: ['40vh', '0'],
        duration: 450,
        easing: 'easeInOutQuad',
      });
    }
  }, "close").to(menuMiddle,{
    backgroundColor: "#6295ca",
    ease: Power4.easeInOut,
    duration: 0.2,
  }, "close").to(menuBottom,{
    backgroundColor: "#6295ca",
    ease: Power4.easeInOut,
    duration: 0.2
  }, "close").to(menu,{
    y: 20,
    opacity: 0,
    ease: Power4.easeOut,
    duration: 0.6,
  }, "close").to(menuTop,{
    y: "-113%",
    duration: 0.8,
    ease: Power4.easeInOut,
  }, "+=0.2").to(menuMiddle,{
    scaleY: 0,
    duration: 0.8,
    ease: Power4.easeInOut
  }, "+=0.2").to(menuBottom,{
    y: "23%",
    duration: 0.8,
    ease: Power4.easeInOut,
  },  "+=0.2").to(closeTriggerLeft,{
    x: "+=100px",
    y: "-=100px",
    ease: Power4.easeIn,
    duration: 0.2,
  }, "close").to(closeTriggerRight,{
    x: "-=100px",
    y: "-=100px",
    delay: 0.1,
    ease: Power4.easeIn,
    duration: 0.2,
  }, "close").to(openTriggerTop,{
    x: "-=80px",
    y: "+=80px",
    delay: 0.2,
    ease: Power4.easeOut,
    duration: 1
  }, "close").to(openTriggerMiddle,{
    x: "-=80px",
    y: "+=80px",
    ease: Power4.easeOut,
    duration: 1,
  }, "close").to(openTriggerBottom,{
    duration: 1,
    x: "-=80px",
    y: "+=80px",
    delay: 0.1,
    ease: Power4.easeOut,
  }, "close");


/*
  tlOpen.add("preOpen")
      .to(openTriggerTop, {
        x: "+=80px",
        y: "-=80px",
        delay: 0.1,
        duration: 0.4,
        ease: Power4.easeIn,
        onComplete: () => {
          closeTrigger.style.zIndex = "25";
        }
      }, "preOpen")
      .to(openTriggerMiddle, {
        x: "+=80px",
        y: "-=80px",
        duration: 0.4,
        ease: Power4.easeIn,
        onComplete: () => {
          openTrigger.style.visibility = "hidden";
        }}, 'preOpen')
      .to(openTriggerBottom, {
        x: "+=80px",
        y: "-=80px",
        delay: 0.2,
        duration: 0.4,
        ease: Power4.easeIn,
      }, "preOpen")
      .add("open", "-=0.4")
      .add("preClose", "-=0.8")
      .to(closeTriggerLeft, {
        x: "-=100px",
        y: "+=100px",
        duration: 0.8,
        ease: Power4.easeOut,
      }, "preClose")
      .to(closeTriggerRight, {
        x: "+=100px",
        y: "+=97px",
        duration: 0.8,
        delay: 0.2,
        ease: Power4.easeOut
      }, "preClose")

  tlClose.add("close")
      .to(closeTriggerLeft, {
        duration: 0.2,
        x: "+=100px",
        y: "-=100px",
        ease: Power4.easeIn,
        onComplete: () => {
        }
      }, "close")
      .to(closeTriggerRight, {
        duration: 0.2,
        x: "-=100px",
        y: "-=100px",
        ease: Power4.easeIn,
        delay: 0.1,
        onComplete: () => {
          closeTrigger.style.visibility = "hidden";
        }
      }, "close")
      .to(openTriggerTop, {
        duration: 1,
        x: "-=80px",
        y: "+=80px",
        delay: 0.2,
        ease: Power4.easeOut

      }, "close")
      .to(openTriggerMiddle, {
        duration: 1,
        x: "-=80px",
        y: "+=80px",
        ease: Power4.easeOut
      }, "close")
      .to(openTriggerBottom, {
        duration: 1,
        x: "-=80px",
        y: "+=80px",
        delay: 0.1,
        ease: Power4.easeOut
      }, "close")
*/
  openTrigger.addEventListener('click', () => {
    document.documentElement.style.overflow = "hidden";
    if (tlOpen.progress() < 1) tlOpen.play();
    else tlOpen.restart();
  });

  closeTrigger.addEventListener('click', () => {
    document.documentElement.style.removeProperty("overflow");
    if (tlClose.progress() < 1) tlClose.play();
    else tlClose.restart();
  });
})
</script>

<style lang="sass" scoped>

.menu-trigger__line
  @apply  w-full h-[4px] bg-white transform my-1 absolute rotate-[-45deg]
  &:before
    transition: all 0.3s cubic-bezier(.55,0,.1,1)
    @apply content-[''] absolute top-0 left-0 block w-[0%] h-[100%] bg-red-500
  &.top
    @apply top-1 left-0 w-1/2
  &.middle
    &:before
      left: auto
      right: 0
  &.bottom
    @apply bottom-1 right-0 w-1/2
.menu-trigger, .close-trigger
  @apply fixed top-8 right-4 md:right-8 w-12 h-12 cursor-pointer z-[550] overflow-hidden grid grid-cols-1 place-items-center place-content-center
  &:hover
    .menu-trigger__line
      &:before
        width: 100%
    .close-trigger__line
      &:before
        width: 100%
.close-trigger__line
  @apply block w-full h-[4px] bg-white relative
  &:before
    transition: all 0.3s cubic-bezier(.55,0,.1,1)
    @apply content-[''] absolute top-0 left-0 block w-[0%] h-[100%] bg-red-500
  &.left
    transform: translateX(100px) translateY(-100px) rotate(-45deg)
  &.right
    transform: translateX(-100px) translateY(-100px) rotate(45deg)

.close-trigger
  z-index: 505



.mobile-container
  @apply absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full z-[500]
  .top-slider
    @apply absolute top-0 w-screen h-[30vh] bg-neutral-900 -translate-y-full
    //animation: down 1.5s forwards infinite
  .center-slider
    height: 0
    @apply w-screen bg-neutral-800
    //animation: expanding 1.5s forwards infinite
  .bottom-slider
    @apply absolute bottom-0 w-screen h-[30vh] bg-neutral-900 translate-y-full
    //animation: up 1.5s forwards infinite

@keyframes expanding
  0%
    height: 0
  50%
    height: 40vh
  100%
    height: 0
@keyframes down
  0%
    transform: translateY(-100%)
  50%
    transform: translateY(0)
  100%
    transform: translateY(-100%)
@keyframes up
  0%
    transform: translateY(100%)
  50%
    transform: translateY(0)
  100%
    transform: translateY(100%)
</style>
