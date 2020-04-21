<template>
    <div class="modal-cover" v-if="isShow" @click="clickModal">
        <img :src="baseUrl+ imgUrl" alt="">
    </div>
</template>

<script>
    export default {
        name: "ImageModal",
        data() {
            return {
				baseUrl: this.$baseUrl
			}
        },
        props:{
            imgUrl:{
                type: String,
                default(){
                    return ''
                }
            },
            isShow:{
                type: [Boolean, String],
                default() {
                    return false;
                }
            },
        },
        methods:{
            clickModal(){
                this.$emit('clickModal')
            }
        }
    }
</script>

<style scoped lang="scss">
.modal-cover{
    background: rgba(1,1,1,0.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 150px;
        height: 150px;
    }
}
</style>