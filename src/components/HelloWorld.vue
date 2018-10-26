<template>

<panel title="Объявление">
  <v-container grid-list-lg>
    <v-layout column >
      <v-flex xs12 md6 v-for="message in messages" :key="message.title" >
          <v-card elevation-3>
            <v-responsive>
              <v-img
                    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
                    aspect-ratio="9.75"
                  >
                  <!-- RETURN BACK TO IMG  -->
                  </v-img>
                  </v-responsive>
                 <v-card-title primary-title><h3 class="headline mb-0">{{message.title}}<v-badge v-if="message.important" color="error">
                  <span slot="badge">!</span>
                  <span>&nbsp;</span>
                  </v-badge></h3>
                  </v-card-title>
                  
                <!-- <v-card-title v-else primary-title> <h3 class="headline mb-0">{{message.title}}</h3>
                </v-card-title> -->
                <v-card-text >{{message.body}}
                  </v-card-text>
                  <v-card-actions>
                    <v-btn outline flat color="primary">Читать</v-btn>
                  </v-card-actions>
          </v-card>
          </v-flex>
          </v-layout>
  </v-container>
</panel>
</template>
<script>
import Panel from "@/components/Panel";
export default {
  data () {
    return {
      messages:[
 {
          title:"Замена труб. Отключение воды",
          body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          picture: null,
          important: true
          },
 {
          title:"Second message",
          body: "Body of the second message",
          picture: null,
          important: false
          },
{
          title:"Third message",
          body: "Body of the third message",
          picture: null,
          important: false
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
