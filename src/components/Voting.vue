
<template>
<panel title="Голосование">
  
    <v-container >
      <v-container>
        <v-layout align-center justify-center row>
        <v-alert :value="true" type="success" outline>Форма для добавления вариантов голосования открыта до 26.12.2018</v-alert>
        </v-layout>
      </v-container>
            <v-form ref="form" lazy-validation>
        <v-container grid-list-xl>
          <v-layout column >
              <v-flex xs12>
        <v-text-field 
        color="accent"
        :rules="titleRules"
        :counter="60"
        label="Тема голосования"
        required
      ></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-textarea
          solo
          :rules="bodyRules"
          label="Краткое описание "
          :counter="140"
          no-resize
        ></v-textarea>
        </v-flex>
        <v-btn color="success">отправить</v-btn>
        </v-layout>
        </v-container>
            </v-form>
        <hr class="my5">

          <v-container grid-list-lg>
            <v-layout column>
              <v-flex xs12 v-for="proposal in proposals" :key="proposal.title" >
                  <v-card class="pr-4" hover elevation-3> 

                 <v-card-title primary-title>
                        <h3 class="headline">
                        {{proposal.title}}
                        </h3>
                  </v-card-title>
                    <v-card-text>{{proposal.body}}</v-card-text>
                    <v-card-actions >
                      <v-spacer></v-spacer>
              <v-badge  v-if='!proposal.votes==0' color="warning" overlap><v-btn flat color="primary">Проголосовать</v-btn> <span slot="badge">{{proposal.votes}}</span></v-badge>
              <v-btn flat v-else color="primary">Проголосовать</v-btn> 
              </v-card-actions>
            </v-card>
             
            </v-flex>
            </v-layout>
          </v-container>
    </v-container>
   </panel>

</template>

<script>
import Panel from "@/components/Panel" 
export default {

 data ()
 {
   return {
proposals:[
   {
   title: "Установка собачьей будки возле подъезда",
   body: "Посадить сторожевую собаку возле подъезда, чтоб наркоманов отгоняла",
   votes: 37
   },
   {
   title: "Установка детской площадки",
   body: "Нет места где дети могли бы играть и гулять.",
   votes: 8
   },
   {
   title: "Купить Пежо председателю",
   body: "Просто надо купить и все...",
   votes: 31
   }
 ],


      titleRules: [
      v => !!v || 'Введите название темы',
      v => (v && v.length <= 60) || 'Название не должно превышать 60 знаков'
    ],

      bodyRules: [
      v => !!v || 'Введите краткое описание',
      v => (v && v.length <= 140) || 'Описание не должно превышать 140 знаков'

    ]}
 },

  components:{
        Panel
    },

    
 }
</script>


<style>
</style>