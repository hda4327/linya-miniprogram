<template>
	<div class="company-bottom">
		<div class="company-box">
			<template v-if="isShowLog">
				<image class="company-logo" :src="baseUrl+companyInfo.seller_company.img_resource.src">

				</image>
			</template>

			<div class="company-info">
				<span class="company-name">{{companyInfo.seller_company.name}}</span>
				<span class="company-notice">{{companyInfo.seller_company.notice}}</span>
			</div>

			<div class="company-inner-box">
				<div class="company-msg-list">
					<div class="company-msg tel">

						<image class="tel-ico msg-ico" src="/static/img/common/phone-black.png"></image>

						<span class="tel-text msg-text">{{companyInfo.phone}}</span>
					</div>
					<div class="company-msg address">
						<image class="address-ico msg-ico" src="/static/img/common/address-black.png"></image>
						<span class="address-text msg-text">{{companyInfo.seller_company.address}}</span>
					</div>
					<!--                <div class="company-msg work-time">-->
					<!--                    <div class="work-time-ico msg-ico" style="background-image: url('/public/static/mobile/images/time-black.png')"></div>-->
					<!--                    <span class="work-time-text msg-text"></span>-->
					<!--                </div>-->

				</div>
				<image class="company-code" :src="baseUrl + companyInfo.img_resource.src" alt="">
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		name: "CompanyBottom",
		data() {
			return {
				baseUrl: this.$baseUrl,
				companyInfo: {}
			}
		},
		created() {
			this.companyInfo = this.$store.state.companyMsg
		},
		props: {
			isShowLog: {
				default () {
					return true
				}
			}
		},
		components: {

		}
	}
</script>

<style scoped lang="scss">
	.company-bottom {
		margin-top: 60px;
		padding-bottom: 25px;

		.company-box {
			width: 325px;
			height: 230.5px;
			background-size: cover;
			margin: auto;
			position: relative;
			padding-top: 40px;
			background-image: url(/static/img/common/bottom-comany-bg.png);
			padding-bottom: 10px;
			border-radius: 10px;

			box-sizing: content-box;

			.company-logo {
				position: absolute;
				width: 81.5px;
				height: 81.5px;
				border: 3px solid rgba(255, 255, 255, 1);
				top: 0;
				left: 50%;
				transform: translate(-50%, -46px);
				border-radius: 50%;
				background-size: cover;


			}

			.company-info {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-items: center;
				font-weight: 400;
				color: rgba(54, 54, 54, 1);
				height: 50px;

				.company-name {
					font-size: 16px;

				}

				.company-notice {
					font-size: 13px;
					display: inline-block;
					width: 80%;
					text-align: center;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;

				}
			}

			.company-inner-box {
				width: 268px;
				padding: 14px;
				background: rgba(255, 255, 255, 1);
				border-radius: 5px;
				position: absolute;
				top: 100px;
				left: 50%;
				transform: translate(-50%, 0);
				display: flex;
				/*flex-direction: column;*/
				align-items: center;

				.company-code {
					width: 80px;
					height: 80px;
					/*margin-top: 0.3rem;*/
					flex: 80px 1 0;
				}

				.company-msg {
					display: flex;
					align-items: center;

					.msg-text {
						width: 82%;
						margin-left: 6px;
					}

					.msg-ico {
						width: 17px;
						height: 17px;
						background-size: 100% 100%;
					}
				}

				.company-msg.address,
				.company-msg.work-time {
					margin-top: 11px;
				}

				.company-msg-list {
					font-size: 13px;
					font-weight: 400;
					color: rgba(54, 54, 54, 1);

					/*padding-left: 1rem;*/
					.tel {
						.tel-ico {
							width: 17px;
							height: 17px;
							background-color: rgba(255, 255, 255, 1);

						}
					}
				}
			}
		}
	}
</style>
