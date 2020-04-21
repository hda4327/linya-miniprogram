<template>
	<div class="main">
		<scroll-view scroll-x="true" >
			<swiper class="outer" @change="swiperChange" :current="current">
				<swiper-item v-for="(item,index) in picList" :key="index">
					<image :src="item.imgsrc" alt="" lazy-load>
			
				</swiper-item>
			
			
			</swiper>
		</scroll-view>
		
		<div class="arrows">
			<image src="../../../static/img/project/arrow.svg" class="left" :style="{opacity: leftArrowsOpacity}" @click="toPrev"></image>
			<image src="../../../static/img/project/arrow.svg" class="right" :style="{opacity: rightArrowsOpacity}" @click="toNext"></image>
		</div>
		<div class="swiper-pagination">{{curImage}}</div>

	</div>
</template>

<script>
	import {
		reqPictureList
	} from '@/network/projectReq'


	export default {
		name: "Picture",
		data() {
			return {
				current: 0,
				picList: []

			}
		},
		props: {
			params: Object
		},
		created() {

		},
		components: {

		},
		watch: {
			params(newVal) {
				if (newVal) {
					this.getPictureList()
				}

			}
		},
		methods: {
			getPictureList() {
				reqPictureList(this.params.class_id).then(res => {
					this.picList = res.data
				})
			},

			swiperChange(e) {
				var index = e.target.current || e.detail.current;
				this.current = index;
			},
			toPrev(){
				if(this.current!==0){
					this.current -= 1
				}
			},
			toNext(){
				if(this.current!==this.picList.length-1){
					this.current += 1
				}
			}


		},
		computed: {
			curImage() {
				return (this.current + 1) + '/' + this.picList.length
			},
			leftArrowsOpacity(){
				return this.current === 0? 0.5: 1
			},
			rightArrowsOpacity(){
				return this.current === this.picList.length-1? 0.7: 1
			}
		}

	}
</script>

<style scoped lang="scss">
	.main {
		width: 100%;
		
		
		position: relative;
		// height: 552.5px;

		.outer {
			height: 505.5px;

			image {
				width: 100%;
				height: 100%;
			}

			

		}
		.arrows {
			position: fixed;
			top: 40%;
			left: 0;
			right: 0;

			image {
				width: 30px;
				height: 40px;
			}

			.left {
				
				transform: rotate(180deg);
			}

			.right {
				float: right;
			}
		}
		.swiper-pagination {
			margin-top: 10px;
			text-align: center;
			line-height: 30px;
			font-size: 12px;

		}


	}
</style>
