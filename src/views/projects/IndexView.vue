<script setup>
import { projects } from '@/constants'
</script>
<template>
	<main>
		<section id="landing" class="responsive-container">
			<div class="section-line mb-2"></div>
			<h1 class="sm:text-[36px] text-[30px] font-bold text-gradient h-fit w-fit mb-5">Featured Projects</h1>
			<div class="grid md:grid-cols-2 grid-cols-1 md:gap-3 gap-4">
				<template v-for="(project, index) in projects" :key="index" >
					<div class="card" v-if="index != 0">
						<div class="flex justify-center project-thumbnail">
							<img :src="project.thumbnail ?? `https://picsum.photos/seed/web/400/200.webp`" :loading="index <= 2 ? 'eager' : 'lazy'" decoding="auto" :alt="project.title">
						</div>
						<div class="card-body">
							<div class="section-line"></div>
							<h2 class="text-primary font-bold sm:text-2xl text-xl mt-4">{{ project?.title }}</h2>
							<p class="text-muted sm:text-base text-sm mt-4">{{ project?.shortDescription }}</p>
							<div class="text-white mt-4 text-[12.5px]">
								<button v-for="tech, index in project.techStack" :key="index" class="btn btn-scale bg-primary me-0.5 mb-0.5">{{ tech }}</button>
							</div>
							<div class="mt-3 flex justify-end sm:text-base text-sm">
								<button class="btn btn-scale border-2 border-primary text-muted" @click="$router.push({name:'projects-show', params:{id: index}})">
									Read More
									<i class="fa-solid fa-arrow-right text-primary"></i>
								</button>
							</div>
						</div>
					</div>
				</template>
			</div>
		</section>
	</main>
</template>

<style scoped>
#landing{
	/* min-height: 100vh; */
	margin-top: 18vh;
	margin-bottom: 16vh;
}

@media (max-width: 820px){
	#landing{
		margin-top: 14vh;
		margin-bottom: 10vh;
	}
}

.project-thumbnail{
	border-radius: 1rem 1rem 0 0;
	aspect-ratio: 2/1;
	background-color: rgba(0, 0, 0, 0.1);
}
.project-thumbnail img {
	border-radius: 1rem 1rem 0 0;
	object-fit: cover;
}
</style>
