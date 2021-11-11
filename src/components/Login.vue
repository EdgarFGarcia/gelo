<template>
  <v-container fluid>
    <v-row
      no-gutters
    >
      <v-col
        cols="6"
      >
        <v-text-field
          v-model="item.name"
        ></v-text-field>
        <v-text-field
          v-model="item.address"
        ></v-text-field>
        <v-btn @click="setname(item)">send</v-btn>
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
// import { mapActions } from 'vuex'
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
      item: {
        name: '',
        address: ''
      },
    }
  },
  mounted () {
  },
  created () {
  },
  computed: {
  },
  methods: {
    // ...mapActions(['setname'])
    setname(){
      const toPass = {
        name: this.item.name,
        address: this.item.address
      }
      this.$store.dispatch('setname', toPass)
      this.item = {
        name: null,
        address: null
      }
    }
  },
  watch: {
  }
}
</script>

<style scoped lang="scss">
</style>