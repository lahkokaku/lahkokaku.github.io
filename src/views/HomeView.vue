<script setup>
</script>

<template>
	<main>
		<div id="landing" class="responsive-container sm:translate-y-0 ">
			<section class="flex sm:flex-row flex-col sm:justify-between justify-center">
				<div class="left-section cursor-default flex flex-col justify-center items-start md:w-2/3">
					<div class="section-line"></div>
					<div class="my-4">
						<h3 class="text-muted sm:text-xl text-md">Greetings! My name is</h3>
						<h1 class="text-gradient sm:text-[40px] text-[28px] font-bold w-fit h-fit my-1">Jose Stephen Satrya</h1>
						<h2 class="text-muted font-bold sm:text-xl text-lg w-fit h-fit">I am a <span class="text-gradient sm:text-[32px] text-[24px]">Software Engineer</span></h2>
					</div>
					<p class="text-muted text-base max-w-xl text-justify mb-4">
						Currently, I am studying at BINUS University as an undergraduate Computer Science student. I am passionate and interested to explore more about software engineering for various technological platforms especially the web.
					</p>
					<div class="flex gap-3 items-center">
						<button class="btn btn-outline text-muted max-w-fit sm:text-lg text-base" @click="$router.push({name:'projects'})">View Projects</button>
						<a href="/Resume_Jose Stephen Satrya.pdf" target="_blank">
							<button class="btn btn-primary text-muted max-w-fit sm:text-lg text-base">View Resume</button>
						</a>
					</div>
				</div>
				<div class="right-section sm:flex sm:w-1/3 hidden sm:h-screen justify-center items-center">
					<img src="@/assets/images/circle.webp" class="landing-image -z-10" alt="landing-image">
				</div>
			</section>
		</div>
	</main>
</template>

<style scoped>
#landing{
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 100vh;
}
.landing-image{
	opacity: 0.65 !important;
	width: 400px;
	transform: translateY(50px);
}
@media (max-width: 1265px){
	.landing-image{
		opacity: 0.6 !important;
		width: 300px;
		transform: translateX(30px);
		transform: translateY(50px);
	}
}
@media (max-width: 950px){
	.landing-image{
		opacity: 0.6 !important;
		width: 300px;
		transform: translateX(30px);
		transform: translateY(50px);
	}
}

</style>
