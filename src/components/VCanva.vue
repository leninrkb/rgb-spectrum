<template>
    <canvas id="canva"></canvas>
</template>


<script setup>
import { defineProps, watch } from "vue";

const props = defineProps(["img_url"]);

const drawimg = (url) => {
    let img = new Image();
    img.onload = () => {
        let canvas = document.getElementById("canva");
        let ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
    }
    img.src = url;
}

watch(() => props.img_url, (newurl) => {
    console.log("cambio");
    drawimg(newurl);
})
</script>


<style scoped lang="scss">
#canva {
    max-width: 40em;
    max-height: 40em;
    margin: auto;
    border-radius: $radius;
}
</style>