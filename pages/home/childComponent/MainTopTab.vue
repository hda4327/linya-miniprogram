<template>
    <TopTab>
        <TopTabItem :path="'/pages/home/Home'">
            首页
        </TopTabItem>
        <TopTabItem :path="'/pages/team/Team'">
            医生
        </TopTabItem>
        <TopTabItem :path="'/pages/case/Case'">
            病例
        </TopTabItem>
        <TopTabItem :path="'/pages/coupe/Coupe'">
            科普
        </TopTabItem>

    </TopTab>
</template>

<script>
    import TopTab from "@/components/content/topTab/TopTab";
    import TopTabItem from "@/components/content/topTab/TopTabItem";

    export default {
        name: "MainTopTab",
        components: {
            TopTab,
            TopTabItem
        }
    }
</script>

<style scoped>

</style>