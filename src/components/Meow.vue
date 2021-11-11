<template>
    <v-container fluid>
      {{getname}}
      <v-btn @click="clear">CLEAR</v-btn>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
  },
  props: [
  ],
  data () {
    return {
    }
  },
  mounted () {
  },
  created () {
  },
  computed: {
    ...mapGetters(['getname'])
  },
  methods: {
    ...mapActions(['clear'])
  },
  watch: {
  }
}
</script>

<style scoped lang="scss">
</style>