<template>
    <VColumn>
        <div>
            <GoBack></GoBack>
        </div>
        <div>
            <VRow>
                <div class="logo">
                    <span>G</span>
                    <span>o</span>
                    <span>o</span>
                    <span>g</span>
                    <span>l</span>
                    <span>y</span>
                </div>
            </VRow>
        </div>
        <div>
            <VRow>
                <form @submit.prevent="form_handler">
                    <TextField :icon1="search_icon" @data="(q) => { search_text = q }"></TextField>
                </form>
            </VRow>
        </div>
        <div>
            <SearchResults></SearchResults>
        </div>
    </VColumn>
</template>

<script setup>
import SearchResults from "@/components/SearchResults.vue";
import VColumn from "@/layouts/VColumn.vue";
import GoBack from "@/components/GoBack.vue";
import VRow from "@/layouts/VRow.vue";
import TextField from "@/components/TextField.vue";
import { ref } from "vue";

let search_text = ref("")
let search_icon = require("../assets/search_FILL1_wght400_GRAD0_opsz48.svg");

const form_handler = () => {
    console.log(search_text.value);
}
</script>

<style scoped lang="scss">
.logo {
    font-size: 5em;
    font-family: sans-serif;
    text-shadow: 1px 1px 4px;

    & span:nth-child(1) {
        color: rgb(51, 51, 255);
    }

    & span:nth-child(2) {
        color: rgb(250, 62, 62);
    }

    & span:nth-child(3) {
        color: rgb(250, 187, 62);
    }

    & span:nth-child(4) {
        color: rgb(51, 51, 255);
    }

    & span:nth-child(5) {
        color: rgb(0, 177, 6);
    }

    & span:nth-child(6) {
        color: rgb(250, 62, 62);
    }
}
</style>