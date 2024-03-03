<template>
    <div>
        <input type="text" v-on:keyup="emit_data" v-model="input_data">
        <img src="" alt="icon">
        <img src="" alt="icon">
    </div>
</template>

<script setup>
import { defineEmits, ref } from 'vue'
const emit = defineEmits(['data'])
let input_data = ref('')
const emit_data = () => {
    emit('data', input_data)
}
</script>

<style scoped></style>