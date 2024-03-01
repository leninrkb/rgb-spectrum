<template>
    <div class="myclass">
        <slot></slot>
    </div>
</template>

<style scoped>
.myclass {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>