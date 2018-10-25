<template>
<v-layout row wrap>
<v-flex xs8>
    <v-layout row>
        <v-flex xs8 >
    <v-toolbar color="primary" dark>
        <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>
    <div class="mb3">
<slot>
</slot>
</div>
</v-flex>
</v-layout>
</v-flex>
</v-layout>
</template>

<script>
export default {
   props:[
       "title"
   ]

 }
</script>


<style>
</style>