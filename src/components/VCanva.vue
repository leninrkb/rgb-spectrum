<template>
    <canvas id="canva"></canvas>
</template>

<script setup>
import { defineProps, onBeforeMount } from "vue";

const props = defineProps(["img_url"]);

onBeforeMount(() => {
    drawimg(props.img_url);
});

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
    console.log(img.src);
}

</script>