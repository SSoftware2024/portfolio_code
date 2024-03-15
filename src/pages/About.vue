<template>
    <Card class="border border-neutral-200">
        <h1 class="text-2xl font-bold mb-3 text-center">Sobre</h1>
        <p class="text-justify">
            Olá! {{ getGreeting() }}! Me chamo Tiago Alves tenho {{ myPerson.age }} anos sou <span
                class="font-bold text-blue-900 dark:text-cyan-400">Desenvolvedor Web
                ‘back-end’ com PHP, graduado em Sistemas de Informação pela UNINASSAU</span>, tenho <span
                class="font-bold text-blue-900 dark:text-cyan-400"> {{ myPerson.time_work }} anos de experiência</span> no mercado contando
            com estágios, empregos e 'freelancers'. Nesta curta estrada tive contato com diversas tecnologias, as quais
            informo na seção de habilidades. Destas habilidades minha paixão no ramo ‘back-end’ encontra-se no PHP, pois
            sempre me atendeu bem, comunidade ativa, fácil documentação entre outras vantagens. Outras paixões que
            tenho, saindo do ramo de desenvolvimento, é a lingua inglesa. Almejo aprender a idioma fluentemente, estou
            <span class="font-bold text-blue-900 dark:text-cyan-400">cursando inglês a {{ myPerson.englis_course_time }} meses na
                WIZZARD</span> e como lazer toco saxofone, afinal quem não gosta de uma boa música​!? 🎷​🎵
        </p>
    </Card>

</template>
<script setup>
import { reactive } from 'vue';
import { date } from '@/js/functions.js';
//COMPONENTS
import Card from '@/components/Card/Card.vue';
//END COMPONENTS
const myPerson = reactive({
    age: date.dateDiff(new Date('2001-02-02')).years,
    time_work: date.dateDiff(new Date('2019-03-01')).years,
    englis_course_time: date.dateDiff(new Date('2023-08-01')).months, //months
});
function getGreeting() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 0 && currentHour < 12) {
        return "Bom dia";
    } else if (currentHour >= 12 && currentHour < 18) {
        return "Boa tarde";
    } else {
        return "Boa noite";
    }
}

</script>