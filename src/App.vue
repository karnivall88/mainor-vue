<template>
  <div id="app">
    <v-app>
       <page-header/>
      <main>
        <v-container>
        <v-layout row>
            <transition name="slide-x-transition">
          <router-view/>
            </transition>
          <v-flex xs4>
            <v-container>
            <side-panel/>
            </v-container>
          </v-flex>
        </v-layout>
        </v-container>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.page{
  position:fixed;
  width: 18rem;
  
}
</style>
