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
            search field
        </div>
        <div>
            response
        </div>
    </VColumn>
</template>

<script setup>
import VColumn from '@/layouts/VColumn.vue';
import GoBack from '@/components/GoBack.vue';
import VRow from '@/layouts/VRow.vue';

</script>

<style scoped>
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