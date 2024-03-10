
import { defineStore } from 'pinia'

export const useFileStore = defineStore('image', {
	state: () => {
		return {
			file: null
		}
	},
	getters: {
		get_object_url: (state) => {
			console.log(state.file.width);
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