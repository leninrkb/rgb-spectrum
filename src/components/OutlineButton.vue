<template>
    <FlatButton class="btn">
        <slot></slot>
    </FlatButton>
</template>

<script setup>
import FlatButton from "./FlatButton.vue";
</script>

<style scoped lang="scss">
.btn {
    background-color: $dark_orange;
    border: 2px solid $dark_green;
    color: $dark_green;

    &:hover {
        border: 2px solid $light_yellow;
        color: $light_yellow;
    }
}
</style>