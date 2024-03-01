<template>
    <VColumn>
        <ElevatedCard>
            <VRow>
                <input type="file">
                <button>browse image</button>
            </VRow>
        </ElevatedCard>
        <ElevatedCard>
            Seccion 2
        </ElevatedCard>
        <ElevatedCard>
            seccion 3
        </ElevatedCard>
    </VColumn>
</template>

<script setup>
import ElevatedCard from '../components/ElevatedCard.vue';
import VRow from '../layouts/VRow.vue';
import VColumn from '../layouts/VColumn.vue'
</script>

<style scoped></style>
