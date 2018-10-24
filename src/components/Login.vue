<template>
<v-container >
    <v-layout column>
        <v-flex xs12>
        <v-toolbar color="secondary" flat dark>
            <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <v-form ref="form"  lazy-validation>
        <v-text-field  type="email"  required label="E-mail" color="teal lighten-1"> </v-text-field>
        <v-text-field type="password"  label="Password" color="teal lighten-1"> </v-text-field>
        <v-btn  dark  color="primary">Login</v-btn>
        </v-form>
        </v-flex>
        </v-layout>  
      </v-container>
</template>

<script>
export default {

 }
</script>


<style>
</style>