<template>
<v-container>
  <v-layout column>
  <v-flex xs12>
<v-card>
  <v-responsive>
    <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>
        </v-responsive>
    <v-card-title>
      <v-card-text>
        <v-card-actions>
        </v-card-actions>
      </v-card-text>
    </v-card-title>
</v-card>
</v-flex>
</v-layout>
</v-container>
</template>


<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
