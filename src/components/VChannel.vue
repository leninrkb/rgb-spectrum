<template>
    <VColumn>
        <img :src="source" alt="red channel">
        <div>graph</div>
        <input type="range" min="0" max="255" v-model="increment">
        <OutlineButton @click="apply_increment">Apply</OutlineButton>
    </VColumn>
</template>

<script setup>
import OutlineButton from "./OutlineButton.vue";
import VColumn from "../layouts/VColumn";
import { ref, defineProps, onMounted, watch } from "vue";
import { useFileStore } from "../store/index.js";

const props = defineProps(["image_data", "channel"]);

let store = useFileStore();
let source = ref(null);
let increment = ref(0);
let _image_data = null; // initial image data after split


const new_image_data = (pixels, image_data) => {
    return new ImageData(new Uint8ClampedArray(pixels), image_data.width, image_data.height);
}

const split_channel = (image_data) => {
    if (image_data === null || image_data === undefined) {
        return;
    }
    let image_array = [];
    for (let i = 0; i < image_data.data.length; i += 4) {
        let pixel = image_data.data[i + props.channel];
        let channels = [0, 0, 0, 255];
        channels[props.channel] = pixel;
        for (let j = 0; j < channels.length; j++) {
            image_array.push(channels[j]);
        }
    }
    return new_image_data(image_array, image_data);
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

const apply_increment = () => {
    let pixels = _image_data.data;
    let new_pixels = [];
    for (let i = 0; i < pixels.length; i += 4) {
        let channels = [0, 0, 0, 255];
        let pixel = pixels[i + props.channel];
        let new_pixel = pixel + parseInt(increment.value);
        if (new_pixel > 255) {
            new_pixel = 255;
        }
        channels[props.channel] = new_pixel;
        for (let q = 0; q < channels.length; q++) {
            new_pixels.push(channels[q]);
        }
    }
    let img_data = new_image_data(new_pixels, _image_data);
    source.value = create_source(img_data);
}

onMounted(() => {
    _image_data = split_channel(props.image_data, props.channel);
    source.value = create_source(_image_data);
});

watch(source, (new_source) => {
    store.set_channel(props.channel, new_source);
});

</script>

<style scoped lang="scss">
img {
    width: 20em;
    border-radius: $radius;
}
</style>