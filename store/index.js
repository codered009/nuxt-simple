import axios from "axios";

// create a store
export const state = () => ({
	posts: {}
});

// getters
export const getters = {
	posts(state) {
		return state.posts;
	}
};

// mutations
export const mutations = {
	SET_POSTS(state, posts) {
		state.posts = posts;
	}
};

// actions
export const actions = {
	async nuxtServerInit({ commit }) {
		let { data } = await axios.get(
			"http://api.royalthrills.com.test/api/blogs"
		);
		commit("SET_POSTS", data);
	}
	// setPosts({ commit }, posts) {
	// 	commit("SET_POSTS", posts);
	// }
};
