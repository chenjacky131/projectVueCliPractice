<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" v-show="false"/>
    <div class="go">
      <span v-for="(site, index) in sites" :key="index">
        {{site.name}}:{{site.url}}
      </span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  data () {
    return {
      sites: []
    }
  },
  components: {
    HelloWorld
  },
  created () {
    this.$axios.get('/api/sites/siteDetailFront').then((res) => {
      this.sites = res.data
    })
  }
}
</script>
<style lang="scss" scoped>
.go{
  background: #ccc;
  color: $color;
  span{
    display: block;
  }
}
</style>
