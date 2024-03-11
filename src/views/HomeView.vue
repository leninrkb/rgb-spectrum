<template>
	<VColumn>
		<ElevatedCard>
			<VRow>
				<InputFile></InputFile>
				<FlatButton><router-link :to="{ name: 'browse' }">Browse on web</router-link></FlatButton>
			</VRow>
		</ElevatedCard>
		<ElevatedCard>
			<VColumn>
				title: {{ store.get_name }}
				<!-- <img :src="store.get_object_url" alt="selected img" /> -->
				<VCanva :img_url="store.get_object_url" @context="handleCanvaCtx"></VCanva>
				<OutlineButton>Split chanels</OutlineButton>
			</VColumn>
		</ElevatedCard>
		<ElevatedCard>
			<VRow>
				<VChannel></VChannel>
				<VChannel></VChannel>
				<VChannel></VChannel>
			</VRow>
		</ElevatedCard>
	</VColumn>
</template>

<script setup>
import VChannel from "../components/VChannel.vue";
import OutlineButton from "../components/OutlineButton.vue";
import VCanva from "../components/VCanva.vue";
import InputFile from "../components/InputFile.vue";
import ElevatedCard from "../components/ElevatedCard.vue";
import VRow from "../layouts/VRow.vue";
import VColumn from "../layouts/VColumn.vue";
import FlatButton from "../components/FlatButton.vue";
// import { ref, onMounted } from "vue";
import { useFileStore } from "../store/index.js";

const store = useFileStore();
const handleCanvaCtx = (ctx) => {
	store.ctx = ctx;
}
</script>
