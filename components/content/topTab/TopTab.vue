<template>
    <div class="top-tab">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TopTab"
    }
</script>

<style scoped>
    .top-tab{
        display: flex;
        background: white;
        align-items: center;
        height: 45px;
        font-size: 14px;
        
		justify-content: space-around;

    }
</style>