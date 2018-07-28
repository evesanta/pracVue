<template>
  <div class="hoge">
    <input @change="CHANGE_NAME($event.target.value)" :value="message" @input="updateMessage" type="text">
    <div class="fuga">
      名前は = {{ getName }}
    </div>
    <div class="foo">
      メッセージは = {{ message }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import { CHANGE_NAME } from '../vuex/mutation-types'
export default {
  methods: {
    ...mapActions([
      CHANGE_NAME
    ]),
    updateMessage (e) {
      this.$store.commit('REALTIME', e.target.value)
    }
  },
  computed: {
    ...mapGetters(['getName']),
    ...mapState({
      message: state => state.realtime
    })
  }
}
</script>
