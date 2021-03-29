<template>
  <div class="home">

    

    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="container">
      <div class="row">
        <div class="col-xl-5">
          <NovaTransacao msg="Nova Transação"  />
        </div>

        <div class="col-xl-7">
          <Extrato msg="Extrato de Transações"></Extrato>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
   import NovaTransacao from "@/components/NovaTransacao.vue";
   import Extrato       from "@/components/Extrato.vue";
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    NovaTransacao,
    Extrato,

  },
};
</script>

