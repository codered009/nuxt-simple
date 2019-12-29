<template>
  <div>
  	<Nav/>
  	<div class="jumbotron"></div>
    <nuxt/>
  </div>
</template>

<script>
	import Nav from '@/components/Nav'
	export default {
		components: {
			Nav
		}
	}
</script>
