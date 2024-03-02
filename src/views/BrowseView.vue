<template>
    <VColumn>
        <div>
            <IconButton :source="arrow_back" @click="go_back"></IconButton>
        </div>
        <div>
            googly
        </div>
        <div>
            search field
        </div>
        <div>
            response
        </div>
    </VColumn>
</template>

<script setup>
import IconButton from '@/components/IconButton.vue';
import VColumn from '@/layouts/VColumn.vue';
import { useRouter } from 'vue-router';

let arrow_back = require('../assets/arrow_back_FILL1_wght400_GRAD0_opsz24.svg');
const router = useRouter();

const go_back = function () {
    router.go(-1);
}
</script>

<style scoped></style>