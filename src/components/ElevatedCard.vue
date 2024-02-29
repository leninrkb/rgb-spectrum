<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
@import '../scss/_var.scss';

.card {
    border-radius: $radius;
    background-color: $light_orange;
    padding: $padding;
    transition: .2s ease-in-out;

    &:hover {
        translate: 0 -.1em;
        background-color: lighten($color: $light_orange, $amount: 2);
        box-shadow: $shadow;
    }
}
</style>