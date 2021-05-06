<template>
  <div class="column is-2 is-offset-5" style="height:830px" id="billempwall">
    <form class="boxbill" style="height: 60%;">
      <table style="width:100%; text-align: left;">
            <tr style="background-color:black; font-family: Bahnschrift;" >
              <th style="color:white;padding:7px">Order list</th>
              <th style="color:white;padding:7px">Amount</th>
              <th style="color:white;padding:7px">Price (฿)</th>
              <th style="color:white;padding:7px">Date</th>
              <th style="color:white;padding:7px">Time</th>
              <th style="color:white;padding:7px">Paid</th>
            </tr>
            <tr style=" font-family: Bahnschrift;" >
              <th style="color:black;padding:7px;">KuyTee</th>
              <th style="color:black;padding:7px">1</th>
              <th style="color:black;padding:7px">0.5</th>
              <th style="color:black;padding:7px">6/5/2564</th>
              <th style="color:black;padding:7px">11:27</th>
              <th style="color:black;padding:7px">No</th>
            </tr>
            <tr style=" font-family: Bahnschrift;" >
              <th style="color:black;padding:7px;">KuyFluke</th>
              <th style="color:black;padding:7px">1</th>
              <th style="color:black;padding:7px">0.5</th>
              <th style="color:black;padding:7px">6/5/2564</th>
              <th style="color:black;padding:7px">11:27</th>
              <th style="color:black;padding:7px">Yes</th>
            </tr>
          </table>
      
      
    </form>
    <div id="positionbutbill">
    <button class="butbill" >Fix</button>
    <button class="butbillfix">Confirm order</button>
  </div>
  </div>
</template>
<script>
  // import axios from "@/plugins/axios";

export default {
  data(){
    return{
      Bill:{}
    }
  },mounted(){
      this.queryBill()
  },methods:{
    // queryBill(){
    //   axios.get('/bill', async(req, res)=>{
    //     console.log(res)
    //   })
    // }
  }

}
</script>