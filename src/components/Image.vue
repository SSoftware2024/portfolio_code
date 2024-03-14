<template>
    <div class="animate-name" @mouseenter="playSound">
        <img :src="src" :alt="description">
        <span class="text-center font-bold">{{ description }}</span>
    </div>
</template>
<script setup>
defineProps({
    src: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    }
});
</script>
<style scoped lang="scss">
.animate-name {
    position: relative;
    overflow-y: hidden;
    display: flex;
    justify-content: center;
    min-width: 50px;

    img {
        position: relative;
        transition: bottom .1s ease-out;
        bottom: 0;
        width: 50px;
    }

    span {
        position: absolute;
        bottom: 0;
        display: block;
        opacity: 0;
        visibility: hidden;
    }

    &:hover {
        img {
            bottom: 15px;
        }

        span {
            visibility: visible;
            animation-name: fadeInUp;
            animation-duration: .2s;
            animation-timing-function: ease-in-out;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
        }
    }

}
</style>