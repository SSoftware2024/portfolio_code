<template>
    <button :type="type" class="p-3">
        <slot></slot>
    </button>
</template>
<script setup>
defineProps({
    type: {
        type: String,
        default: 'button'
    }
});
</script>