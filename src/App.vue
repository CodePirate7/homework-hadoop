<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>
<style lang="sass">
.mycard
  max-height: 420px !important
.title
  font-size: 20px
  margin: 30px 0px 15px 0
  line-height: 22px
  padding: 0
  padding-left: 10px
  border-left: 6px solid rgb(0, 195, 255)
</style>
