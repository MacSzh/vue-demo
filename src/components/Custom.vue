<template>

  <div id="box">

    <input v-focus value="哈哈"/>
  </div>

</template>

<script>

  // directives:{
  //   focus:{
  //
  //   }
  // }

  export default {
    name: "custom",
    directives:{
      focus:{
        inserted:function (el) {
            el.focus()
        }
      }
    }
  }
</script>

<style scoped>

</style>
