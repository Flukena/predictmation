<template>
  <div class="main" style="margin-top: 30px;margin-left:20%; width:50%;margin-bottom: 70px">
    <!-- <div class="pro_img"></div>-->
    <!-- detail and buy  -->
  <div class="modal " :class="{'is-active':modalDetail}">
  <div class="modal-background"></div>
  <div class="modal-card" style="height:350px">
    <header class="modal-card-head">
      <p class="modal-card-title">{{name}}</p>
      <button class="delete" aria-label="close" @click="modalDetail = false
      "></button>
    </header>
    <section class="modal-card-body">
      <!-- Content ... -->
      <!-- dropdown size -->
      <div class="dropdown " :class="{'is-active':dropdown_size}">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" @click="dropdown_size= !dropdown_size">
      <span>Size</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu "  id="dropdown-menu" role="menu">
    <div class="dropdown-content">
      <a href="#" class="dropdown-item">
        S (ราคา 35 บาท)
      </a>
            <a href="#" class="dropdown-item">
        M (ราคา 45 บาท)
      </a>
            <a href="#" class="dropdown-item">
        L (ราคา 55 บาท)
      </a>
    </div>
  </div>
  <div class="w-80">
    <input class="input ml-2 " type="text" placeholder="More">
    <div class="contorl is-right">
</div>
</div>

</div>
<!-- dropdown size -->
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success ">Add</button>
      <button class="button" @click="modalDetail = false">Cancel</button>
            <p style="margin-left:18rem" class="label ">
    ราคาสินค้า : {{price}}</p>
    </footer>
  </div>
</div>
<!-- detil and Buy -->


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
            <p><span class="color:green">Price</span>: 45-55 บาท </p>
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
            " @click="name = product.product_name, modalDetail = true"
          >
           Details Buy
          </button>
        </div>
      </div>
    </div>
    

    <div class="Baskets">
      <a
        ><i class="fas fa-shopping-basket fa-1x mr-2"></i>
        <span> Baskets</span></a
      >
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
      price:0
    };
  },
  mounted() {
    this.queryProduct();
  },
  methods: {
    queryProduct() {
      axios.get("http://localhost:3000/product").then((response) => {
        this.products = response.data;
        console.log(this.products);
      });
    },
  },
};
</script>
