<template>
    <div class="container">
        <router-view />
    </div>
</template>

<style lang="scss">
@import './scss/_var.scss';

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

html {
    background-color: $light_yellow;
}

.container {
    padding: 0.5em;
    border-radius: 0.5em;
    background-color: $dark_green;
    color: $text_gray;
    overflow: auto;
    height: 96vh;
}
</style>
