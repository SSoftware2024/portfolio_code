<template>
    <div class="min-w-[100px]">
        <div class="flex justify-center">
            <img :src="isBulding?building:img" alt="" class="w-[100px]">
        </div>
        <div>
            <h1 class="text-center text-xl font-bold">{{ isBulding && title=='' ? 'Construindo...':title }}</h1>
            <p class="text-justify">
                {{ isBulding ? 'O projeto está em construção':'' }}
                <slot></slot>

            </p>
        </div>
        <div class="flex justify-end mt-4">
            <a :href="github" target="_blank" class="bg-blue-600 rounded-md mr-2 p-1 hover:bg-blue-800 ">GITHUB</a> <!-- link do video no markdown do github -->
            <a :href="online" target="_blank" v-if="online" class="bg-green-600 rounded-md mr-2 p-1 hover:bg-green-800">ONLINE</a>
            <a :href="video" target="_blank" v-if="video" class="bg-red-600 rounded-md p-1 hover:bg-red-800">VÍDEO</a>
        </div>
    </div>
</template>
<script setup>
import building from '@/assets/images/building.png';
import Button from '@/components/Button/Button.vue';

defineProps({
    isBulding: {
        type: Boolean,
        default: false
    },
    img: {
        type: String,
        default:''
    },
    title: {
        type: String,
        default:''
    },
    github: {
        type: String,
        default:''
    },
    online: {
        type: String,
        default:''
    },
    video: {
        type: String,
        default:''
    }
});
</script>