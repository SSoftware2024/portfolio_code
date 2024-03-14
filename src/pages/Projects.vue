<template>
    <Card class="relative border border-neutral-200">
        <h1 class="relative text-2xl font-bold mb-3 text-center z-10">Projetos Públicos</h1>
        <div class="w-full 2xl:max-h-[700px] sm:max-h-[500px]">
            <div class="flex flex-col justify-center items-center space-y-2">
                <CardProject class="w-[80%] px-2 py-2 bg-[#000419]" :img="images.projects.portfolio" title="Portfolio" github="https://github.com/SSoftware2024/portfolio-code" 
                online="https://github.com/SSoftware2024/portfoliopcode">
                    Meu portfolio, projeto para exibir um pouco sobre minha pessoa como profissional, minhas habilidades
                    e projetos públicos realizados.
                    Esse incluise foi feito com:
                    <ul class="list-disc list-inside">
                        <li>VUE 3</li>
                        <li>VITE</li>
                        <li>TAILWIND</li>
                    </ul>
                </CardProject>
            </div>
        </div>

    </Card>
</template>
<script setup>
import images from '@/js/images.js';
//COMPONENTS
import Card from '@/components/Card/Card.vue';
import CardProject from '@/components/Card/CardProject.vue';
//END COMPONENTS
</script>