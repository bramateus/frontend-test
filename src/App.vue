<template>
  <div id="app">
    <div id="nav" class="header">
      <div class="container">
        <div class="row">
          <div class="col-xl-7 col-lg-7 col-md-7 col-xs-12">
            <div class="img-line"> 
              <img class="img-logo" src="http://brauliomateus.com/logo.png">
              <h2 class="titulo">Controle Financeiro</h2>
            </div> 
          </div>
          <div class="col-xl-5 col-lg-5 col-md-5 col-xs-12">
            <div class="nav-padding nav-padding2">
              <router-link class="sublinks"  to="/">Home</router-link> |

              <router-link class="sublinks" to="/resumo">Resumo</router-link> |
              <router-link class="sublinks " to="/configuracoes">Configurações</router-link>
            </div>
          </div>
     
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>



@font-face {
  font-family: "Lato";
  src: local("Lato"),
  url(./fonts/Lato-Regular.ttf) format("truetype");
}

h2 {
  font-family: "Lato", Helvetica, Arial;
}

.img-logo {
  width: 40px;
  height: 40px;
  margin-right: 15px
}

.img-line {
  display: flex;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.sublinks {
    font-family: "Lato", Helvetica, Arial;
  }

#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.header {
  width: 100%;
  left: 0px;
  top: 0px;
  background: #E0E0E0;
}


.nav-padding {
  right: 0px;
  top: 20px;
  padding: 10px;
  border-radius: 5px;
  background: #FFFFFF;
}

@media screen and (max-width: 400px) {

  .nav-padding2 {
    display: none;
  }

  .titulo {
    font-size: 1.5em;
    line-height: 1em;
    font-family: "Lato", Helvetica, Arial;
  }
}


@media screen and (max-width: 399px) and (min-width: 125px) {

  .titulo {
    font-size: 1.5em;
    line-height: 1em;
  }

  .sublinks {
    font-size: 0.9em;
    font-family: "Lato", Helvetica, Arial;
  }

  .nav-padding2 {
    display: block;
  }
}


</style>
