<template>
    <Card class="relative border border-neutral-200">
        <h1 class="relative text-2xl font-bold mb-3 text-center z-10">Habilidades</h1>
        <div class="flex justify-center">
            <Button :class="['bg-[#4d82a5]', active_filter == '*' ? 'active' : '']" @click="filter('*')">Todos</Button>
            <Button :class="['bg-[#4d82a5]', active_filter == 'back' ? 'active' : '']"
                @click="filter('back')">Back-End</Button>
            <Button :class="['bg-[#4d82a5]', active_filter == 'css' ? 'active' : '']"
                @click="filter('css')">CSS</Button>
            <Button :class="['bg-[#4d82a5]', active_filter == 'js' ? 'active' : '']" @click="filter('js')">JS</Button>
            <Button :class="['bg-[#4d82a5]', active_filter == 'database' ? 'active' : '']"
                @click="filter('database')">Banco</Button>
            <Button :class="['bg-[#4d82a5]', active_filter == 'others' ? 'active' : '']"
                @click="filter('others')">Outros</Button>
        </div>
        <div class="flex justify-center  mb-1 mt-4">
            <span class="w-[460px]">
                <font-awesome-icon :icon="faCircleInfo" class="text-white text-lg"></font-awesome-icon>
                Veja mais informações colocando o 'mouse' sobre a imagem. e clicando no icone '<span class="font-bold">?</span>'.
            </span>
        </div>
        <div class="w-full flex flex-row flex-wrap justify-center overflow-y-auto max-h-[500px]">
            <Image :src="images.docker" description="Docker" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'others')
            }"></Image>

            <Image :src="images.php" description="" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'back')
            }"></Image>
            <Image :src="images.laravel" description="Laravel" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'back')
            }"></Image>
            <Image :src="images.livewire" description="Livewire" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'back')
            }"></Image>
            <Image :src="images.alpine" description="Alpine" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'js')
            }"></Image>
            <Image :src="images.inertia" description="Inertia" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'back')
            }"></Image>
            <Image :src="images.vue" description="Vue" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'js')
            }"></Image>
            <Image :src="images.vuetify" description="Vuetify" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'js')
            }"></Image>
            <Image :src="images.quasar" description="Quasar" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'js')
            }"></Image>
            <Image :src="images.primevue" description="Primevue" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'js')
            }"></Image>
            <Image :src="images.react" description="React" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'js')
            }"></Image>
            <Image :src="images.material" description="Material" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'js')
            }"></Image>
            <Image :src="images.vite" description="Vite" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'others')
            }"></Image>
            <Image :src="images.jquery" description="Jquery" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'js')
            }"></Image>
            <Image :src="images.sass" description="Sass" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'css')
            }"></Image>
            <Image :src="images.tailwind" description="Tailwind" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'css')
            }"></Image>
            <Image :src="images.bootstrap" description="Bootstrap" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'css')
            }"></Image>
            <Image :src="images.foundation" description="Foudation" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'css')
            }"></Image>
            <Image :src="images.materialize" description="Materialize" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'css')
            }"></Image>
            <Image :src="images.semantic_ui" description="Semantic" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'css')
            }"></Image>
            <Image :src="images.mysql" description="MySQL" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'database')
            }"></Image>
            <Image :src="images.pgsql" description="PostgreSQL" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'database')
            }"></Image>
            <Image :src="images.sqlite" description="SQLite" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'database')
            }"></Image>
            <Image :src="images.mariadb" description="Maria DB" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'database')
            }"></Image>
            <Image :src="images.sqlserver" description="SQLServer" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'database')
            }"></Image>
            <Image :src="images.nosql" description="MongoDB" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'database')
            }"></Image>
            <Image :src="images.git" description="Git" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'others')
            }"></Image>
            <Image :src="images.github" description="GitHub" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'others')
            }"></Image>
            <Image :src="images.json" description="Json" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'others')
            }"></Image>
            <Image :src="images.xml" description="Xml" :class="{
                'w-[90px] pt-4 mr-3 mt-3': true,
                '!hidden': !(active_filter == '*' || active_filter == 'others')
            }"></Image>

        </div>
        <div class="absolute top-0 right-[15px] px-1 pt-4 cursor-pointer z-10" @click="show_modal = true">
            <font-awesome-icon :icon="faCircleQuestion" class="text-white text-2xl fa-bounce"></font-awesome-icon>
        </div>

    </Card>
    <Modal title="Habilidades++" :show="show_modal" @close="show_modal = false" ref="modal">
        <div>
            <h1 class="border-b border-b-white">Ambiente Laravel</h1>
            <ul class="list-disc list-inside">
                <li>Breeze</li>
                <li>JetStream</li>
                <li>Fortify</li>
                <li>Sanctum</li>
                <li>Passport</li>
                <li>Websockets/Reverb</li>
                <li>Queue(Filas)/Horizon</li>
                <li class="font-bold">Entre outros</li>
            </ul>
        </div>
        <div class="mt-2">
            <h1 class="border-b border-b-white">Outras linguagens</h1>
            <ul class="list-disc  list-inside">
                <li>Flutter</li>
                <li>CSharp (C#)</li>
            </ul>
        </div>
        <div class="mt-2">
            <h1 class="border-b border-b-white">Servidores DevOps</h1>
            <ul class="list-disc  list-inside">
                <li>Docker</li>
                <li>Hospedagem compartilhada</li>
                <li>VPS - Linguagem Linux</li>
                <li>GitHub Actions: Deploy e Versionamento</li>
            </ul>
        </div>
    </Modal>
</template>
<script setup>
import { ref } from 'vue';
import images from '@/js/images.js';
import { faCircleQuestion, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
//COMPONENTS
import Card from '@/components/Card/Card.vue';
import Image from '@/components/Image.vue';
import Button from '@/components/Button/Button.vue';
import Modal from '@/components/Modal.vue';
//END COMPONENTS
const show_modal = ref(false);
const active_filter = ref('*');

const modal = ref();
function filter(search) {
    active_filter.value = search;
}
</script>

<style scoped>
.active {
    background-color: #325572;
}
</style>