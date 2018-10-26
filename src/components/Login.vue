<template>
<panel title="Вход">

    <v-container>
        <v-layout row >
            <v-flex xs12 md4 offset-md3>
        <v-form ref="form"  lazy-validation>
        <v-text-field  type="email" required label="Ваш номер квартиры" color="accent"> </v-text-field>
        <v-text-field type="password"  label="Ваш пароль" color="accent"> </v-text-field>
        <v-btn  dark  color="primary">Вход</v-btn>
        </v-form>
        </v-flex>
        </v-layout>
        </v-container>
</panel>
</template>
<script>
import Panel from "@/components/Panel";
export default {
    components:{
        Panel
    }

 }
</script>


<style>
</style>