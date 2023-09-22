<script setup>
import {ref} from 'vue'

const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'})
}

const display = ref(false)

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    display.value = true;
  } else {
    display.value = false;
  }
}
</script>

<template>
    <div @click="scrollToTop" v-show="display" class="up-button-wrapper">
        <div class="btn btn-scale bg-primary text-white text-base"><i class="fa-regular fa-arrow-up"></i></div>
    </div>
</template>

<style scoped>
.up-button-wrapper{
    position: fixed;
    bottom: 5vh;
    right: 5vw;
    opacity: 0.75;
    transition: all 0.3s ease-in-out;
}

@media screen and (max-width: 768px){
  .up-button-wrapper{
      position: fixed;
      bottom: 2vh;
      right: 2vw;
      opacity: 0.75;
      transition: all 0.3s ease-in-out;
  }
}
</style>