<template>
    <section id="footer" class="z-40 shadow-xl border-t-4 border-s-4 border-e-4 lg:rounded-t-[100px] rounded-t-[50px]">
        <div class="container lg:px-40 px-8 lg:py-8 py-4 flex flex-col items-start gap-2 min-w-full">
            <div class="text-primary font-bold sm:text-2xl text-xl mb-1">
                Let's talk!
            </div>
            <div class="flex gap-4 font-normal sm:text-2xl text-xl">
                <a class="footer-social" href="mailto:jose.satrya@gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i></a>
                <a class="footer-social" href="https://www.linkedin.com/in/jose-stephen-502257290" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                <a class="footer-social" href="https://github.com/lahkokaku" target="_blank"><i class="fa-brands fa-github"></i></a>
            </div>
            <div class="text-muted text-base">
                ©️ {{ new Date().getFullYear() }} Jose Stephen Satrya
            </div>
        </div>
    </section>
</template>