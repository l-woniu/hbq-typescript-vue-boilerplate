<!-- src/components/Hello.vue -->
<template>
  <div class="abc">
    <div class="greeting">Hello {{name}}</div>7777799
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts">
import * as Vue from 'vue'
import Component from 'vue-class-component'
@Component({
  props: {
    name: String,
    msg: String
  }
})
export default class App extends Vue {
  msg: string
  name = 'abc' + this.msg

  // method
  decrement() {
    this.name += '+1'
  }
  increment() {
    this.name += '-1'
  }
  // hooks
  //  beforeRouteEnter () {
  //   console.log('beforeRouteEnter')
  // }

  // beforeRouteLeave () {
  //   console.log('beforeRouteLeave')
  // }
}
</script>

<style lang="less" scoped>
.abc {
  border: 5px solid yellow;
  font-size: 20px;
  div {
    border: 5px solid red;
  }
}
</style>
