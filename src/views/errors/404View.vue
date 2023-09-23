<script setup></script>
<template>
    <main>
        <section class="responsive-container min-h-screen flex flex-col justify-center sm:items-center">
            <h1 class="text-[50px] sm:text-center text-left mb-4 text-muted">
                <span class="text-gradient w-fit h-fit font-bold">404</span>
                <span class="font-light sm:inline hidden"> | </span>
                <span class="font-light inline sm:hidden"><br/></span>
                <span class="font-light">Not found</span>
                <p class="font-normal text-lg">Make sure you enter a valid URL</p>
            </h1>
            <button class="btn btn-primary text-muted text-lg w-fit" @click="$router.push({name: 'home'})">Home</button>
        </section>
    </main>
</template>