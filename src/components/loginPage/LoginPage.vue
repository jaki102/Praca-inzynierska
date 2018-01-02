<template>
    <div id="login-page__container">
        <div id="login">
            <div class="header">
                <h2>Logowanie</h2>
            </div>
            <div class="sep"></div>
            <div class="inputs">
                <input type="text" placeholder="Adres e-mail"/>
                <input type="password" placeholder="Hasło"/>
            </div>
            <button @click="routeToTest">Zaloguj się</button>
        </div>
    </div>
</template>
<script>
import Hello from '@/components/Hello'
import axios from 'axios'
export default {
    components: {
        Hello
    },
    mounted() {
        axios
            .get('https://api.github.com/users/codeheaven-io')
            .then(response => {
                debugger;
            })
            .catch(error => {
                debugger;
            })
    },
    data() {
        return {
            name: 'Jakub',
            
        }
    },

      methods: {
    routeToTest() {
       
                    this.$router.push('test');

    }
  }
}
</script>
<style lang="scss">
@import './LoginPage.scss';
</style>