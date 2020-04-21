<template>
    <div class="statistics-content">
        <div class="item visited">
            <span class="item-title">
                访问量
            </span>
            <span class="item-num">
{{teamData.view_num_count||0}}
            </span>
        </div>
        <div class="item serve-num">
            <span class="item-title">
                服务人数
            </span>
            <span class="item-num">
{{teamData.service_patient_num_count||0}}
            </span>
        </div>
        <div class="item satisfied">
            <span class="item-title">
                满意度
            </span>
            <span class="item-num">
{{teamData.degree_count||0}}
            </span>
        </div>
    </div>
</template>

<script>


    export default {
        name: "statisticsTab",
        props: {
            teamData: {
                default() {
                    return {}
                },
                type: Object
            }
        },
		// computed:{
			
		// }

    }
</script>

<style lang="scss" scoped>
    .statistics-content {
        margin: 0 auto;
        margin-top: -50px;
        width: 345px;
        height: 90px;
        background: linear-gradient(-90deg, rgba(61, 153, 255, 0.98), rgba(137, 156, 255, 0.98));
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        position: relative;

        .item {
            height: 50px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }

        .visited, .satisfied {
            width: 100px;
        }

        .serve-num {
            width: 125px;
            border-left: 1px solid rgba(220, 220, 220, 1);
            border-right: 1px solid rgba(220, 220, 220, 1);
        }
    }
</style>