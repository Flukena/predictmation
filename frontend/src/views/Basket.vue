<template>
  <div style="height: 650px">
    <div class="boxbasket">
      <div class="columns">
        <div class="column">
          <label for="" class="forbasket">Product list</label><br /><br /><br />
          <table style="width:100%; text-align: left;">
            <tr style="background-color:black; font-family: Bahnschrift;">
              <th style="color:white;padding:7px">Order list</th>
              <th style="color:white;padding:7px">Amount</th>
              <th style="color:white;padding:7px">Price</th>
            </tr>
            <tr style=" font-family: Bahnschrift;" >
              <th style="color:black;padding:7px;">KuyTee</th>
              <th style="color:black;padding:7px">1</th>
              <th style="color:black;padding:7px">0.5</th>
            </tr>
            <tr style=" font-family: Bahnschrift;" >
              <th style="color:black;padding:7px;">KuyFluke</th>
              <th style="color:black;padding:7px">1</th>
              <th style="color:black;padding:7px">0.01</th>
            </tr>
          </table>
          
  <!--ลูปตรงนี้นะไอเหี้ยจีน-->        
          


          <div class="row" style="line-height: 0px;" id="totalstyle">
            <div class="columns">
            <div class="column">
              <div style="margin-right: 380px">Orderlist</div>
            </div>
            <div class="column">
              <div>xxxxx</div>
            </div>
          </div>
          <div class="columns" style="color: #53B434">
            <div class="column">
              <div style="margin-right: 380px">Discount</div>
            </div>
            <div class="column">
              <div>xxxxx</div>
            </div>
            
          </div>
          <div class="columns">
            <div class="column">
              <div style="margin-right: 370px">FinalPrice</div>
            </div>
            <div class="column">
              <div>xxxxx</div>
            </div>
          </div>
          </div>
        </div>
        

        <div class="column" id="payment">
          <h1 style="position: relative; left: -15px; color: white">Payment</h1>
          <div
            class="custom-select"
            style="width: 200px; position: relative; left: -45px"
          >
            <select id="paymentchoose" style="position: relative; left: -15px">
              <option value="">Choose</option>
              <option value="">Credit card</option>
              <option value="">Bank transfer</option>
              <option value="">True wallet</option>
            </select>
            <button
              id="paymentbut"
              style="position: relative; left: 160px; top: -55px"
            >
              Paid
            </button>
          </div>
          <img
            style="
              margin-left: -25%;
              margin-top: -40%;
              width: 70%;
              height: auto;
              opacity: 100%;
            "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Numismatics_and_Notaphily_icon.png/1024px-Numismatics_and_Notaphily_icon.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/plugins/axios";
export default {
  data() {
    return{
      baskets:{}
    }
  },
  mounted(){
    this.onBasket()
  },
  methods:{
    onBasket(){
      axios.get('/basket').then(res =>{
        console.log(res + "basket")
        this.baskets = res.data
      }).catch((error)=>{
        console.log(error)
      })

    }
  }
}
</script>
