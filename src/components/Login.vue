<template>
<panel title="Вход">
        <v-form ref="form"  lazy-validation>
        <v-text-field  type="email" required label="E-mail" color="teal lighten-1"> </v-text-field>
        <v-text-field type="password"  label="Password" color="teal lighten-1"> </v-text-field>
        <v-btn  dark  color="primary">Login</v-btn>
        </v-form>
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