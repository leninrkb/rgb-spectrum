<template>
    <FlatButton class="btn">
        <img :src="source" alt="icon">
    </FlatButton>
</template>

<script setup>
import FlatButton from './FlatButton.vue'
import { defineProps } from 'vue'
defineProps({
    source: {
        type: String,
        default: 'https://picsum.photos/100'
    }
})
</script>

<style scoped lang="scss">
.btn {
    border-radius: 100%;

    img {
        border-radius: 100%;
        width: 3em;
    }
}
</style>