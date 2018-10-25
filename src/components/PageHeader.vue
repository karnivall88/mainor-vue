<template>
<v-toolbar color="primary" dark fixed>
    <!-- <v-toolbar-title>KU</v-toolbar-title> -->
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/">главная</v-btn>
      <v-btn flat>Календарь</v-btn>
      <v-btn flat>Голосование</v-btn>
      <v-btn flat>Правила и нормы</v-btn>
    </v-toolbar-items>
    <v-toolbar-items class="hidden-md-and-up">
      <v-btn flat>One</v-btn>
      <v-btn flat>Two</v-btn>
      <v-btn flat>Three</v-btn>
    </v-toolbar-items>
    
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