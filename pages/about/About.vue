<template>
    <div class="about-main">
        <top-bg></top-bg>
        <TopLog></TopLog>
        <div class="content">
            <div class="html-render">
				<jyf-parser :html="richtext" class="content"></jyf-parser>
            </div>
			
        </div>
		<CompanyBottom></CompanyBottom>
		<ContactBottom></ContactBottom>
		<AuthMain></AuthMain>
    </div>
</template>

<script>
    import TopBg from "@/components/content/topBg/TopBg";
    import TopLog from "@/components/content/topBg/TopLog";
	import parser from "@/components/jyf-parser/jyf-parser";
	import CompanyBottom from '@/components/content/companyInfo/CompanyBottom.vue'


    export default {
        name: "About",
        data() {
            return {
				aboutContent:'',
				richtext: this.$store.state.companyMsg.content
            }
        },
        created() {
        },
		mounted() {
			
		},
		onReady() {
		},
        components:{
            TopBg,
            TopLog,
			"jyf-parser": parser,
			CompanyBottom,
			// UniPopup,
			// AuthModal
        },
        computed:{

        },
		methods:{
			onShareAppMessage() {
				return {
					title: this.$store.state.companyMsg.seller_company.name,
					path: this.$Route.path + '?sid=' + this.$store.state.sid,
				}
			}
		}

    }
</script>

<style scoped lang="scss">
.content{
    padding: 15px;
    background: #ffffff;
    .html-render{
        font-size: 14px;
        font-weight: 400;
        color: rgba(54,54,54,1);
        line-height: 21px;
        white-space: pre-wrap;

        .content{
            max-width: 100%;
            margin-top: 15px;
            margin-bottom: 15px;
        }
    }
}
</style>