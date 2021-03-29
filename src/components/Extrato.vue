<template>
  <div class="extrato">
      
    <span><b>{{msg}}</b></span>
    <br><br>
    <table class="t1" cellpadding="0" border="0">
    <tbody>
      <tr>
        <th width="10%"></th>
        <th width="45%" class="alinha-esquerda">Mercadoria</th>
        <th width="45%" class="alinha-direita">Valor</th>
      </tr>

      <!-- <li v-for="item in items | reverse" track-by="id"> -->
      
      <tr v-for="(item, index) in $store.state.mercadoria" :key="index">
        <td v-if="item.TIPO == 'Compra'">-</td>
        <td v-else-if="item.TIPO == 'Venda'">+</td>
        <td v-else></td>
        <td class="alinha-esquerda">{{item.NOME}}</td>
        <td v-show="item.VALOR" class="alinha-direita">{{item.VALOR}}</td>
      </tr>

      <tr style="padding: 5px; margin: 5px; height: 5px; ">
        <td></td>
        <td class="alinha-esquerda fontMais"><b>Total</b></td>
        <!-- <td class="alinha-direita">R$ {{totalValor}}</td> -->
        <td class="alinha-direita fontMais"><b>{{this.$store.state.mercadoria[0].TOTAL}}</b>
          <span v-if="this.$store.state.mercadoria[0].TOTAL[0] === '-'" class="infoTotal">[Prejuízo]</span>
          <span v-else-if="this.$store.state.mercadoria[0].TOTAL[0] === 'R'" class="infoTotal">[Lucro]</span>
          <span v-else="" class="infoTotal"></span>

          <span class="infoTotal"></span>
        </td>
      </tr>

      

    </tbody>
  </table>
  </div>
       
      
</template>

<script> 

// import {mapGetters} from "vuex";
export default {
  name: "Extrato",
  data() {
    return {
      tamanho: 0,
    }
  },
  props: {
    msg: String
  },
  computed: {
  // alwaysLastCount() {
  //   return this.$store.state.mercadoria[this.$store.state.mercadoria.length - 1].TOTAL;
  // }
  },
  filters: {
    
  },
  methods: {
    
  },
  watch: {

  },

  mounted: function () {

  }

}
</script>

<style scoped>

label, select, input, button, span, p, table, tr, td {
  font-family: "Lato", Helvetica, Arial;
}

.extrato {
  padding: 25px 10px;
  /* background-color: #f4f1f1; */
  border: 1px solid #ccc;
  border-radius: 3px;
  
  margin: 25px 0;
}

.t1 {
  width: 100%;
}

.alinha-direita {
  text-align: right;
}

.alinha-esquerda {
  text-align: left;
}

.fontMais {
  font-size: 19px;
}

.infoTotal {
  display: block;
  margin: -5px 0;
  font-size: 15px;
}

tr:nth-child(1n+1) {
  border-collapse: collapse; /*Alteração*/
  border-top: 1px solid #cecece;
  border-bottom: 1px solid #cecece;
}

tr:nth-child(1) {
  border-collapse: collapse; /*Alteração*/
  border-top: 0px solid #cecece;
  border-bottom: 1px solid #cecece;
}

tr:last-child {
  border-bottom: none /* para não exibir uma linha antes da tabela */
}

</style>