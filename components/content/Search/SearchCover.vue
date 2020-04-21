<template>
    <div class="main">
        <div class="search-cover" v-if="isShowCover" @click="isShowCover = false"></div>
    </div>
</template>

<script>
    export default {
        name: "SearchCover",
        data() {
            return {
                isShowCover:false
            }
        },
        created(){
            this.$EventBus.$on('addCover', ()=>{
                this.isShowCover =true
            })
			this.$EventBus.$on('removeCover', ()=>{
                this.isShowCover =false
            })
			
    //         this.$once('hook:beforeDestory', ()=>{
				// console.log('des')
    //             this.$EventBus.$off('addCover')
    //         })
        },
		beforeDestroy() {
			this.$EventBus.$off('addCover')
		}
    }
</script>

<style scoped lang="scss">
    .search-cover{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(175,175,175,0.2);
    }
</style>