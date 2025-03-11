<script setup>
import { onBeforeMount } from 'vue';
import { projects } from '../../constants';
import router from '@/router';

const props = defineProps({
    id: {require: true}
})

const curr = Number(props.id);

onBeforeMount(() => {
    if(projects[curr] == undefined || Object.keys(projects[curr]).length < 1){
        router.push({name: '404', params:{pathMatch: 404}})
    }
})

</script>
<template>
    <main>
        <section class="responsive-container sm:my-[15vh] my-[11vh]">
            <button class="btn btn-scale border-2 border-primary sm:text-base text-sm text-muted sm:mb-[6vh] mb-[3vh]" @click="router.push({name:'projects'})"><i class="fa-regular fa-arrow-left text-primary"></i> Back</button>
            <div class="flex lg:flex-row flex-col lg:justify-start justify-center mb-6">
                <div class="flex justify-center lg:max-w-lg">
                    <img :src="projects[curr]?.thumbnail ?? `https://picsum.photos/seed/web/400/200.webp`" loading="lazy" decoding="auto" :alt="projects[curr]?.title" class="project-thumbnail shadow-lg border-[3px]">
                </div>
                <div class="lg:ms-6 mt-6">
                    <div class="section-line"></div>
                    <h2 class="sm:text-[30px] text-[26px] text-gradient font-bold h-fit w-fit mt-4">{{ projects[curr]?.title }}</h2>
                    <p class="text-muted sm:text-lg text-base mt-4">{{ projects[curr]?.shortDescription }}</p>
                </div>
            </div>
            <!-- tech stack -->
            <div class="card mb-4">
                <div class="card-body">
                    <h3 class="text-primary font-semibold text-xl"><i class="fa-regular fa-wrench"></i> <span class="text-muted">Tech Stack</span></h3>
                    <div class="mt-3">
                        <button class="btn bg-primary btn-scale w-fit text-white sm:text-base text-sm me-1.5 mb-1.5" v-for="tech, index in projects[curr]?.techStack" :key="index">{{ tech }}</button>
                    </div>
                </div>
            </div>
            <!-- description -->
            <div class="card mb-4">
                <div class="card-body">
                    <h3 class="text-primary font-semibold text-xl"><i class="fa-regular fa-circle-info"></i> <span class="text-muted">Description</span></h3>
                    <div v-show="projects[curr]?.description?.introduction" class="mt-3">
                        <p class="sm:text-base text-sm text-primary font-bold">Introduction:</p>
                        <p class="sm:text-base text-sm text-muted text-justify" v-html="projects[curr]?.description?.introduction"></p>
                    </div>
                    <div v-show="projects[curr]?.description?.role" class="mt-3">
                        <p class="sm:text-base text-sm text-primary font-bold">My Role:</p>
                        <p class="sm:text-base text-sm text-muted text-justify" v-html="projects[curr]?.description?.role"></p>
                    </div>
                </div>
            </div>
            <!-- links -->
            <div class="card mb-4" v-if="projects[curr]?.linkCode || projects[curr]?.linkWeb">
                <div class="card-body">
                    <h3 class="text-primary font-semibold text-xl"><i class="fa-regular fa-chain"></i> <span class="text-muted">Links</span></h3>
                    <div class="mt-3 text-base">
                        <div v-if="projects[curr]?.linkCode">Code Link: 
                            <p v-for="link, index in projects[curr]?.linkCode" :key="index" class="indent-4">
                                {{ link.type }}: <a target="_blank" :href="`${link?.link}`" class="text-primary font-semibold">{{ link?.link }}</a>
                            </p>
                        </div>
                        <p v-if="projects[curr]?.linkWeb">Current Website Link: <a target="_blank" :href="`${projects[curr]?.linkWeb}`" class="text-primary font-semibold">{{ projects[curr]?.linkWeb }}</a>
                        </p>
                        <p class="text-red-500 text-sm mt-2" v-if="projects[curr]?.codeDisclaimer">
                            <sup>*</sup>The link(s) may not represent the project I worked on as they are regularly updated.
                        </p>
                    </div>
                </div>
            </div>
            <!-- interfaces -->
            <div class="card mb-4">
                <div class="card-body">
                    <h3 class="text-primary font-semibold text-xl"><i class="fa-regular fa-image"></i> <span class="text-muted">Interfaces</span></h3>
                    <div class="mt-3 grid sm:grid-cols-2 grid-cols-1 place-content-center gap-4">
                        <div v-for="inter,index in projects[curr]?.interfaces" :key="index">
                            <p class="text-muted text-base text-start">{{ inter?.description }}</p>
                            <div class="sm:max-h-[350px] max-h-[350px] overflow-y-auto shadow-lg border-[2px]">
                                <img :src="inter?.link ?? `https://picsum.photos/seed/web/400/500.webp`" :alt="inter?.description" decoding="auto" class="w-full">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<style scoped>
.project-thumbnail{
    border-radius: 20px
}
</style>