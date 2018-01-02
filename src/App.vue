<template>
  <div id="app">
    <header>
      <span class = "logo"></span>
      <span>Politechnika Poznańska</span>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './App.scss';
</style>
