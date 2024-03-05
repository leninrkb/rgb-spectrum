<template>
    <ElevatedCard class="card">
        <img class="img" src="https://picsum.photos/500">
    </ElevatedCard>
</template>

<script setup>
import ElevatedCard from "./ElevatedCard.vue";
</script>

<style scoped lang="scss">
@import "../scss/_var.scss";

.img {
    border-radius: $radius;
    width: 15em;
}

.card {
    margin-bottom: 1.5em;
    padding: 1.2em;
    background-color: $light_green;
}
</style>