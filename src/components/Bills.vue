<template>

<panel   title="Мои счета">
    <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>
            Выберите банк
          </v-card-title>
          <v-card-text>
           
            <v-select
              :items="banks"
              label="Выберите банк"
              item-value="text"
            ></v-select>
          </v-card-text>
          <v-card-actions>
            <v-btn color="error" flat @click="dialog=false">Закрыть</v-btn>
            <v-spacer></v-spacer>
             <v-btn color="primary" flat dark>Продолжить</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
<v-container>
    <v-layout row>
<v-menu
        ref="menu1"
        :close-on-content-click="false"
        v-model="menu1"
        :nudge-right="40"
        :return-value.sync="startDate"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        max-width="290px"
        min-width="290px"
      >
       <v-text-field
       color = "accent"
          slot="activator"
          v-model="startDate"
          label="Дата начала"
          prepend-icon="mdi-calendar"
          readonly
        ></v-text-field>
        <v-date-picker
          v-model="startDate"
          type="month"
          no-title
          scrollable
          locale="ru"
        >
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu1 = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu1.save(startDate)">OK</v-btn>
        </v-date-picker>
      </v-menu>
      <v-menu
        ref="menu2"
        :close-on-content-click="false"
        v-model="menu2"
        :nudge-right="40"
        :return-value.sync="endDate"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        max-width="290px"
        min-width="290px"
      >
       <v-text-field
       color = "accent"
          slot="activator"
          v-model="endDate"
          label="Дата окончания"
          prepend-icon="mdi-calendar"
          readonly
        ></v-text-field>
        <v-date-picker
          locale="ru"
          v-model="endDate"
          type="month"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu2 = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu2.save(endDate)">OK</v-btn>
        </v-date-picker>
      </v-menu>
</v-layout>
   <v-expansion-panel>
    <v-expansion-panel-content
      v-for="bill in bills "
      :key="bill.month"
      expand-icon="mdi-menu-down"
    >
      <div slot="header">
         <v-layout row>
             <p class="title">{{bill.month}}</p>
            <v-spacer></v-spacer>
                    <v-badge class="mr-5 mt-3" v-if="bill.payed" color="success">
                    <v-icon   slot="badge" dark small>mdi-check</v-icon>
                    <span >
                     &nbsp;
                    </span>
                    </v-badge>
                    <v-badge class="mr-5 mt-3" v-else color="error">
                    <v-icon   slot="badge" dark small>mdi-currency-eur</v-icon>
                    <span >
                     &nbsp;
                    </span>
                    </v-badge>
                    
                    </v-layout>
          </div>
      <v-container class="grey lighten-5">
          <v-layout row>
              <v-spacer></v-spacer>
 <v-btn color="blue-grey" class="white--text">
      печать
      <v-icon right dark>mdi-printer</v-icon>
    </v-btn>
          </v-layout>
       
          <hr class="mb-4">
         
          <v-layout row>
        <v-flex xs2>
            <p class="font-weight-bold caption">Плательщик:</p>
            <p class="font-weight-bold caption">Адрес:</p>
            <p class="font-weight-bold caption">Площадь:</p>
            <p class="font-weight-bold caption">Отапливаемая площадь:</p>
            <p class="font-weight-bold caption">Количество жильцов:</p>
            </v-flex>
            <v-flex xs2>
            <p class="font-weight-regular caption ">Боб Марля </p>
            <p class="font-weight-regular caption ">Pae 34-18</p>
            <p class="font-weight-regular caption ">{{bill.area}}</p>
            <p class="font-weight-regular caption ">{{bill.warmedArea}}</p>
            <p class="font-weight-regular caption ">2</p>
            </v-flex>
            <v-flex xs2>
            <p class="font-weight-bold caption">Получатель:</p>
            </v-flex>
            <v-flex xs6>
            <p class="font-weight-regular caption">KÜ Pae 34, Reg: 183764827</p>
            </v-flex>
          </v-layout >
          <hr class="my-4">
          <v-layout  row >
              <v-flex xs2 ><p class="font-weight-bold">Счет:</p></v-flex >
              <v-flex xs2 ><p class="font-weight-regular caption">34-18, {{bill.date}}</p></v-flex>
              <v-flex xs8 ><p class="font-weight-bold caption">{{bill.month}}</p></v-flex>
          </v-layout>

          <v-data-table
          hide-actions
    :headers="headers"
    :items="bill.expenses"
    class="elevation-1"
  >
  <template slot="items" slot-scope="props">
      <td>{{ props.item.name}}</td>
      <td>{{ props.item.area}}</td>
      <td>{{ props.item.price}} €</td>
      <td class="font-weight-bold">{{ parseFloat(Math.round((props.item.price * props.item.area)*100)/100).toFixed(2)}} €</td>
    </template>
     <template slot="footer">
      <td colspan="100%">
        <strong>Сумма к оплате:</strong>
      </td>
    </template>
  </v-data-table>

  <hr class="mt-4">
 
  <v-layout row>
       <v-spacer></v-spacer>
        <v-btn v-if="!bill.payed" @click="dialog=!dialog" color="primary">Оплатить</v-btn>
         <v-btn v-else disabled color=success>Оплачено <v-icon right dark>mdi-check</v-icon></v-btn>
         
          </v-layout>
      </v-container>
    </v-expansion-panel-content>
  </v-expansion-panel>
</v-container>
</panel>

</template>

<script>
import Panel from "@/components/Panel"
export default {

data(){
    return {
        

      startDate: '2018-06',
      endDate: new Date().toISOString().substr(0, 7),
      menu1: false,
      menu2: false,
      modal: false,
      dialog:false,
        bills:[
        {
            month:"Сентябрь",
            date:"08.10.2018",
            payed:false,
            area: 65.9,
            warmedArea: 65.9,
            debt: 0.00,
            prePay:0.00,
            coldWater: null,
            hotWater:  null,
            total: 0,
                    expenses:[{
                        name:"Обслуживание",
                        price: 0.4,
                        area: 65.9,
                        warmedArea: 65.9
                    },
                    {
                        name:"Ремонтный фонд",
                        price:0.31,
                        area: 65.9,
                        warmedArea: 65.9,
                    },
                    {
                        name:"Отопление",
                        price:0,
                        area: 65.9,
                        warmedArea: 65.9,
                    },
                    {
                        name:"Вывоз мусора",
                        price:0.043,
                        area: 65.9,
                        warmedArea: 65.9,
                    },
                    {
                        name:"Услуги электрика",
                        price:0.049,
                        area: 65.9,
                        warmedArea: 65.9,
                    },
                    {
                        name:"Лифт",
                        price:0.0169,
                        area: 65.9,
                        warmedArea: 65.9,
                    },
                    {
                        name:"Страховка",
                        price:0.015,
                        area: 65.9,
                        warmedArea: 65.9,
                    },
                    {
                        name:"Церкуляция теплой воды",
                        price:0.0455,
                        area: 65.9,
                        warmedArea: 65.9,
                    },
                ],

        },
        {
            month:"Август",
            date:"08.09.2018",
            payed:true,
            area: 65.9,
            warmedArea: 65.9,
            debt: 0.00,
            prePay:0.00,
            coldWater: null,
            hotWater:  null,
                       expenses:[{
                        name:"Обслуживание",
                        price: 0.4,
                        area: 65.9,
                        warmedArea: 65.9
                    },
                    {
                        name:"Ремонтный фонд",
                        price:0.31,
                        area: 65.9,
                        warmedArea: 65.9,
                    },
                    {
                        name:"Отопление",
                        price:0,
                        area: 65.9,
                        warmedArea: 65.9,
                    },
                    {
                        name:"Вывоз мусора",
                        price:0.043,
                        area: 65.9,
                        warmedArea: 65.9,
                    },
                    {
                        name:"Услуги электрика",
                        price:0.049,
                        area: 65.9,
                        warmedArea: 65.9,
                    },
                    {
                        name:"Лифт",
                        price:0.0169,
                        area: 65.9,
                        warmedArea: 65.9,
                    },
                    {
                        name:"Страховка",
                        price:0.015,
                        area: 65.9,
                        warmedArea: 65.9,
                    },
                    {
                        name:"Церкуляция теплой воды",
                        price:0.0455,
                        area: 65.9,
                        warmedArea: 65.9,
                    },
                    {
                        name:"Холодная вода",
                        price:2.08,
                        area:8,
                        warmedArea:''
                    },
                    {
                        name:"Теплая вода",
                        price:5.00,
                        area:3,
                        warmedArea:''
                    },



                ],
        },
        {
            month:"Июль",
            date:"08.08.2018",
            payed:true,
            area: 65.9,
            warmedArea: 65.9,
            debt: 0.00,
            prePay:0.00,
            coldWater: null,
            hotWater:  null,
            expenses:[{
                        name:"Обслуживание",
                        price: 0.4,
                        area: 65.9,
                        warmedArea: 65.9
                    },
                    {
                        name:"Ремонтный фонд",
                        price:0.31,
                        area: 65.9,
                        warmedArea: 65.9,
                    },
                    {
                        name:"Отопление",
                        price:0,
                        area: 65.9,
                        warmedArea: 65.9,
                    },
                    {
                        name:"Вывоз мусора",
                        price:0.043,
                        area: 65.9,
                        warmedArea: 65.9,
                    },
                    {
                        name:"Услуги электрика",
                        price:0.049,
                        area: 65.9,
                        warmedArea: 65.9,
                    },
                    {
                        name:"Лифт",
                        price:0.0169,
                        area: 65.9,
                        warmedArea: 65.9,
                    },
                    {
                        name:"Страховка",
                        price:0.015,
                        area: 65.9,
                        warmedArea: 65.9,
                    },
                    {
                        name:"Церкуляция теплой воды",
                        price:0.0455,
                        area: 65.9,
                        warmedArea: 65.9,
                    },
                    {
                        name:"Холодная вода",
                        price:2.08,
                        area: 7,
                        warmedArea:''
                    },
                    {
                        name:"Теплая вода",
                        price:5.00,
                        area: 2.7,
                        warmedArea:''
                    },


                ],
        },
        {
            month:"Июнь",
            date:"08.07.2018",
            payed:true,
            area: 65.9,
            warmedArea: 65.9,
            debt: 0.00,
            prePay:0.00,
            coldWater: null,
            hotWater:  null,
            expenses:[{
                        name:"Обслуживание",
                        price: 0.4,
                        area: 65.9,
                        warmedArea: 65.9
                    },
                    {
                        name:"Ремонтный фонд",
                        price:0.31,
                        area: 65.9,
                        warmedArea: 65.9,
                    },
                    {
                        name:"Отопление",
                        price:0,
                        area: 65.9,
                        warmedArea: 65.9,
                    },
                    {
                        name:"Вывоз мусора",
                        price:0.043,
                        area: 65.9,
                        warmedArea: 65.9,
                    },
                    {
                        name:"Услуги электрика",
                        price:0.049,
                        area: 65.9,
                        warmedArea: 65.9,
                    },
                    {
                        name:"Лифт",
                        price:0.0169,
                        area: 65.9,
                        warmedArea: 65.9,
                    },
                    {
                        name:"Страховка",
                        price:0.015,
                        area: 65.9,
                        warmedArea: 65.9,
                    },
                    {
                        name:"Церкуляция теплой воды",
                        price:0.0455,
                        area: 65.9,
                        warmedArea: 65.9,
                    },
                    {
                        name:"Холодная вода",
                        price:2.08,
                        area: 8.6,
                        warmedArea:''
                    },
                    {
                        name:"Теплая вода",
                        price:5.00,
                        area: 1.7,
                        warmedArea:''
                    },


                ],
        }],
         
        headers:[
            {
            text: 'Статья расхода',
            align: 'left',
            sortable: false,
            value: 'name'
            },
            {text:"Площадь", value:"area",sortable:false},
            {text:"Цена",value:"price", sortable:false},
            {text:"Сумма",value:"",sortable:false},

        ],
        banks:[
            {text: "Swedbank"},
            {text: "SEB"},
            {text: "COOP"}
        ]
    }
},

components:{
     Panel
 }
 }

 
</script>


<style>
</style>