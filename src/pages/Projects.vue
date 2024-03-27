<template>
    <Card class="relative border border-neutral-200">
        <h1 class="relative text-2xl font-bold mb-3 text-center z-10">Projetos Públicos</h1>
        <div class="w-full 2xl:max-h-[700px] sm:max-h-[500px]">
            <div class="flex flex-col justify-center items-center space-y-2">
                <CardProject class="w-[80%] px-2 py-2 bg-[#000419]" :img="images.projects.portfolio" title="Portfolio" key="1"
                    github="https://github.com/SSoftware2024/portfolio_code">
                    Meu portfolio, projeto para exibir um pouco sobre minha pessoa como profissional, minhas habilidades
                    e projetos públicos realizados. 
                    <br>
                    Esse incluise foi feito com:
                    <ul class="list-disc list-inside mt-2">
                        <li>VUE 3</li>
                        <li>VITE</li>
                        <li>TAILWIND</li>
                    </ul>
                </CardProject>
                <!-- ToDoList -->
                <CardProject class="w-[80%] px-2 py-2 bg-[#000419]" :img="images.projects.toDo" title="ToDoList" key="2"
                    github="https://github.com/SSoftware2024/todoList"
                    video="https://www.youtube.com/watch?v=J6kNsvGzdFI&ab_channel=TiagoAlves">
                    Não usei laravel, pois se trata de um sistema simples de CRUD de itens em uma lista que é dividida por usuário logado e tem área demo.
                    <br>
                    Esse projeto foi feito com:
                    <ul class="list-disc list-inside mt-2">
                        <li>REACT - MATERIAL UI</li>
                        <li>VITE</li>
                        <li>PHP</li>
                    </ul>
                </CardProject>
                <!-- END ToDoList -->
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