<template>
    <div id="register-page__container">
        <div id="register">
            <div class="header">
                <h2>Rejestracja</h2>
            </div>
            <div class="sep"></div>
            <div class="inputs">
                <input type="text" v-model = "email" placeholder="email"/>
                <input type="password" v-model = "password" placeholder="password"/>
            </div>
            <div class = "error" v-html = "error" />
            <button @click="register">Stwórz konto</button>
        </div>
    </div>
</template>
<script>
import Hello from '@/components/Hello'
import AuthenticationService from '@/services/AuthenticationService'
import axios from 'axios'
export default {
    components: {
        Hello
    },
    data() {
        return {
            email: '',
            password: '',
            error: null           
        }
    },

    methods: {
        async register () {
            try{
                const response = await AuthenticationService.register({
                    email: this.email,
                    password: this.password
                })
                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser', response.data.user)
            } catch (error) {
                this.error = error.response.data.error
            }
        }
    }
  }
</script>
<style lang="scss">
@import './RegisterPage.scss';
</style>