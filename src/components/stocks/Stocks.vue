<template lang="">
  <div>
    <v-layout row wrap>
      <Stock v-for="stock in db" :key="stock.id" :stock="stock"/>
    </v-layout>
  </div>
</template>
<script>
import Stock from './Stock.vue';
import db from '../../database/stocks'

export default {
  components: {
    Stock
  },
  data() {
    return {
      db
    }
  },
  
}
</script>
<style lang="">
  
</style>