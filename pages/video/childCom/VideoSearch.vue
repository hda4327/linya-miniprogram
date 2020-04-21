<template>
	<view class="search-mian">
		<view class="search-main">
			<picker mode="selector" :value="curIndex" :range="typeList"  range-key="name" class="picker-btn" @change="changeType">
				<text class="text-line-ov-hide title">{{typeName}}</text>
				
				<image src="/static/img/video/more-select.png" class="more-select"></image>
			</picker>
			
			
		</view>

		<view style="height: 50px;"></view>
	</view>

</template>

<script>
	export default {
		name: "search",
		data() {
			return {
				curIndex: 0,
				
			}
		},
		props: {
			typeList: {
				type:Array,
				default(){
					return []
				}
				}
		},
		
		computed: {
			typeName(){
				return this.typeList.length?this.typeList[this.curIndex].name:''
			}
		},
		watch: {

		},
		methods: {
			changeType(res) {
				// picker选择结果的索引值
				this.curIndex = parseInt(res.detail.value)
				
				let typeId = this.typeList[this.curIndex]['type']
				this.$emit("changeType", typeId)
			}
		}
	}
</script>

<style scoped lang="scss">
	.search-main {
		position: fixed;
		height: 50px;
		left: 0;
		right: 0;
		z-index: 999;
		background: rgba(76, 150, 255, 1);
		display: flex;
		align-items: center;



		.picker-btn {
			// width: 225px;
			height: 20px;
			color: #fff;
			font-size: 14px;
			margin-left: 15px;
			.title{
				width: 320px;
				display: inline-block;
			}
			
			.more-select {
				width: 6.5px;
				height: 10px;
				margin-left: 5px;
				vertical-align: 3px;

			}
		}

		
	}
</style>
