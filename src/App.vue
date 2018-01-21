<template>
  <div id="app">
    <header>
      <div class = "title">
        <ul>
          <li class = "logo"></li>
          <li>Politechnika Poznańska</li>
        </ul>
      </div>
      <div class = "nav">
        <ul>
          <li v-if = "!$store.state.isUserLoggedIn"> Rejestracja </li>
          <li v-if = "!$store.state.isUserLoggedIn"> Zaloguj się </li>
          <li v-if = "$store.state.isUserLoggedIn"> Wypożyczenia </li>
          <li v-if = "$store.state.isUserLoggedIn"> Statystyki </li>
          <li v-if = "$store.state.isUserLoggedIn"> Wyloguj się </li>
        </ul>
      </div>
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
