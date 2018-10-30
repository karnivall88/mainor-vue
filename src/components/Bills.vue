<template>

<panel title="Мои счета">
<v-container>
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
            <p class="font-weight-regular caption">KÜ Pae 34, Reg: 12312731</p>
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
      <td>{{ props.item.price}}</td>
      <td class="font-weight-bold">{{ parseFloat(Math.round((props.item.price * props.item.area)*100)/100).toFixed(2)}}</td>
    </template>
  </v-data-table>
  <hr class="mt-4">
 
  <v-layout row>
       <v-spacer></v-spacer>
        <v-btn v-if="!bill.payed" color="primary">Оплатить</v-btn>
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
                    }


                ],

        },
        {
            month:"Август",
            date:"08.09.2018",
            payed:true,
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
                    }


                ],
        },
        {
            month:"Июль",
            date:"08.08.2018",
            payed:true,
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
                    }


                ],
        },
        {
            month:"Июнь",
            date:"08.07.2018",
            payed:true,
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
                    }


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
    }
},

components:{
     Panel
 }
 }

 
</script>


<style>
</style>