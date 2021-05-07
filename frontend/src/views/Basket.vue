<template>
  <div style="height: 700px" id="basketwall">
    <div class="boxbasket">
      <div class="columns">
        <div class="column">
          <label for="" class="forbasket">Product list</label><br /><br /><br />
          <table style="width:100%; text-align: left;">
            <tr style="background-color:black; font-family: Bahnschrift;">
              <th style="color:white;padding:7px">Order list</th>
              <th style="color:white;padding:7px">Amount</th>
              <th style="color:white;padding:7px">Price (฿)</th>
            </tr>
            <tr
              style=" font-family: Bahnschrift;"
              v-for="basket in baskets"
              :key="basket.order_d_id"
            >
              <td style="color:black;padding:7px;">
                {{ basket.product_name }}({{ basket.product_size }})
                <button @click="deleteItems(basket.order_d_id)" class="delete">
                  delete
                </button>
              </td>
              <td style="color:black;padding:7px">{{ basket.unit }}</td>
              <td style="color:black;padding:7px">{{ basket.price }}</td>
            </tr>
          </table>


          <div class="row" style="line-height: 0px;" id="totalstyle">
            <div class="columns">
              <div class="column">
                <div style="margin-right: 328px">Total</div>
              </div>
              <div class="column">
                <div>{{ total }} Bath</div>
              </div>
            </div>
            <div class="columns" style="color: #53B434">
              <div class="column">
                <div style="margin-right: 300px"> <p>Discount</p></div>
              </div>
              <div class="column">
                <div>{{discunt}} Bath</div>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <div style="margin-right: 290px">FinalPrice</div>
              </div>
              <div class="column">
                <div>{{ ftotal-discunt }} Bath</div>
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
              id="paymentbut" @click="paid()"
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
    return {
      baskets: {},
      total: 0,
      ftotal: 0,
      order_id: "",
      cart_id:0,
      percent:1,
      discunt:0
    };
  },
  mounted() {
    this.onBasket();
    this.discount()
  },
  methods: {
    onBasket() {
      axios
        .get("/basket")
        .then((res) => {
          console.log(res.data)
          this.baskets = res.data;
          this.cart_id = res.data[0].cart_id
          for (var i = 0; i < this.baskets.length; i++) {
            this.total += this.baskets[i].unit * this.baskets[i].price;

          }
          this.ftotal = this.total;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async deleteItems(order_id) {
      await axios.delete(`/basket/${order_id}`);

      
    },paid(){
      if(this.baskets.length > 0){

  axios.put(`/paid/${this.cart_id}`).then(response=>{
        console.log(response)
        alert("คำสั่งซิ้อเสร็จสิ้น กรุณารอรับ email เพื่อมารับสินค้า");
        this.$router.push({ path: "/" });
      }).catch(error=>{
        console.log(error)
      })
      }else{
        alert("กรุณาเลือกสินค้าก่อนโอนเงิน")
        this.$router.push({ path: "/product" });
      }
    },
    discount(){
      axios.get('/basket/discount').then((response)=>{
        const customer = response.data.customer
        const discount = response.data.discount
        var currentdate = new Date();
        var year = currentdate.getFullYear()

        var dateuser = ((customer[0].date_of_application).split('T')[0]).split('-')
        var user_year =Number(dateuser[0])
          var total = 0
                  for (var i = 0; i < this.baskets.length; i++) {
            total += this.baskets[i].unit * this.baskets[i].price;

          }

        if(year - user_year <= 1){
          this.percent = (100- discount[0].spec_disc)/100
          this.discunt = parseInt(total *(1-this.percent))
        }
})

    }
  },
};
</script>
