<template>
  <div>
    <div>
      <h2>Making API request - the Vue way</h2>
      <hr>
    </div>
    <div class="container row">
      <Card v-for="post in posts" :key="post.id" :post="post" class="ml-auto mr-auto" />
      <button class="btn btn-danger" v-scroll-to="'body'">Back to Top</button>
    </div>
  </div>
</template>

<script>
	import axios from 'axios'
	import Card from '@/components/Card'
	import {mapGetters} from 'vuex'

	export default {
		components: {
			Card
		},
		data() {
			return {
				allPosts: '' 
			}
		},
		computed: {
			...mapGetters(['posts'])
			// allPosts() {
			// 	return this.$store.getters.posts
			// }
		},

		// async fetch({store}) {
		// 	let {data} =  await axios.get('https://jsonplaceholder.typicode.com/posts')
		// 	// return {allPosts: data}
		// 	store.dispatch('setPosts', data)
		// },   
		head: {
			title: 'List of Posts'
		}
	}
</script>
