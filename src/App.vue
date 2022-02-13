<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <!-- <el-charts></el-charts> -->
    <reservation></reservation>
  </div>
</template>

<script>
// import elCharts from './components/elCharts.vue'
import reservation from './components/badminton/venue-reservation.vue'
export default {
  name: 'App',
  components:{
    // elCharts,
    reservation,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
