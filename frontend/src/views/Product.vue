<template>
  <div class="main" style="margin-top: 30px;margin-left:20%; width:50%;margin-bottom: 70px">
    <!-- <div class="pro_img"></div>-->
    <!-- detail and buy  -->
  <div class="modal " :class="{'is-active':modalDetail}">
  <div class="modal-background"></div>
  <div class="modal-card" style="height:350px">
    <header class="modal-card-head">
      <p class="modal-card-title">{{name}}</p>
      <button class="delete" aria-label="close" @click="modalDetail = false"></button>
    </header>
    <section class="modal-card-body">
      <!-- Content ... -->
      <!-- dropdown size -->
      <div class="dropdown " :class="{'is-active':dropdown_size}">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" @click="dropdown_size= !dropdown_size">
      <span>{{size}}</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu "  id="dropdown-menu" role="menu">
    <div class="dropdown-content">
      <a href="#" v-for="sizeprice in sizeprices" :key="sizeprice.product_price" class="dropdown-item" @click="size= sizeprice.product_size, dropdown_size = false, price = sizeprice.product_price,error_dropdown =false">
        {{sizeprice.product_size}} (ราคา {{sizeprice.product_price}} บาท)
      </a>

    </div>
  </div>
  <div class="w-80">
    <input class="input ml-2 " type="text" placeholder="More" v-model="comment">
    <span class="has-text-danger" style="margin-left: 1rem margin-bottom:1rem" v-if="error_dropdown">กรุณาเลือก Size</span>
</div>

</div>
<!-- dropdown size -->
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success " @click="add">Add</button>
      <button class="button" @click="modalDetail = false">Cancel</button>
            <p style="margin-left:18rem" class="label ">
    ราคาสินค้า : {{price}}</p>
    </footer>
  </div>
</div>


    <div class="columns container-fluid m-0" style="display: grid;
  grid-template-columns: 30% 30% 30% 30%;">
      <div class="column is-1 is-offset-0" v-for="product in products" :key="product.product_name" style="width: 100%;" >
        <div  class="card" id="go" >
          <div class="card-image" >
            <figure class="image is-4by3" style="margin-bottom: -7px;">
              <img
                src="https://acuisineth.com/app/uploads/2020/07/Apple-Cinnamon-Cake-12-1024x683.jpg"
                alt=""
                style="
                  border-top-left-radius: 20%;
                  border-top-right-radius: 20%;
                "
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="content" style="margin-bottom: -7px; font-size: 17px">
              {{product.product_name}}
            </div>
            <br>
            <div class="content">
            <p><span class="size"> Size</span>: S M L</p>
            <!-- <p><span class="color:green">Price</span>: 45-55 บาท </p> -->
            </div>
            
          </div>
        </div>
        <div class="butpro" style="width: 83%; margin-left: 8%">
          <button
            class="button"
            id="button-buy"
            style="
              font-weight: 500;
              font-size: 15px;
              width: 100%;
              border-style: hidden;
              height: 30px;
            " @click="name = product.product_name, modalDetail = true,product_id= product.product_id, querySizePrice()"
          >
           Details Buy
          </button>
        </div>
      </div>
    </div>
    

    <div class="Baskets">
      <router-link to="/user/basket">
      <a
        ><i class="fas fa-shopping-basket fa-1x mr-2"></i>
        <span > Baskets({{basket}})</span></a
      >
      </router-link>
    </div>
  </div>
  
</template>

<script>
import axios from "@/plugins/axios";
export default {
  
  name: "Home",
  props: ["user"],
  data() {
    return {
      products: [],
      modalBasket:false,
      modalDetail:false,
      dropdown_size:false,
      name:"",
      price:0,
      size:"Size",
      error_dropdown: false,
      comment:"",
      product_id: 0,
      basket:0,
      sizeprices:{},
    };
  },
  mounted() {
    this.queryProduct();
    this.countProduct();
  },
  methods: {
    queryProduct() {
      axios.get("/product").then((response) => {
        this.products = response.data;
        console.log(this.products);
      });
    },
    add(){
      const send = {
        name:this.name,
        product_id:this.product_id,
        size:this.size,
        price:this.price,
      }
      if(this.size != 'Size'){
        axios.put("http://localhost:3000/product/cart", send).then((res) =>{
          console.log(res)
        })
      this.size = 'Size';
      this.price = 0;
      this.name = "";
      this.modalDetail = false
      this.comment = ""
      this.basket++
      }else{
        this.error_dropdown = true
      }
      
    },

    countProduct(){
      axios.get("/product/count").then((response)=>{
        this.basket = response.data.count
      })
    },
    querySizePrice(){
      axios.get(`/product/size/${this.name}`).then(response =>{
      this.sizeprices = response.data

      })
    }
  },
};
</script>
