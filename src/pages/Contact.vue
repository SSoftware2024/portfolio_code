<template>
    <Card class="border border-neutral-200">
        <h1 class="relative text-2xl font-bold mb-3 text-center z-10">Envie-me um e-mail.</h1>
        <div>
            <form @submit.prevent="sendEmail" class="flex flex-col space-y-2">
                <input type="text" placeholder="Nome"
                    class="w-full px-2 py-3 rounded-md bg-[#000a3f] focus:outline-none" v-model="sender.name">
                <input type="text" placeholder="Assunto"
                    class="w-full px-2 py-3 rounded-md bg-[#000a3f] focus:outline-none" v-model="sender.subject">
                <textarea rows="3" placeholder="Menssagem"
                    class="w-full px-2 py-3 rounded-md bg-[#000a3f] focus:outline-none"
                    v-model="sender.body"></textarea>
                <div class="flex justify-end">
                    <button class="bg-yellow-600 rounded-md mr-2 p-1 hover:bg-yellow-800" type="button" @click="clear">Limpar</button>
                    <button class="bg-green-600 rounded-md mr-2 p-1 hover:bg-green-800" type="submit">Enviar</button>
                </div>
            </form>
        </div>
    </Card>
</template>
<script setup>
import { reactive } from 'vue';
//COMPONENTS
import Card from '@/components/Card/Card.vue';
//END COMPONENTS

const sender = reactive({
    name: '',
    subject: '',
    body: ''
});

function sendEmail() {
    var receiver = 'tiagooliveiraaso2@gmail.com';
    const body = 'Olá Tiago me chamo: ' + sender.name+ "\n Segue minha menssagem: \n " + sender.body;

    var mailtoLink = 'mailto:' + receiver +
        '?subject=' + encodeURIComponent(sender.subject) +
        '&body=' + encodeURIComponent(body);

    window.location.href = mailtoLink;
}

function clear(){
    sender.name = '';
    sender.subject = '';
    sender.body = '';
}
</script>