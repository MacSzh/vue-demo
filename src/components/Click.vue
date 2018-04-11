<template>
  <div id="mac2103" @click="show1()">
    <h1>{{msg}}</h1>
    <input type="button" value="按钮" @click.stop="show()"/>
    <input/>
    <ul>
      <li v-for="(val,index) in list" :key="index">
        {{val}} {{index}}
      </li>
    </ul>
  </div>
</template>

<!--
v-on:click   ==  @click
事件冒泡
@click.stop

默认行为

键盘事件
@keydown
@keyup

-->
<script>
  export default {
    name: "hello",
    data() {
      return {
        msg: "jjjj",
        list:['red','green','white']

      }
    },
    methods: {
      show: function (ev) {
        alert(1)
        // ev.cancelBubble= true
      },
      show1: function () {
        alert(2)
      }

    }
  }
</script>

<style scoped>

</style>
