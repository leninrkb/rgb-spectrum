<template>
    <div id="upload_container">
        <FlatButton>Upload Image</FlatButton>
        <input id="upload_input" type="file" @change="file_handler" />
    </div>
</template>

<script setup>
import FlatButton from "./FlatButton.vue";

const file_handler = (e) => {
    console.log(e.target.files[0]);
};
</script>

<style scoped>
#upload_container {
    position: relative;
}

#upload_input {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
}
</style>