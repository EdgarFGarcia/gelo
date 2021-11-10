<template>
  <v-container fluid>
    <v-row
      no-gutters
    >
      <v-col
        cols="6"
      >
        <v-text-field
          v-model="name"
        ></v-text-field>
        <v-text-field
          v-model="address"
        ></v-text-field>
        <v-btn @click="sdata">send</v-btn>
      </v-col>
      <v-col
        cols="3"
      >
        <page/>
      </v-col>
      <v-col
        cols="3"
      >
        <pangatlo/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import secondPage from './Meow.vue'
import newpage from './third.vue'
export default {
  components: {
    page: secondPage,
    pangatlo: newpage
  },
  props: [
  ],
  data () {
    return {
      name: null,
      address: null
    }
  },
  mounted () {
  },
  created () {
  },
  computed: {
  },
  methods: {
    sdata(){
      const toPass = {
        name: this.name,
        address: this.address
      }
      this.$store.dispatch('setname', toPass)
    }
  },
  watch: {
  }
}
</script>

<style scoped lang="scss">
</style>