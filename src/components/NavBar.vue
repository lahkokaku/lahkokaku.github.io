<script setup>
import { ref } from 'vue';
import { useRoute } from'vue-router'

const route = useRoute();

const home = ref();
const projects = ref();


const refresh = () => {
    if(route.fullPath.includes('projects')){
        projects.value = true;
        home.value = false;
    }else{
        projects.value = false;
        home.value = true;
    }
}

const navbarMenuOpen = ref(false)
const toogleNavbar = () => {
    navbarMenuOpen.value = !navbarMenuOpen.value
}

refresh();
</script>
<template>
    <nav class="fixed z-50 top-0 w-screen shadow-lg backdrop-blur-sm bg-opacity-70 bg-white responsive-container py-4">
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
        <div v-show="navbarMenuOpen" class="navbar-menu text-muted">
            <button @click="$router.push({name:'home'})" class="btn btn-nav font-normal">Home</button>
            <button @click="$router.push({name:'projects'})" class="btn btn-nav font-normal">Projects</button>
            <button @click="$router.push(`#footer`)" class="btn btn-nav font-normal">Contact</button>
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