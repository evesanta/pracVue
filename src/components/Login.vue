<template>
  <div>
    <input type="text" v-model="number" />
    <input type="submit" value="Login" v-on:click="CHANGE_AUTH(number)">
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
    ])
  },
  computed: {
    ...mapGetters(['getAuth', 'getName'])
  }
}
</script>
