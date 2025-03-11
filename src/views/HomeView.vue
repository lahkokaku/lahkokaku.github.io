<script setup>
import 'animate.css'
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
						<h2 class="text-muted font-bold sm:text-xl text-lg w-fit h-fit"><span class="text-gradient sm:text-[32px] text-[24px]">Software Engineer</span></h2>
					</div>
					<p class="text-muted text-base max-w-xl mb-4">
						I am a Computer Science Fresh Graduate from BINUS University. <br/>
						Currently, I am undergoing an internship as a Software Engineer at Blibli.com. <br/> 
						I am passionate and interested to explore more about software engineering, especially <b>Web Interfaces</b> and <b>Backend Services</b>.
					</p>
					<div class="flex sm:gap-3 gap-1.5 items-center">
						<button class="btn btn-outline text-muted max-w-fit sm:text-lg text-base" @click="$router.push({name:'projects'})">View Projects</button>
						<a href="/Resume_Jose Stephen Satrya.pdf" target="_blank">
							<button class="btn btn-primary text-muted max-w-fit sm:text-lg text-base">View Resume</button>
						</a>
					</div>
				</div>
				<div class="right-section sm:flex sm:w-1/3 hidden sm:h-screen justify-end items-center">
					<img src="@/assets/images/circle.webp" class="landing-image -z-10" alt="landing-image">
				</div>
			</section>
		</div>
	</main>
</template>

<style scoped>
.left-section{
	animation: lightSpeedInLeft;
	animation-duration: 1s;
}
.right-section{
	animation: lightSpeedInRight;
	animation-duration: 1s;
}
#landing{
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 100vh;
}
.landing-image{
	opacity: 0.65 !important;
	width: 22vw;
	transform: translateY(50px);
}
@media (max-width: 1155px){
	.landing-image{
		opacity: 0.6 !important;
		width: 20vw;
		transform: translateY(50px);
	}
}
@media (max-width: 770px){
	.landing-image{
		opacity: 0.6 !important;
		width: 15vw;
		transform: translateY(50px);
	}
}

</style>
