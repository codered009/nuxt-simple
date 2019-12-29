<template>
	<div class="container">
		<h1>{{post.title}}</h1>
		<pre>{{post.body}}</pre>
		<nuxt-link to="/posts">Back to posts</nuxt-link>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				post: ''
			}
		},
		async asyncData({params}) {
			let {data} =  await axios.get(`http://api.royalthrills.com.test/api/blogs/${params.id}`)
			return {post: data}
		},
		head() {
			return {
				title: this.post.title
			}
		}
	}
</script>