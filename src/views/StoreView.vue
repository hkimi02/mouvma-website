<template>
  <div class="row store">

    <div class="row">
      <div class="col">
        <img src="../assets/images/store.svg" alt="">
      </div>
      <h2 class="col title text-center">welcome to the official mouvma Store all mouvma merch in one place</h2>
    </div>
    <div class="row flex-end" width="100px">
      <button class="btn btn-cart" data-bs-toggle="modal" data-bs-target="#exampleModal"><span class="material-symbols-outlined">shopping_cart</span></button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Cart</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
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
      <mecrhArticle :product="product"></mecrhArticle>
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
  data() {
    return {
      products: [
        {
          id:'1',
          name: 'black hoodie',
          price: 38,
          quantity: 10,
          img: require("../assets/images/blackhoodie.jpg"),
        },
        { 
          id:1,
          name: 'yellow hoodie',
          price: 42,
          quantity: 10,
          img: require("../assets/images/yellow_hoodie.jpeg"),
        },
        {
          id:2,
          name: 'black hoodie',
          price: 38,
          quantity: 10,
          img: require("../assets/images/yellow_hoodie.jpeg"),
        },
        {
          id:'3',
          name: 'black hoodie',
          price: 38,
          quantity: 10,
          img: require("../assets/images/yellow_hoodie.jpeg"),
        }
      ]
    }
  }
}
</script>
<style>
.store {
  margin-bottom: 5%;
  margin-left: 5%;
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
.btn-cart{
  background-color: #fff;
  box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
  border: 0;
}
.btn-cart:hover{
  background-color: #FFBF00;
}
</style>