<template>
<panel title="Объявление">
  <v-container grid-list-lg>
    <v-layout column>
      <v-flex xs12 md6 v-for="message in messages" :key="message.title" >
          <v-card hover max-width="75%" elevation-3>
            <v-responsive>
              <v-img
                    :src = "message.picture"
                    aspect-ratio="9.75"
                  >
                  </v-img>
                  </v-responsive>
                 <v-card-title primary-title><h3 class="headline mb-0">{{message.title}}<v-badge v-if="message.important" color="error">&nbsp;
                  <span slot="badge">!</span>
                  <span></span>
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
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nemo sit commodi nostrum? Delectus dignissimos omnis quaerat ex voluptatibus. Pariatur et rem voluptatem ipsum itaque commodi atque adipisci. Quam, error.",
          picture: "https://images.pexels.com/photos/415945/pexels-photo-415945.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          important: true
          },
 {
          title:"Ремонт дороги",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nemo sit commodi nostrum? Delectus dignissimos omnis quaerat ex voluptatibus. Pariatur et rem voluptatem ipsum itaque commodi atque adipisci. Quam, error.",
          picture:"https://images.pexels.com/photos/1321807/pexels-photo-1321807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          important: false
          },
{
          title:"Уборка снега",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nemo sit commodi nostrum? Delectus dignissimos omnis quaerat ex voluptatibus. Pariatur et rem voluptatem ipsum itaque commodi atque adipisci. Quam, error.",
          picture: "https://images.pexels.com/photos/953877/pexels-photo-953877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
