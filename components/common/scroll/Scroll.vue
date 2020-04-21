<template>
  <div ref="wrapper" class="scroll">
    <div class="content" :style="{display:contentWidth?'flex':'', justifyContent:contentWidth?'space-between':''}" ref="content">
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Scroll',
 
 }
</script>

<style lang="scss" scoped>
  .scroll{

    overflow: hidden;
    .content{
    }

  }
</style>