<template>
    <canvas ref="canvas" class="canva"></canvas>
</template>


<script setup>
import { ref, watch, defineProps, defineEmits, onBeforeMount } from "vue";

const props = defineProps(["object_url"]);
const emit = defineEmits(["image_data"]);

let canvas = ref(null); //capturo la referencia hacia el canvas

const drawimg = (url) => {
    if (url === null || url === undefined) {
        return;
    }
    let img = new Image();
    img.src = url;
    img.onload = () => { //espera a que la img este cargada
        let ctx = canvas.value.getContext("2d");
        canvas.value.width = img.width;
        canvas.value.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        let image_data = ctx.getImageData(0, 0, canvas.value.width, canvas.value.height);
        emit("image_data", image_data);
    }
}

watch(() => props.object_url, (newurl) => {
    drawimg(newurl);
})

onBeforeMount(() => {
    drawimg(props.object_url);
});
</script>


<style scoped lang="scss">
.canva {
    max-width: 40em;
    max-height: 40em;
    margin: auto;
    border-radius: $radius;
}
</style>