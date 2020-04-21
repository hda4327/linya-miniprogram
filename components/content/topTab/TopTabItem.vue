<template>
	
    <navigator class="tab-item" :url="isCurrentPath?'':path" open-type="redirect" animation-type="none"> 
        <div :style="{borderBottom:activeTab?activeColor+ ' 2px solid':'','color':activeTab?activeColor:''}" class="tab-name"><slot></slot></div>
    </navigator>
</template>

<script>
    export default {
        name: "TopTabItem",
        props: {
            path: String,
            activeColor:{
                type: String,
                default: '#4c96ff',
            }
        },
        data(){
            return{
                isActive:false,
				currentPath: ''
            }
        },
		mounted() {
			// console.log('p2',)
			this.currentPath = this.path
		},
        methods:{
            
        },
        computed:{

            activeTab(){
                return this.$Route.path.indexOf(this.path)>-1
            },
			isCurrentPath(){
				return this.$Route.path === this.path
			}
        },
		watch:{
			
		}
    }
</script>

<style scoped>
.tab-item{
    height: 30px;
    color: black;
    flex: 1;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
}
    .tab-name{
        width: 40px;
        height: 20px;
    }
</style>