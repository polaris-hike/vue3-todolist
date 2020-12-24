<template>
  <button @click="count++">count is: {{ count }}</button>
  <p>{{money}}</p>
  <button @click="addMoney()">money is: {{ money }}</button>
  <hr>
  <h1>reactive</h1>
  <button @click="increment">
    Count is: {{ state.count }}, double is: {{ state.double }}
  </button>
  <hr>
</template>

<script>
  import {reactive, ref,computed,watchEffect} from 'vue';
export default {
  name: 'HelloWorld',
  data() {
    return {
      count: 0
    }
  },
  beforeCreate() {
    console.log(1);
  },
  setup(){
    console.log(2);
    const money = ref(30)
    const state = reactive({
      count:0,
      double:computed(()=>state.count*2)
    })
    function increment() {
      state.count++
    }
    function addMoney (){
      money.value ++;
    }
    watchEffect(()=>{
      console.log('watch');
      console.log(money.value);
    })



    return {money,state,addMoney,increment}

  },

}
</script>
