<template>
    <div>
        <div class="flex justify-start">
            <div class="flex justify-start">
                <a :href="link" target="_blank">
                    <img :src="img" alt="" class="w-[90px]">
                </a>
            </div>
            <div class="flex justify-center flex-col items-center w-full">
                <h1 class="font-bold text-xl">{{ title }}</h1>
            </div>
        </div>
        <div class="flex flex-col p-2 bg-[#354d6f]">
            <h2><span class="font-bold">Sênioridade:</span> {{ level }}</h2>
            <h2><span class="font-bold">Data início:</span> {{ date.format_date(dateStart)}}</h2>
            <h2><span class="font-bold">Data Fim:</span> {{ date.format_date(dateEnd) }}</h2>
            <h2><span class="font-bold">Duração: </span> {{ `${calcTime(dateStart, dateEnd).years} anos e ${calcTime(dateStart, dateEnd).months} meses`}}</h2>
        </div>
        <div class="bg-[#1d2634] p-2">
            <slot></slot>
        </div>

    </div>
</template>
<script setup>
import { date } from '@/js/functions.js';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    dateStart: {
        type: String,
        required: true
    },
    dateEnd: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    }
})

function calcTime(date1, date2) {
    return date.dateDiff(new Date(date1), new Date(date2))
}
</script>