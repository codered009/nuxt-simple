<template>
	<div>
		<div>hi!</div>
		  <div v-for="blog in blogs" :key="blog.id" :blog="blog"> {{blog.title}} </div>
	</div>
</template>

<script>
	import axios from 'axios'
	import {mapGetters} from 'vuex'

	export default {
		data() {
			return {
				allBlogs: '' 
			}
		},
		computed: {
			...mapGetters(['blogs'])
		}, 
		head: {
			title: 'List of Blogs'
		}
	}
</script>
