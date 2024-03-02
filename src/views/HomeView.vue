<template>
    <VColumn>
        <ElevatedCard>
            <VRow>
                <input type="file">
                <FlatButton><router-link :to="{ name: 'browse' }">Browse on web</router-link></FlatButton>
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
import FlatButton from '../components/FlatButton.vue';
</script>

<style scoped></style>
