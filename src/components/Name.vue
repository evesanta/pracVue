<template>
  <div class="hoge">
    <input @change="CHANGE_NAME($event.target.value)" type="text">
    <div class="fuga">
      {{ getName }}
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
    ...mapGetters(['getName'])
  }
}
</script>
