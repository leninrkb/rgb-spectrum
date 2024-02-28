<template>
    <div class="container">
        <router-view />
    </div>
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

html {
    background-color: rgb(200, 200, 200);
}

.container {
    padding: 0.5em;
    border-radius: 0.5em;
    background-color: gray;
    color: rgb(250, 250, 250);
    overflow: auto;
    height: 96vh;
}
</style>
