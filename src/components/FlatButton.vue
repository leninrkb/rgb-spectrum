<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
@import '../scss/_var.scss';

.btn {
    padding: 0.3em;
    background-color: $light_green;
    border-radius: $radius;
    transition: .1s ease-in-out;

    &:active {
        background-color: $dark_green;
    }
}
</style>