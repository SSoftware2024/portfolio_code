<template>
    <Teleport to="body" class="w-full flex justify-center">
        <div class="absolute flex justify-center top-0 left-0 w-full h-full z-20" v-if="show">
            <div class="absolute p-2 min-w-[300px] w-[40%] flex justify-center top-[10%] z-40">
                <div :class="['relative bg-[#2c3b51] w-full h-auto px-3 py-2', show ? 'animate-show' : '']">
                    <h1 v-if="title" class="text-xl font-bold text-center">{{ title }}</h1>
                    <slot></slot>

                    <div class="absolute top-[10px] right-[10px] z-50">
                        <font-awesome-icon :icon="faXmark" class="text-2xl font-bold cursor-pointer"
                            @click="$emit('close')"></font-awesome-icon>
                    </div>
                </div>
            </div>
        </div>
        <div class="backdrop-modal animate-show-backdrop" id="backdropModal" v-if="show" @click="emit('close')"></div>
    </Teleport>
</template>
<script setup>
import { faXmark } from '@fortawesome/free-solid-svg-icons'
const props = defineProps({
    show: {
        type: Boolean,
        default: true
    },
    title: {
        type: String,
        default: ''
    }
});
const emit = defineEmits(['close']);
</script>
<style scoped lang="scss">
.backdrop-modal {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
    width: 100%;
    height: 100dvh;
    z-index: 10;
}

.animate-show {
    animation-name: zoomIn;
    animation-duration: .3s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

.animate-show-backdrop {
    animation-name: fadeIn;
    animation-duration: .3s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}
</style>