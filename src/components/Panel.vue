<template>
<v-container >
    <v-toolbar color="primary" dark>
        <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>
    <slot>
    </slot>
    </v-container>
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