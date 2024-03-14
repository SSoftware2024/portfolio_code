<template>
    <div>
        <div class="container-video">
            <video autoplay muted loop id="video-background">
                <source :src="video" type="video/mp4">
                Seu navegador não suporta vídeo/mp4.
            </video>
            <div class="profile">
                <img :src="img_profile" alt="">
                <h1 id="typewriter" class="text-xl mt-2"></h1>
            </div>
            <div class="backdrop"></div>
        </div>
        <div>
            <Navigation></Navigation>
        </div>
        <div class="flex justify-center">
            <div class="custom-container mt-3 mb-3">
                <div class="w-full px-2 py-3 flex justify-center glassmorph">
                    <a href="https://api.whatsapp.com/send?phone=558899484317&text=Ol%C3%A1%20me%20chamo%20%3Cnome%3E,%20consegui%20seu%20contato%20pelo%20seu%20'portfolio'" target="_blank" class="">
                        <font-awesome-icon :icon="faWhatsapp" class="text-white text-2xl mr-3 hover:text-green-400"></font-awesome-icon>
                    </a>
                    <a href="https://t.me/TiagoAlves2001" target="_blank">
                        <font-awesome-icon :icon="faTelegram" class="text-white text-2xl mr-3 hover:text-cyan-400"></font-awesome-icon>
                    </a>
                    <a href="https://www.linkedin.com/in/tiago-alves-dos-santos-de-oliveira-96699a189/" target="_blank">
                        <font-awesome-icon :icon="faLinkedin" class="text-white text-2xl mr-3 hover:text-blue-400"></font-awesome-icon>
                    </a>
                    <a href="https://github.com/SSoftware2024" target="_blank">
                        <font-awesome-icon :icon="faGithub" class="text-white text-2xl mr-3 hover:text-black"></font-awesome-icon>
                    </a>                    
                </div>
            </div>
        </div>
        <div class="flex justify-center">
            <div class="custom-container mt-2 mb-3">
                <router-view></router-view>
            </div>
        </div>
    </div>

</template>

<script setup>
import { onMounted } from 'vue';
import '@/sass/layout.scss';
import video from '@/assets/particles2.mp4';
import img_profile from '@/assets/profile_30.png';
import Typewriter from 'typewriter-effect/dist/core';
// import { faWhatsapp } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faTelegram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
//COMPONENTS
import Navigation from '../components/Navigation.vue';
//END COMPONENTS


onMounted(() => {
    new Typewriter('#typewriter', {
        strings: ['Olá, me chamo Tiago!', 'Seja bem vindo!'],
        autoStart: true,
        loop: true,
        delay: 60,
        deleteSpeed: 50
    });
});
</script>

<style lang="scss">
.glassmorph {
    background: rgba(1, 38, 60, 0.5);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4.5px);
    -webkit-backdrop-filter: blur(4.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>