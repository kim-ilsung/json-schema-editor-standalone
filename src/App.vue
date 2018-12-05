<template>
  <div id="app">
    <div class="view-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    async created () {
    },
    computed: {
      path () {
        return this.$route.path
      }
    },
    data () {
    },
    methods: {
      home () {
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  #app {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .title {
    cursor: pointer;
  }
  .view-container {
    flex: 1;
    overflow-y: auto;
  }
</style>
