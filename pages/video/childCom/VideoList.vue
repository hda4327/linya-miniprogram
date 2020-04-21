<template>
	<div class="video-content">
		<navigator v-for="(item, index) in videoList" class="video-item" :url="detailPath+'?video_id='+ item.id" :key="index">
			<div class="video" :style="{backgroundImage: 'url('+item.pic+')'}">
				<img src="/static/img/home/play.png" alt="">
			</div>
			<div class="video-title">
				{{item.title}}
			</div>
		</navigator>

	</div>
</template>

<script>
	export default {
		name: "videoList",
		data() {
			return {
				detailPath: '/pages/videoDetail/VideoDetail'
			}
		},
		props: {
			videoList: Array
		}

	}
</script>

<style scoped lang="scss">
	.video-content {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 15px;
	}

	.video-item {
		width: 47%;
		margin-bottom: 15px;

		.video {
			width: 100%;
			height: 93px;
			background-size: cover;

			display: flex;
			align-items: center;
			justify-content: center;

			img {
				height: 15px;
				width: 12px;
			}
		}

		.video-title {
			margin-top: 5px;
			color: #323232;
			font-weight: 400;
			font-size: 13px;
			line-height: 20px;
		}
	}
</style>
