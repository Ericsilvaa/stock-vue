<template lang="">
  <div>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
      <v-card class="green darken-3 white--text">
        <v-card-title class="headline">
          <strong>{{stock.name}} <small>Preço: {{ stock.price | currency }}</small></strong>
        </v-card-title>
      </v-card>
      <v-card>
        <v-container fill-height>
          <v-text-field label="Quantidade" type="number"
          v-model.number="quantity"/>
          <v-btn class="green darken-3 white--text"
            :disabled="quantity <= 0 || !Number.isInteger(quantity)"        
            @click="buyStock"
          >Comprar</v-btn>
        </v-container>
      </v-card>
    </v-flex>
    
  </div>
</template>
<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  // computed: {
  //   insufficientFund
  // },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.quantity = 0
      return order
    }
  },
}






/** 
 Uso do v-flex tem que estar dentro do v-layout e o v-layout dentro do v-container

 App -> está usando v-container
 Stocks -> está usando v-layout
 Stocks -> está usando v-flex

*/
</script>
<style lang="">
  
</style>





