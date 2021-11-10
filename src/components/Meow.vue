<template>
    <v-container fluid>
      {{getname}}
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
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
    ...mapGetters({
      getname: 'getname'
    })
  },
  methods: {
  },
  watch: {
  }
}
</script>

<style scoped lang="scss">
</style>