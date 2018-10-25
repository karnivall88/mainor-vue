<template>
  <div id="app">
    <v-app>
      <header>
      <page-header/>
      <v-parallax
    dark
    height="250"
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
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
           <v-container>
          <router-view/> 
          </v-container>
           <!-- <side-panel/> -->
          </main>
    </v-app>
    
 </div>

</template>

<script>
import PageHeader from "@/components/PageHeader"
import SidePanel from "@/components/SidePanel"
export default {
  name: 'App',

  components:{
    PageHeader,
    SidePanel
  }
}
</script>

<style>
</style>
