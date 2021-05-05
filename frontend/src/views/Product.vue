<template>
  <div class="main" style="margin-top: 30px;margin-left:20%; width:50%;margin-bottom: 70px">
    <!-- <div class="pro_img"></div>-->
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
              Example
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
            "
          >
            Buy
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
