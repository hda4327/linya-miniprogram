<template>
	<view>
		<view class="main">
			<view v-for="(item, index) in navList" @click="changeType(item.path)" class="title" :class="isCurrentRoute(item.path)?'active':''" :key="index">
				{{item.title}}
			</view>
		</view>
		<view style="height: 10px;"></view>
	</view>

</template>

<script>
	export default {
		name: "Nav",
		data() {
			return {
				id: '',
				class_id: '',
				whichDetail: 'picture'
			}
		},
		props: {
			navList: {
				default () {
					return [{
						title: '图解',
						path: 'picture'
					}, {
						title: '动画',
						path: 'video'
					}]
				},
				type: Array
			}
		},
		onLoad(option) {

		},
		methods: {
			changeType(witch) {
				this.whichDetail = witch
				this.$emit('changeType', witch)
			}
		},
		computed: {
			isCurrentRoute() {
				return function(path) {
					return path === this.whichDetail
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.main {
		background: #fff;
		height: 40px;
		width: 100%;
		position: fixed;
		display: flex;
		justify-content: space-around;
		z-index: 9;

		.title {
			width: 33.3%;
			height: 100%;
			text-align: center;
			float: left;
			line-height: 40px;
			font-size: 14px;
			font-weight: 400;
			color: rgba(170, 170, 170, 1);
		}

		.active {
			color: rgb(255, 77, 77);
		}
	}
</style>
