<template>
    <Card class="relative border border-neutral-200">
        <h1 class="relative text-2xl font-bold mb-3 text-center z-10">Experiência</h1>
        <CardExperience :img="VWP" dateStart="2021-09-01" dateEnd="2023-07-01" level="Pleno"
            title="VWP Agência Digital" link="https://agenciavwp.com.br/" class="border border-white mb-3">
            <p class="text-justify">
                Tive um contato inicial com configurações servidores: hospedagem compartilhada, vps e comandos linux. Com o tempo aprendi Docker para facilitar na vps, cheguei a usar um pouco o 'laradock'.
                Trabalhei com criação de sistema desde a modelagem, versionamento a lançamento de versão estável.
            </p>
        </CardExperience>
        <CardExperience :img="DC" dateStart="2019-03-01" dateEnd="2021-06-01" level="Júnior" title="DC Tecnologia"
            link="https://tecnologiadc.com.br/" class="border border-white">
            <p class="text-justify">
                Atuei em: Criação de layouts com responsividade (front-end).
                Criação e consumo de APIs.
                Criação autenticação e autorizações de usuários de um a muitos(guards cnfigurados). 
                Criação de CronJobs e eventos em tempo real com uso de filas, CronJob já cheguei a configurar em servidor.
                Atualizei sistemas legados desde versões antigas do laravel a sistemas sem framework, apenas o
                php. <br> Antes de fazer a mudança de trabalho por condições melhores, cheguei a pegar um pouco de comandos linux com ubunto.
            </p>
        </CardExperience>
    </Card>

</template>
<script setup>
import VWP from '@/assets/images/vwp.jpeg';
import DC from '@/assets/images/dc.png';
//COMPONENTS
import Card from '@/components/Card/Card.vue';
import CardExperience from '@/components/Card/CardExperience.vue';
import Button from '@/components/Button/Button.vue';
//END COMPONENTS
</script>