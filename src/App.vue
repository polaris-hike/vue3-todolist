<template>
  <router-link to="/">
    <a-button type="primary">
      首页
    </a-button>
  </router-link>
  <router-link to="/home">
    <a-button type="primary">
      home
    </a-button>
    <hr>
  </router-link>
  <router-view />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
