<template>
    <VRow>
        <img :src="source" alt="merged channels">
    </VRow>
</template>

<script setup>
import VRow from "../layouts/VRow.vue";
import { useFileStore } from "../store/index.js";
import { onBeforeMount, ref, watch, defineProps } from "vue";

let props = defineProps(["merge"]);
let store = useFileStore();
let source = ref(null);

const merge = (red, green, blue) => {
    let merged = [];
    for (let i = 0; i < red.data.length; i += 4) {
        merged.push(red.data[i]);
        merged.push(green.data[i + 1]);
        merged.push(blue.data[i + 2]);
        merged.push(255);
    }
    return new ImageData(new Uint8ClampedArray(merged), red.width, red.height);

}

const create_source = (image_data) => {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = image_data.width;
    canvas.height = image_data.height;
    ctx.putImageData(image_data, 0, 0);
    let source = canvas.toDataURL("image/png");
    return source;
}

const show_merged = () => {
    let red = store.channels[0];
    let green = store.channels[1];
    let blue = store.channels[2];
    let merged = merge(red, green, blue);
    source.value = create_source(merged);
}

onBeforeMount(() => {
    show_merged();
});

watch(() => props.merge, (value) => {
    if (value) {
        show_merged();
    }
});
</script>

<style scoped lang="scss">
img {
    border-radius: $radius;
}
</style>