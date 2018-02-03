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
        <ul class = "log" v-if = "!$store.state.isUserLoggedIn">
          <li @click = "navigateTo({name: 'RegisterPage'})"> Rejestracja </li>
          <li @click = "navigateTo({name: 'LoginPage'})"> Zaloguj się </li>
        </ul>
        <ul class = "opt" v-if = "$store.state.isUserLoggedIn">
          <li @click = "navigateTo({name: 'Test'})"> Aktualności </li>
          <li @click = "navigateTo({name: 'LoanPage'})"> Wypożyczenia </li>
          <li @click = "navigateTo({name: 'StatisticPage'})"> Statystyki </li>
          <li @click = "navigateTo({name: 'HistoryPage'})"> Historia </li>
          <li @click = "logout"> Wyloguj się </li>
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
  name: 'app',
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout() {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'LoginPage'
      })
    }
  }
}

</script>

<style lang="scss">
@import './App.scss';
</style>
