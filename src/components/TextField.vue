<template>
    <div class="outer">
        <input id="textfield" type="text" v-on:keyup="emit_data" v-model="input_data">
        <img v-if="props.icon1 !== null" id="icon1" class="inner" :src="props.icon1" alt="icon1">
        <img v-if="props.icon2 !== null" id="icon2" class="inner" :src="props.icon2" alt="icon2">
    </div>
</template>

<script setup>
import { defineEmits, ref, defineProps } from "vue"

let input_data = ref("")

const emit = defineEmits(["data"])

const props = defineProps({
    icon1: {
        type: String,
        default: null
    },
    icon2: {
        type: String,
        default: null
    }
})

const emit_data = () => {
    emit("data", input_data)
}
</script>

<style scoped lang="scss">
@import "../scss/_var.scss";

.outer {
    position: relative;
    width: fit-content;
}

.inner {
    position: absolute;
    top: 0;
    height: 100%;
    border-radius: 100%;
}

#icon1 {
    left: 2px;
}

#icon2 {
    right: 2px;
}

#textfield {
    padding: 0.5em 2em;
    border-radius: $radius;
    font-size: 1.2em;
}
</style>