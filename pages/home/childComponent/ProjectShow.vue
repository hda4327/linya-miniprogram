<template>
    <div class="project-show">
        <IndexItem title="诊疗项目" :toPath="toPath">
            <div class="project-content">
                <navigator class="project-item" url="/pages/project/Project" v-for="(item, index) in projectList" v-if="index<5" :key="index">
                    <div class="ico"><img :src="item.img_resource.src" alt=""></div>
                    <div class="name">{{item.project_name}}</div>

                </navigator>
            </div>
        </IndexItem>
    </div>
</template>

<script>
    import IndexItem from "@/components/content/IndexItem/IndexItem.vue";
    import {getProjectList} from '@/network/homeReq'

    export default {
        name: "ProjectShow",
        data() {
            return {
                projectList: {},
                baseUrl: this.$baseUrl,
                toPath: '/pages/project/Project'
            }
        },
        mounted() {
            getProjectList().then(res => {
                this.projectList = res.data
            })
        },
        components: {
            IndexItem
        }
    }
</script>

<style scoped lang="scss">
    .project-content {
        display: flex;
        width: 100%;
        align-items: center;
        text-align: center;
        padding-bottom: 18px;

        .project-item {
            flex: 1;
            .ico {
                background: #f8f8f8;
                width: 42px;
                height: 42px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: auto;
                border-radius: 50%;

                img {
                    width: 30px;
                    height: 30px;
                }
            }
            .name{
                margin-top: 9px;
                color: #1a1a1a;
                font-weight: 400;
                font-size: 13px;
            }

        }
    }

</style>