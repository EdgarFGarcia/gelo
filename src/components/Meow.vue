<template>
    <v-container fluid>
      <v-row
        no-gutters
      >
        <div
          v-for="(item, index) in getname"
          :key="index"
        >
          <v-col
            cols="12"
            v-for="(iItem, iIndex) in item"
            :key="iIndex"
          >
            <v-card>
              <v-card-title><small>Items</small></v-card-title>
              <v-card-text>
                <v-text-field
                  label="Name"
                  v-model="iItem.name"
                ></v-text-field>
                <v-text-field
                  label="Address"
                  v-model="iItem.address"
                ></v-text-field>
              </v-card-text>
              <v-btn block class="mb-3" @click="editentry(iItem)">EDIT ENTRY</v-btn>
              <v-btn block class="mb-3" @click="deleteentry(iItem, iIndex)">DELETE ENTRY</v-btn>
            </v-card>
          </v-col>
        </div>
      </v-row>
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
    ...mapGetters({
      getname:    'getname'
    })
  },
  methods: {
    ...mapActions(['clear', 'editentry', 'deleteentry'])
  },
  watch: {
  }
}
</script>

<style scoped lang="scss">
</style>