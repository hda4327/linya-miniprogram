<template>
    <div class="main">
        <div class="title">
            {{coupeData.title}}
        </div>
        <CompanyInfo :isShowVip="true"></CompanyInfo>
        <!-- <div class="content" v-html="caseData.content">

        </div> -->
		<!-- <rich-text :nodes="caseData.content" class="content"></rich-text> -->
		<jyf-parser :html="coupeData.content" ref="article" class="content"></jyf-parser>
    </div>
</template>

<script>
    import CompanyInfo from "components/content/companyInfo/companyInfo";
	import parser from "@/components/jyf-parser/jyf-parser";
	
    export default {
        name: "DetailContent",
        data() {
            return {}
        },
        props:{
            coupeData:Object
        },
        components:{
            CompanyInfo,
			"jyf-parser": parser
        }
    }
</script>

<style scoped lang="scss">
.main{
    margin-top: -15px;
    background: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    .title{
        font-size: 18px;
        font-weight: bold;
        color: rgba(34,34,34,1);
        padding: 15px;
    }
    .content{
        padding: 15px;
    }
}
</style>