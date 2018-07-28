<template>
  <div>
    <input type="text" v-model="number" />
    <input type="submit" value="Login" v-on:click="CHANGE_AUTH(number)">
    <input type="submit" value="Login" v-on:click="login()">
    <div>
      {{ getAuth }}
    </div>
    <div>
      {{ getName }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import store from '../vuex/store'
import router from '../router'
import { CHANGE_AUTH } from '../vuex/mutation-types'
export default {
  name: 'Login',
  data () {
    return {
      number: ''
    }
  },
  methods: {
    ...mapActions([
      CHANGE_AUTH
    ]),
    login () {
      console.log(this.$route.query.redirect)
      store.commit(CHANGE_AUTH, this.number)
      if (store.state.auth) router.push(this.$route.query.redirect || '/')
    }
  },
  computed: {
    ...mapGetters(['getAuth', 'getName'])
  }
}
</script>
