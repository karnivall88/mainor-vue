
<template>
<panel title="Голосование">
    <v-container >
            <v-form ref="form" lazy-validation>
        <v-container grid-list-xl>
          <v-layout column >
              <v-flex xs12>
        <v-text-field 
        color="accent"
        v-model="name"
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
    </v-container>
   </panel>

</template>

<script>
import Panel from "@/components/Panel" 
export default {
    data: () => ({
      titleRules: [
      v => !!v || 'Введите название темы',
      v => (v && v.length <= 60) || 'Название не должно превышать 60 знаков'
    ],
    bodyRules: [
      v => !!v || 'Введите краткое описание',
      v => (v && v.length <= 140) || 'Описание не должно превышать 140 знаков'
    ],
 }),
  components:{
        Panel
    }
}
</script>


<style>
</style>