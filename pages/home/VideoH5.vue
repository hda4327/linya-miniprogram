<template>
	<web-view :src="src"></web-view>
</template>

<script>
	export default{
		data(){
			return{
				src:''
			}
		},
		onLoad(option) {
			
			let sid = this.$store.state.sid
			this.src = option.url +'?sid=' + sid
			
			if(option.id){
				this.src += '&id='+ option.id
			}
			console.log(this.src)
		}
	}
</script>

<style>
</style>
