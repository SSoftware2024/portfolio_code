<template>
    <div id="navigation" class="">
        <div class="mobile mobile-show">
            <font-awesome-icon :icon="faArrowLeft"
                :class="['text-3xl mr-6', actual_route > 0 ? 'heartbeat cursor-pointer' : 'opacity-30']"
                @click="prevPage" />
            <span class=" relative bottom-[3px] text-2xl">{{ links[actual_route].title }}</span>
            <font-awesome-icon :icon="faArrowRight"
                :class="['text-3xl ml-6', actual_route < (links.length - 1) ? 'heartbeat cursor-pointer' : 'opacity-30']"
                @click="nextPage" />
        </div>
        <div class="desktop custom-container sm-show  sm:flex sm:justify-center">
            <ul>
                <li v-for="(value, index) in links" class="text-xl">
                    <span :class="['cursor-pointer',
                route.name == value.name ? 'underline' : '']"
                @click="routerPush(value.name, index)">
                        {{ value.title }}
                    </span>
                    <font-awesome-icon :icon="faWindowMinimize" class='text-2xl ml-5 fa-rotate-90' v-if="index < links.length - 1" />
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref, computed, onMounted } from 'vue';
import { faArrowLeft, faArrowRight, faWindowMinimize } from '@fortawesome/free-solid-svg-icons'
import '@/sass/components/navigation.scss';
import { useRouter, useRoute } from 'vue-router'

const router = useRouter();
const route = useRoute();
const actual_route = ref(0);

const links = reactive([
    {
        title: 'Sobre',
        name: 'about',
    },
    {
        title: 'Habilidades',
        name: 'skills',
    },
    {
        title: 'Experiência',
        name: 'experience',
    },
    {
        title: 'Projetos',
        name: 'projects',
    },
    {
        title: 'Contato',
        name: 'contact',
    },
]);


function nextPage() {
    actual_route.value++;
    actual_route.value = _validIndexRoute(actual_route.value);
    router.push({ name: links[actual_route.value].name });
}
function prevPage() {
    actual_route.value--;
    actual_route.value = _validIndexRoute(actual_route.value);
    router.push({ name: links[actual_route.value].name });
}

function routerPush(value, index){
    actual_route.value = index;
    router.push({ name: value });
}

function _validIndexRoute(value) {
    if (value >= links.length) {
        return links.length - 1;
    } else if (value < 0) {
        return 0;
    } else {
        return value;
    }
}

onMounted(() => {
    actual_route.value = links.findIndex(value => value.name === route.name);
});
</script>
<style scoped lang="scss">
.heartbeat {
    animation: heartBeat 1s infinite;
}

.mobile-show {
    display: none;

    @media (max-width: 639px) {
        display: inline-block;
    }
}

.sm-show {
    display: inline-block;

    @media (max-width: 639px) {
        display: none;
    }
}
</style>
