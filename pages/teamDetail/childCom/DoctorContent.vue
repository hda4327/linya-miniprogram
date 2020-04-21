<template>
	<div>
		<view class="padding-content">
			<main class="doctor-content" v-if="doctorData.img_resource">
				<div class="top">
					<image :src="baseUrl+ doctorData.img_resource.src" alt="" class="header">
						<div class="msg clear-fix">
							<div class="left">{{doctorData.name}}</div>
							<div class="right">
								<div class="post">（职位：{{doctorData.post}}）</div>
								<div class="service">
									<span>服务患者数：</span>
									<span style="color: rgba(255, 150, 0, 1);">{{doctorData.service_patient_num}}</span>
								</div>
							</div>
						</div>
						<div class="tags">
							<span v-for="(item, index) in professionalList" class="mark" :key="index">{{item}}</span>

						</div>


				</div>
				<div class="bottom">
					<view class="intro" id="content">
						{{doctorData.intro}}
					</view>

				</div>
			</main>

		</view>
	</div>
</template>

<script>
	export default {
		name: "DoctorContent",
		data() {
			return {
				arrowsR: '',
				baseUrl: this.$baseUrl
			}
		},
		props: {
			doctorData: {
				default () {
					return {}
				},
				type: Object
			}
		},
		methods: {

		},
		mounted() {


		},
		watch: {
			//        doctorData(){
			//            this.$nextTick(()=>{
			// let view = uni.createSelectorQuery().in(this).select("#content");

			// view.fields({
			//   size: true,
			//   scrollOffset: true
			// }, data => {
			//   console.log("得到节点信息" + JSON.stringify(data));
			//   console.log("节点的宽为" + data.width);
			// }).exec();

			//            })
			//        }
		},
		computed: {
			professionalList() {
				if (this.doctorData.professional) {
					let i = this.doctorData.professional.split(",")
					//判断最后一位是否为空
					if (i[i.length-1] === "") {
						i.pop()
					}
					return i
				}

			},


		}
	}
</script>

<style scoped lang="scss">
	.padding-content {
		padding: 0 10px
	}

	.doctor-content {
		background-color: #fff;
		padding: 20px 15.5px 5px 15px;
		box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		margin-top: -100px;
		min-height: 320px;
		position: relative;
		// width: 345px;
		// box-sizing: box-content;


		.top {
			color: rgba(50, 50, 50, 1);

			.header {
				width: 80px;
				height: 80px;
				border-radius: 50%;
				position: absolute;
				background: #fff;
				left: 17px;
				top: -40px;
				background-size: cover;
				border: 2px solid #fff;
				box-shadow: 0px 6px 15px 1px rgba(4, 0, 0, 0.28);
				box-sizing: content-box;
			}

			.msg {
				.left {
					font-size: 18px;
					width: 80px;
					text-align: center;
					position: relative;
					top: 30px;


				}

				.right {
					font-size: 14px;
					right: 60px;
					position: relative;

					.service {
						margin-top: 10px;
						margin-left: 7px;
					}

				}
			}

			.msg:after {}

			.tags {
				margin-top: 15px;
				text-align: center;
				word-spacing: 5px;
				padding-bottom: 15px;
				border-bottom: 1px solid rgba(49, 49, 49, 0.28);
				display: flex;
				justify-content: space-evenly;

				.mark:nth-child(1) {
					background: linear-gradient(90deg, rgba(255, 177, 127, 1) 0%, rgba(255, 217, 149, 1) 100%);
				}

				.mark:nth-child(2) {
					background: linear-gradient(90deg, rgba(255, 139, 140, 1) 0%, rgba(255, 172, 144, 1) 100%);
				}

				.mark:nth-child(3) {
					background: linear-gradient(90deg, rgba(155, 202, 255, 1) 0%, rgba(182, 194, 255, 1) 100%);
				}

				.mark {
					padding: 4px 10px;
					border-radius: 15px;
					font-size: 12px;
					font-weight: 400;
					color: rgba(254, 254, 254, 1);
					line-height: 18px;
				}

			}
		}

		.bottom {

			.intro {

				font-size: 14px;
				font-weight: 400;
				color: rgba(50, 50, 50, 1);
				line-height: 21px;
				padding: 5px 0;
				white-space: pre-wrap;
				word-wrap: break-word;
				word-break: break-all;
				margin-top: 5px;
			}

			.down-arrows {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 25px;

				image {
					width: 12.5px;
					height: 6.5px;

				}
			}
		}
	}
</style>
