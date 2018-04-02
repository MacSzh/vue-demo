<template>
  <div class="hello">
    <h1>{{ msg | capitalize }}</h1>
    <br/>
    <router-link id="hello" to="/hello">点我</router-link>
    <br/>
    <input type="button" value="点我" @click="goo()"/>
    <input type="button" value="自定义指令" @click="directivGo"/>
  </div>
</template>
<script>

  /**
   * export ,export default 都可以导出常量，函数，文件，模板，
   * 1，export可以多个  export default 只能一个
   * 2，export 导出要加{}  export default 则不需要
   *
   */
  export default {
    name: 'HelloWorld',
    // data:{
    //   msg:'hell wang zhe rong yao '
    // }s
    data: function () {
      return {
        msg: 'Welcome to Your Vue.js App  mac2013 '
      }
    },
    methods:{
      goo:function () {
        this.$router.push("/hello")
      },
      directivGo:function () {
        this.$router.push("/custom")
      }
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toLowerCase() + value.slice(1)
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
