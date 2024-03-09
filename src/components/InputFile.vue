<template>
    <div id="upload_container">
        <FlatButton>Upload Image</FlatButton>
        <input id="upload_input" type="file" @change="file_handler" />
    </div>
</template>

<script setup>
import FlatButton from "./FlatButton.vue";
import { useFileStore } from "../store/index.js";

const store = useFileStore();

const file_handler = (e) => {
    const files = e.target.files;
    if (files !== undefined || files !== null) {
        if (files.length > 0) {
            store.file = files[0];
        }
    } else {
        store.file = null;
    }
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