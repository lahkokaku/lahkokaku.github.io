<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import FooterComponent from './components/FooterComponent.vue';
import ScrollToTopButton from '@/components/ScrollToTopButton.vue';
</script>

<template>
  <NavBar></NavBar>
  <router-view v-slot="{Component}">
    <transition name="route" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <ScrollToTopButton></ScrollToTopButton>
  <FooterComponent></FooterComponent>
</template>

<style>
.route-leave-to{
  opacity: 0;
  /* transform: translateY(50px); */
}
.route-enter-from {
  opacity: 0;
  /* transform: translateY(50px); */
}
.route-enter-active{
  transition: all 0.6s ease-in-out;
}
.route-leave-active {
  transition: all 0.6s ease-in-out;
}

</style>
