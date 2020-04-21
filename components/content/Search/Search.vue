<template>
    <div class="outer-search">
        <div class="search" @click="toSearch">
            <!--        <form action="javascript:return true;">-->
            <input type="search" @blur="cancelSearch" id="search" confirm-type="search" @confirm="search($event)" ref="searchInput" @focus="addCover" :focus="isFocus" v-model="searchText" width="100%">
            <label for="search" class="hint" v-if="isSearching" ><img
                    src="/static/img/common/search.png">搜索</label>
            <!--        </form>-->
        </div>
    </div>

</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                isSearching: true,
				isFocus: false,
				searchText: '',
				tmpSearchText: ''
            }
        },
		
        methods: {
            toSearch() {
                this.isSearching = false
            },
            cancelSearch() {
                this.isSearching = true
				
				
				this.tmpSearchText = this.searchText
				this.searchText = ''
            },
            search(e){
				this.isFocus = false
				this.$EventBus.$emit('removeCover')
                this.$emit('search', e.target.value)
            },
            addCover(){
                this.$EventBus.$emit('addCover')
                
				this.searchText = this.tmpSearchText
            }
        },
		watch:{
			isSearching(value){
				if(value===false){
					this.$nextTick(()=>{
						this.isFocus = true
					})
				}
			}
		}
    }
</script>

<style scoped lang="scss">
    .outer-search{
        padding: 5px 15px;
        height: 42px;
        background: #FAF8F8;
    }

    .search {
        height: 22.5px;
        border-radius: 11px;
        background: #fff;
        margin-top: 5px;
        padding: 0 15px;
        position: relative;
        font-size: 11px;
        font-weight: 400;
        color: rgba(156, 156, 156, 1);
        border: none;
        line-height: 22.5px;

        input {
            font-size: 11px;
            font-weight: 400;
            color: rgba(156, 156, 156, 1);
            border: none;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
			
        }

        .hint {
            position: absolute;
            top: 0;
            left: 0;
			right: 0;
			bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fff;
            border-radius: 11px;
			// z-index: 9;
            img {
                width: 12px;
                height: 12px;
                margin-right: 5px;
            }
        }
    }
</style>