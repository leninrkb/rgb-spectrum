<template>
    <VColumn>
        <img :src="source" alt="red channel">
        <div>graph</div>
        <meter value="0.2"></meter>
        <OutlineButton>Apply</OutlineButton>
    </VColumn>
</template>

<script setup>
// import VCanva from "../components/VCanva.vue";
import OutlineButton from "./OutlineButton.vue";
import VColumn from "../layouts/VColumn";
import { ref, defineProps, onMounted } from "vue";

const props = defineProps(["image_data", "channel"]);

let source = ref(null);

const split_channel = (image_data, channel) => {
    if (image_data === null || image_data === undefined) {
        return;
    }
    let new_array_image = [];
    for (let i = 0; i < image_data.data.length; i += 4) {
        let pixel = image_data.data[i + channel];
        let channels = [0, 0, 0, 255];
        channels[channel] = pixel;
        for (let j = 0; j < channels.length; j++) {
            new_array_image.push(channels[j]);
        }
    }
    return new ImageData(new Uint8ClampedArray(new_array_image), image_data.width, image_data.height);
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

onMounted(() => {
    let new_image_data = split_channel(props.image_data, props.channel);
    source.value = create_source(new_image_data);
});

</script>

<style scoped></style>