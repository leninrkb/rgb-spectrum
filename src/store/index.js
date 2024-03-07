
import { defineStore } from 'pinia'

export const useFileStore = defineStore('image', {
	state: () => {
		return {
			file: null
		}
	},
	getters: {
		get_object_url: (state) => {
			if (state.file === null) {
				return "";
			}
			return URL.createObjectURL(state.file);
		}
	}
})