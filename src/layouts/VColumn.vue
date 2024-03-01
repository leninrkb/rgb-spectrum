<template>
    <div class="myclass">
        <slot></slot>
    </div>
</template>

<style scoped>
.myclass {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
}
</style>