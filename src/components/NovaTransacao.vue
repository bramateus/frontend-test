<template>

  <div class="nova"> 

    <span><b>{{msg}}</b></span>
    <br><br>
    <form id="formNovaTransacao">
    <div>
      <div class="form-group textLeft">
        <label for="exampleFormControlSelect1">Tipo de Transação</label>
        <select v-model="tipoTransacao" class="form-control">
          <option>Compra</option>
          <option>Venda</option>
        </select>
      </div>
    </div>
    <div class="form-group textLeft">
      <label for="exampleFormControlTextarea1">Nome da Mercadoria</label>
      <input v-model="nomeMercadoria" type="text" required="true" class="form-control" placeholder="Notebook" />
    </div>
    <div class="form-group textLeft">
      <label>Valor</label>
      <input v-model="valor" type="text" required="true" class="form-control" placeholder="25.00">
    </div>
    <div class="form-group">
      <button @click.prevent="handleClick" class="btn btn-dark btn-block">Adicionar Transação</button>
    </div>
    </form>

     

<!-- <div class="alert alert-success alert-dismissible fade show" id="alert" role="alert">
  <strong></strong> Transação adicionada com sucesso!
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div> -->
         
  </div>
      
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "NovaTransacao",
  data() {  
    return {
      tipoTransacao: "Compra",
      nomeMercadoria: "Notebook",
      valor: '',
      tot: 0,
      totNumber: 0,
      errors: []
    }
  },
  props: {
    msg: String,
  },
  computed: { 
    ...mapState(["nome"]),
  },
  // filters: {
  //   numeroPreco(valor) {
  //     return valor toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
  //   }
  // },
  methods: {
    ...mapMutations(["OPERATION"]),

    handleClick() {

      if (this.nomeMercadoria && this.valor) {
        
        if (this.tipoTransacao == 'Compra') {
          this.tot = parseFloat(this.tot) - parseFloat(this.valor);
          // console.log('Compra');
          // console.log(this.tot);
          // console.log("tot = " + typeof(this.tot));
          // console.log("valor = " + typeof(this.valor));
        } else {
          this.tot = parseFloat(this.tot) + parseFloat(this.valor);
          // console.log('Venda');
          // console.log(this.tot);
          // console.log("tot = " + typeof(this.tot));
          // console.log("valor = " + typeof(this.valor));
        }

        this.OPERATION({
          TIPO: this.tipoTransacao,
          NOME: this.nomeMercadoria,
          VALOR: parseFloat(this.valor).toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }),
          TOTAL: parseFloat(this.tot).toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }),
        }); 

      } else {
        this.errors.push('Campos são obrigatórios.');
      }
      
    }
  },
  watch: {
    // tot() {

      
   
    // } 
  },
  
};
</script>

<style scoped>

label, select, input, button, span, p {
  font-family: "Lato", Helvetica, Arial;
}


.nova {
  padding: 25px 10px;
  margin: 25px 0;
  border: 1px solid #ccc;
  border-radius: 3px;
  /* background-color: #f4f1f1; */
  /* background-color: #E0E0E0; */
}

.textLeft {
  text-align: left;
}

</style>