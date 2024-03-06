<template>
    <VColumn>
        <ElevatedCard>
            <VRow>
                <div id="upload_container">
                    <FlatButton>Upload Image</FlatButton>
                    <input id="upload_input" type="file">
                </div>
                <FlatButton><router-link :to="{ name: 'browse' }">Browse on web</router-link></FlatButton>
            </VRow>
        </ElevatedCard>
        <ElevatedCard>
            Seccion 2
        </ElevatedCard>
        <ElevatedCard>
            seccion 3
        </ElevatedCard>
    </VColumn>
</template>

<script setup>
import ElevatedCard from '../components/ElevatedCard.vue';
import VRow from '../layouts/VRow.vue';
import VColumn from '../layouts/VColumn.vue'
import FlatButton from '../components/FlatButton.vue';
</script>

<style scoped lang="scss">
#upload_container{
    position: relative;
}

#upload_input{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    
}
</style>
