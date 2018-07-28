<template>
  <div class="hoge">
    <input @change="CHANGE_NAME($event.target.value)" v-model="realtime" type="text">
    <div class="fuga">
      名前は = {{ getName }}
    </div>
    <div class="foo">
      リアルタイムは = {{ realtime }}
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
    realtime: {
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
