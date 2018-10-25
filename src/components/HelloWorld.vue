<template>
    <panel title="Объявление">
      <div class="px3">
<v-card v-for="message in messages" :key="message.title" >
  <v-responsive>
    <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>
        </v-responsive>
    <v-card-title primary-title> <h3 class="headline mb-0">{{message.title}}</h3> 
       </v-card-title>
      <v-card-text>{{message.body}}
         </v-card-text>
        <v-card-actions>
          <v-btn flat color="primary">Читать</v-btn>
        </v-card-actions>
</v-card>
</div>
</panel>
</template>
<script>
import Panel from "@/components/Panel";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      messages:[
 {
          title:"First message",
          body: "Body of the first message",
          picture: null
          },
 {
          title:"Second message",
          body: "Body of the second message",
          picture: null
          },
{
          title:"Third message",
          body: "Body of the third message",
          picture: null
          }

  ]

    }
  },
  components: {
    Panel
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
