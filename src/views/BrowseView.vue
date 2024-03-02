<template>
    <div class="class">{{ init }}</div>
</template>

<script setup>
import { ref } from "vue";
let init = ref('hello world')
</script>

<style scoped></style>