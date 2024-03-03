<template>
    <IconButton :source="arrow_back" @click="router.go(-1)"></IconButton>
</template>

<script setup>
import IconButton from '@/components/IconButton.vue';
import { useRouter } from 'vue-router';
const router = useRouter()
let arrow_back = require('../assets/arrow_back_FILL1_wght400_GRAD0_opsz24.svg');

</script>