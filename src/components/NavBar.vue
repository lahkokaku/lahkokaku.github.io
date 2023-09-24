<script setup>
import { ref } from 'vue';
import { vAutoAnimate } from '@formkit/auto-animate'

const navbarMenuOpen = ref(false)
const toogleNavbar = async () => {
    navbarMenuOpen.value = !navbarMenuOpen.value
}
const toogleNavbarMenu = async () => {
    await new Promise(r => setTimeout(r, 300));
    navbarMenuOpen.value = !navbarMenuOpen.value
}
</script>
<template>
    <nav v-auto-animate class="fixed z-50 top-0 w-screen shadow-lg backdrop-blur-sm bg-opacity-70 bg-white responsive-container py-4">
        <div class="flex justify-between items-center">
            <div @click="$router.push({name:'home'})" class="cursor-pointer">
                <img src="@/assets/images/logo.webp" alt="Logo" class="navbar-logo">
            </div>
            <div @click="toogleNavbar()" class="md:hidden min-h-full">
                <i class="fa-regular fa-bars navbar-toogler text-lg text-primary"></i>
            </div>
            <div class="gap-2 text-[16px] text-muted md:flex hidden">
                <button @click="$router.push({name:'home'})" class="btn btn-nav font-normal">Home</button>
                <button @click="$router.push({name:'projects'})" class="btn btn-nav font-normal">Projects</button>
                <button @click="$router.push(`#footer`)" class="btn btn-nav font-normal">Contact</button>
            </div>
        </div>
        <div v-auto-animate v-if="navbarMenuOpen" class="navbar-menu text-muted">
            <button @click="$router.push({name:'home'}); toogleNavbarMenu();" class="btn btn-nav font-normal">Home</button>
            <button @click="$router.push({name:'projects'}); toogleNavbarMenu();" class="btn btn-nav font-normal">Projects</button>
            <button @click="$router.push(`#footer`); toogleNavbarMenu();" class="btn btn-nav font-normal">Contact</button>
        </div>
    </nav>
</template>
<style scoped>
.navbar-logo{
    width: 50px
}
@media (max-width: 768px){
    .navbar-logo{
        width: 40px;
    }
}
</style>