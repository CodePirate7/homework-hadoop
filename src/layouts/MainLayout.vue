<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="my-header">
      <q-toolbar>
        <q-toolbar-title>Hadoop</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container class="bg-grey-3">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",

  data() {
    return {};
  }
};
</script>

<style lang="sass" scoped>
.my-header
  background: #667db6;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
</style>
