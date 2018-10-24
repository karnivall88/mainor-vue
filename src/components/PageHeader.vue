<template>
<v-toolbar fixed color="primary"  dark fluid>
    <v-toolbar-title>KU</v-toolbar-title>
    <v-tabs
        color="primary"
        align-with-title
        dark
      >
        <v-tabs-slider color="accent"></v-tabs-slider>
        <v-tab  to="/">
            Главная
        </v-tab>
         <v-tab to="voting">
            Голосование
        </v-tab>
         <v-tab to="calendar" >
            Календарь
        </v-tab >
        <v-tab to="norm" >
            Правила и нормы
        </v-tab>
      </v-tabs>
    <v-spacer></v-spacer>
<v-toolbar-items  >
    <v-btn flat to="login">Войти</v-btn>
 </v-toolbar-items>
</v-toolbar>
</template>

<script>
export default {

 }
</script>


<style>
</style>