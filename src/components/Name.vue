<template>
  <div class="hoge">
    <input @change="CHANGE_NAME($event.target.value)" v-model="message" type="text">
    <div class="fuga">
      名前は = {{ getName }}
    </div>
    <div class="foo">
      メッセージは = {{ message }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { CHANGE_NAME } from '../vuex/mutation-types'
export default {
  methods: {
    ...mapActions([
      CHANGE_NAME
    ])
  },
  computed: {
    ...mapGetters(['getName']),
    message: {
      get () {
        return this.$store.state.realtime
      },
      set (value) {
        this.$store.commit('REALTIME', value)
      }
    }
  }
}
</script>
