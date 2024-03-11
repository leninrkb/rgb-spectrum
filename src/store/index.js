
import { defineStore } from 'pinia'

export const useFileStore = defineStore('image', {
	state: () => {
		return {
			file: null,
			image_data: null,
		}
	},
	getters: {
		get_object_url: (state) => {
			if (state.file === null) {
				return null;
			}
			return URL.createObjectURL(state.file);
		},
		get_name: (state) => {
			if (state.file === null) {
				return null;
			}
			return state.file.name;
		}
	},
})