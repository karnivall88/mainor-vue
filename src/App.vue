<template>
  <div id="app">
    <v-app>
      <header>
      <page-header/>
      <v-parallax
    dark
    height="250"
    :src="image"
  >
    <v-layout
      align-center
      column
      justify-center
  >
      <h1 class="display-2 font-weight-thin mb-3">KÜ</h1>
      <h4 class="subheading">Добро пожаловать на домашнюю страницу товарищества</h4>
    </v-layout>
  </v-parallax>
      </header>
          <main>
            <v-layout row>
              <v-flex xs12 md8>
          <router-view/>
          </v-flex>
          <v-flex xs12 md4>
           <side-panel/>
           </v-flex>
           </v-layout>
          </main>
    </v-app>
    
 </div>

</template>

<script>
import PageHeader from "@/components/PageHeader"
import SidePanel from "@/components/SidePanel"
export default {
  data(){
    return{
          image: 'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg',
    }
        
  },
  components:{
    PageHeader,
    SidePanel
  }
}
</script>

<style>
.page{

  position: fixed;
  width: inherit;
}
</style>
