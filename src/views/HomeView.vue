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
				<h4 class="text-xl font-bold">{{ store.get_name }}</h4>
				<VCanva :object_url="store.get_object_url" @image_data="catch_image_data"></VCanva>
				<OutlineButton @click="show_channels">Split chanels</OutlineButton>
			</VColumn>
		</ElevatedCard>
		<ElevatedCard v-if="split_channels">
			<VRow>
				<VChannel :channel="0" :image_data="store.image_data" @changed="show_merged = false"></VChannel>
				<VChannel :channel="1" :image_data="store.image_data" @changed="show_merged = false"></VChannel>
				<VChannel :channel="2" :image_data="store.image_data" @changed="show_merged = false"></VChannel>
			</VRow>
			<br>
			<VColumn>
				<OutlineButton @click="merge">Merge Channels</OutlineButton>
			</VColumn>
		</ElevatedCard>
		<ElevatedCard v-if="merge_channels">
			<MergedChannels :merge="show_merged"></MergedChannels>
		</ElevatedCard>
	</VColumn>
</template>

<script setup>
import MergedChannels from "@/components/MergedChannels.vue";
import VChannel from "../components/VChannel.vue";
import OutlineButton from "../components/OutlineButton.vue";
import VCanva from "../components/VCanva.vue";
import InputFile from "../components/InputFile.vue";
import ElevatedCard from "../components/ElevatedCard.vue";
import VRow from "../layouts/VRow.vue";
import VColumn from "../layouts/VColumn.vue";
import FlatButton from "../components/FlatButton.vue";
import { ref, watch } from "vue";
import { useFileStore } from "../store/index.js";

const store = useFileStore();

let split_channels = ref(false);
let merge_channels = ref(false);
let show_merged = ref(false);

const catch_image_data = (data) => {
	store.image_data = data;
}
const show_channels = () => {
	if (store.file !== null) {
		split_channels.value = true;
	}
}

const merge = () => {
	merge_channels.value = true;
	show_merged.value = true;
}

watch(() => store.get_object_url, () => {
	split_channels.value = false;
	merge_channels.value = false;
});
</script>
