<script setup>
import NavBar from './NavBar.vue';
import FooterComponent from './FooterComponent.vue';
</script>

<template>
  <NavBar></NavBar>
    <transition name="route" mode="out-in">
      <slot></slot>
    </transition>
  <FooterComponent></FooterComponent>
</template>

<style>
.route-leave-to{
  opacity: 0;
  transform: translateY(50px);
}
.route-enter-from {
  opacity: 0;
  transform: translateY(50px);
}
.route-enter-active,
.route-leave-active {
  transition: all 0.6s ease-out;
}
</style>
