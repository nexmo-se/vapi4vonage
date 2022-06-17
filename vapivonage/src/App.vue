<template>
  <div id="app">
    <container />
  </div>
</template>

<script>
import vapivonage from "./components/vapivonage.vue";
import container from "./components/container.vue";

export default {
  name: "App",
  components: {
    vapivonage,
    container,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
