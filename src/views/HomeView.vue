<template>
	<VColumn>
		<ElevatedCard>
			<VRow>
				<InputFile></InputFile>
				<FlatButton><router-link :to="{ name: 'browse' }">Browse on web</router-link></FlatButton>
			</VRow>
		</ElevatedCard>
		<ElevatedCard>
			title: selected img img: <img :src="store.get_object_url" alt="selected img" />
			info: m * n
		</ElevatedCard>
		<ElevatedCard> seccion 3 </ElevatedCard>
	</VColumn>
</template>

<script setup>
import InputFile from "../components/InputFile.vue";
import ElevatedCard from "../components/ElevatedCard.vue";
import VRow from "../layouts/VRow.vue";
import VColumn from "../layouts/VColumn.vue";
import FlatButton from "../components/FlatButton.vue";
// import { ref, onMounted } from "vue";
import { useFileStore } from "../store/index.js";

const store = useFileStore();

</script>
