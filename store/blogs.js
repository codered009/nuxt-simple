import axios from "axios";

// create a store
export const state = () => ({
	blogs: {}
});

// getters
export const getters = {
	blogs(state) {
		return state.blogs;
	}
};

// mutations
export const mutations = {
	SET_BLOGS(state, blogs) {
		state.blogs = blogs;
	}
};

// actions
export const actions = {
	async nuxtServerInit({ commit }) {
		let { data } = await axios.get(
			"http://api.royalthrills.com.test/api/blogs"
		);

		commit("SET_BLOGS", data);
	}
};
