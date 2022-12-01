<template>
  <div class="row store">

    <div class="row">
      <div class="col">
        <img src="../assets/images/store.svg" alt="">
      </div>
      <h2 class="col title text-center">welcome to the official mouvma Store all mouvma merch in one place</h2>
    </div>
    <div class="row flex-end" width="100px">
      <button class="btn btn-cart" data-bs-toggle="modal" data-bs-target="#exampleModal"><span
          class="material-symbols-outlined">shopping_cart</span>({{ purshases.length }})</button>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Cart</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="card row" v-for="purshase in purshases">
                  <img :src="purshase.img" alt="" class="product-image">
                  <div class="card-body">
                    <h3>{{ purshase.name }}</h3>
                    <h3>{{ purshase.price }}</h3>
                    <h3>{{ purshase.buy }}</h3>
                    <button class="btn btn-danger" @click="deleteproduct(purshase.id)"><span class="material-symbols-outlined" style="color: black;">delete</span></button>
                    <button class="btn btn-primary add-btn" @click="add_quantity(purshase.id)"><span class="material-symbols-outlined" style="color: black;">add</span></button>
                  </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 class="title_products text-center">products</h1>
    <div v-for="product in products" class="col product">
      <mecrhArticle @add-to-cart="addToCart(product)" :product="product"></mecrhArticle>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import mecrhArticle from '@/components/merchArticle.vue'

export default {
  name: 'StoreView',
  components: {
    mecrhArticle
  },
  created() {
    this.purshases = JSON.parse(localStorage.getItem("purshases"));
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'black hoodie',
          price: 38,
          quantity: 10,
          img: require("../assets/images/blackhoodie.jpg"),
          buy: 0,
        },
        {
          id: 2,
          name: 'yellow hoodie',
          price: 42,
          quantity: 10,
          img: require("../assets/images/yellow_hoodie.jpeg"),
          buy: 0,
        },
        {
          id: 3,
          name: 'black hoodie',
          price: 38,
          quantity: 10,
          img: require("../assets/images/yellow_hoodie.jpeg"),
          buy: 0,
        },
        {
          id: 4,
          name: 'black hoodie',
          price: 38,
          quantity: 10,
          img: require("../assets/images/yellow_hoodie.jpeg"),
          buy: 0,
        }
      ],
      purshases: [],
    }
  },
  methods: {
    addToCart(product) {
      let i = 0;
      for (i = 0; i < this.purshases.length; i++) {
        if (this.purshases[i].id == product.id) {
          this.purshases[i].buy++;
          return;
        }
      }
      for (i = 0; i < this.products.length; i++) {
        if (this.products[i].id == product.id && this.products[i].id > 0) {
          this.purshases.push(product);
          this.purshases[this.purshases.length - 1].buy++;
          localStorage.setItem('purshases', JSON.stringify(this.purshases));
          this.products[i].quantity--;
          return;
        }
      }
    },
    deleteproduct(id){
      console.log(id);
      this.purshases = this.purshases.filter((x) => x.id != id);
      localStorage.setItem('purshases', JSON.stringify(this.purshases));
    },
    checkquantity(id){
      let i=0;
      for(i=0;i<this.purshases.length;i++){
        if(this.products[i].id===id && this.products[i].quantity>0){
          return true;
        }
      }
      return false;
    },
    add_quantity(id){
      let i=0;
      if(this.checkquantity(id)){
      for(i=0;i<this.purshases.length;i++){
        if(this.purshases[i].id==id){
          this.purshases[i].buy++;
        }
      }
      for(i=0;i<this.products.length;i++){
        if(this.products[i].id==id){
          this.products[i].quantity--;
        }
      }
    }
  },
  },
}
</script>
<style>
.store {
  margin-bottom: 5%;
  margin-left: 0%;
}

.title {
  color: #FFBF00;
  font: bold;
  font-size: 4rem;
  margin-top: 10%;
}

.title_products {
  color: #FFBF00;
  font: bold;
  font-size: 4rem;
  margin-top: 5%;
  margin-bottom: 5%;
}

.product {
  margin-left: 12%;
  margin-bottom: 3%;
}

.btn-cart {
  background-color: #fff;
  box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
  border: 0;
}

.product-image {
  height: 100px;
  width: 100px;
}

.btn-cart:hover {
  background-color: #FFBF00;
}
.add-btn{
  margin-left: 2%;
}
</style>