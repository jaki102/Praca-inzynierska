<template>
    <div>
        <div class = "menu"><h1>Statystyki</h1></div>
        <ul class = "buttons">
            <li><button @click = "navigateTo({name: 'StatMain'})">Ogólne</button></li>
            <li><button @click = "navigateTo({name: 'StatUser'})">Użytkownika</button></li>
            <li><button @click = "navigateTo({name: 'StatLoan'})">Wypożyczenia</button></li>
        </ul>
    </div>
</template>
<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route);
    }
  }
}
</script>
<style lang="scss">
@import './StatisticPage.scss';
</style>