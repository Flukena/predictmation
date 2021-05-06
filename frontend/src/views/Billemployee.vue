<template>
  <div class="column is-2 is-offset-5" style="height:830px" id="billempwall">
    <form class="boxbill" style="height: 60%; text-align: center;">
      <table style="width:100%; text-align: left;">
            <tr style="background-color:black; font-family: Bahnschrift;" >
              <th style="color:white;padding:7px">Order list</th>
              <th style="color:white;padding:7px">Product</th>
              <th style="color:white;padding:7px">Amount</th>
              <th style="color:white;padding:7px">Size</th>
              <th style="color:white;padding:7px">Firstname</th>
              <th style="color:white;padding:7px">Date</th>
              <th style="color:white;padding:7px">Time</th>
              <th style="color:white;padding:7px">Comment</th>
              <th style="color:white;padding:7px">Paid</th>
              <th style="color:white;padding:7px">Select</th>
            </tr>

            <tr style=" font-family: Bahnschrift;" v-for="bill in bills" :key="bill" v-show="bill.paid ==  1">
              <th style="color:black;padding:7px;" >{{bill.order_d_id}}</th>
              <th style="color:black;padding:7px;" >{{bill.product_name}}</th>
              <th style="color:black;padding:7px;" >{{bill.product_size}}</th>
              <th style="color:black;padding:7px">{{bill.unit}}</th>
              <th style="color:black;padding:7px">{{bill.cus_firstname}}</th>
              <th style="color:black;padding:7px">{{(bill.cart_date).split('T')[0]}}</th>
              <th style="color:black;padding:7px">{{(bill.cart_date).split('T')[1]}}</th>
              <th style="color:black;padding:7px">{{bill.comment}}</th>
              <th style="color:black;padding:7px">{{bill.paid == 1 ? "YES":"NO" }}</th>
              <th style="color:black;padding:7px"><button @click="selected(bill), console.log('1234')">Select</button></th>
            </tr>
          </table>
     
      
      <div class="mt-5"> <span>Order ID : <p >{{select}} </p></span></div>
      
    </form>

    <div id="positionbutbill">

    <button class="butbillfix">Confirm order</button>
  </div>
  </div>
</template>
<script>
import axios from "@/plugins/axios";
export default {
  data(){
    return{
      bills: {},
      select: []
    }
  },mounted(){
      this.queryBill()
  },methods:{
    queryBill(){
      axios.get('/bill').then(response=>{
        this.bills = response.data

      }).catch(error =>{
        {
        console.log(error)
      }
      })
    },
    selected(bill){
      if(this.select.indexOf(bill.order_d_id) == -1){
        this.select.push(bill.order_d_id)
      }
    },confirmSend(){

      axios.post('/confirm', {text:"dsasdadsa"}).then(response =>{
        console.log(response)
}).catch(error=>{
        console.log(error)
      })
    }
  }

}
</script>