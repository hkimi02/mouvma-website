<template>
  <div class="row store container-fluid">
    <div class="row">
      <div class="col">
        <img src="../assets/images/store.svg" class="store-img" alt="">
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
              <h1 class="modal-title fs-5" id="exampleModalLabel">Cart <span
                  class="material-symbols-outlined">shopping_cart</span></h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                  <div class="card mb-3 card-purshase" v-for="purshase in purshases">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img :src="purshase.img" class="img-fluid rounded-start" alt="" />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">{{ purshase.name }}</h5>
                          <p class="card-text">
                          <p class="fw-light">{{ "prix unitaire:" + purshase.price + " $" }}</p>
                          <p>{{ "quantité:" + purshase.buy }}</p>
                          <p>{{ "prix total:" + (purshase.price * purshase.buy) + "$" }}</p>
                          </p>
                          <button class="btn btn-danger" @click="deleteproduct(purshase.id)"><span
                              class="material-symbols-outlined" style="color: black;">delete</span></button>
                          <button class="btn btn-primary add-btn" @click="add_quantity(purshase.id)"><span
                              class="material-symbols-outlined" style="color: black;">add</span></button>
                        </div>
                      </div>
                    </div>
                  </div>
              <hr>
              <h5>total facture : {{ '$' + totalfacture() }}</h5>
            </div>
            <div class="modal-footer">
              <button class="btn confirm-orders" @click="pass_order()" data-bs-toggle="modal"
                data-bs-target="#staticBackdrop">confirm order</button>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">thank you!</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              thank you your order have been confirmed !
              you can access all your confirmed orders in your profiles !
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn selected" data-bs-dismiss="modal">Understood</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 class="title_products text-center">products</h1>
    <div class="row filter-btn">
      <button :class="[filter == 'all' ? 'selected' : '']" class="btn col" @click="showArticle('all')">ALL</button>
      <button :class="[filter == 'hoodie' ? 'selected' : '']" class="btn col"
        @click="showArticle('hoodie')">hoodie</button>
      <button :class="[filter == 't-shirt' ? 'selected' : '']" class="btn col"
        @click="showArticle('t-shirt')">t-shirt</button>
      <button :class="[filter == 'accesoires' ? 'selected' : '']" class="btn col"
        @click="showArticle('accesoires')">accesoires</button>
    </div>
    <br>
    <div v-for="product in filtred_products" class="col product">
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
    this.filtred_products = this.products;
    this.confirm_orders= JSON.parse(localStorage.getItem("confirm_orders"))==null ? [] : JSON.parse(localStorage.getItem("confirm_orders"));
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'black hoodie',
          price: 38,
          quantity: 10,
          img: require("../assets/images/black_hoodie.jpg"),
          buy: 0,
          type: 'hoodie',
        },
        {
          id: 2,
          name: 'yellow hoodie',
          price: 42,
          quantity: 10,
          img: require("../assets/images/yellow_hoodie.jpg"),
          buy: 0,
          type: 'hoodie',
        },
        {
          id: 3,
          name: 'red hoodie',
          price: 38,
          quantity: 10,
          img: require("../assets/images/red_hoodie.jpg"),
          buy: 0,
          type: 'hoodie',
        },
        {
          id: 4,
          name: 'white hoodie',
          price: 38,
          quantity: 10,
          img: require("../assets/images/white_hoodie.jpg"),
          buy: 0,
          type: 'hoodie',
        },
        {
          id: 5,
          name: 'white t-shirt',
          price: 38,
          quantity: 10,
          img: require("../assets/images/white_tshirt.jpg"),
          buy: 0,
          type: 't-shirt',
        },
        {
          id: 6,
          name: 'red t-shirt',
          price: 38,
          quantity: 10,
          img: require("../assets/images/red_tshirt.jpg"),
          buy: 0,
          type: 't-shirt',
        },
        {
          id: 7,
          name: 'black t-shirt',
          price: 38,
          quantity: 10,
          img: require("../assets/images/black_tshirt.jpg"),
          buy: 0,
          type: 't-shirt',
        },
        {
          id: 8,
          name: 'yellow t-shirt',
          price: 38,
          quantity: 10,
          img: require("../assets/images/yellow_tshirt.jpg"),
          buy: 0,
          type: 't-shirt',
        },
        {
          id: 9,
          name: 'red bracelet',
          price: 38,
          quantity: 10,
          img: require("../assets/images/red_bracelet.jpg"),
          buy: 0,
          type: 'accesoires',
        },
        {
          id: 10,
          name: 'yellow bracelet',
          price: 38,
          quantity: 10,
          img: require("../assets/images/yellow_bracelet.jpg"),
          buy: 0,
          type: 'accesoires',
        },
        {
          id: 11,
          name: 'mouvma white sticker',
          price: 38,
          quantity: 10,
          img: require("../assets/images/mouvma_sticker.png"),
          buy: 0,
          type: 'accesoires',
        },
        {
          id: 12,
          name: 'mouvma black sticker',
          price: 38,
          quantity: 10,
          img: require("../assets/images/black_sticker.png"),
          buy: 0,
          type: 'accesoires',
        },
      ],
      purshases: [],
      filtred_products: [],
      filter: 'all',
      confirm_orders: [],
    }
  },
  methods: {
    addToCart(product) {
      let item = { ...product };
      let i = 0;
      for (i = 0; i < this.purshases.length; i++) {
        if (this.purshases[i].id == item.id) {
          this.purshases[i].buy++;
          return;
        }
      }
      for (i = 0; i < this.products.length; i++) {
        if (this.products[i].id == item.id && this.products[i].id > 0) {
          this.purshases.push(item);
          this.purshases[this.purshases.length - 1].buy++;
          this.purshases[this.purshases.length - 1].quantity = 0;
          localStorage.setItem('purshases', JSON.stringify(this.purshases));
          this.products[i].quantity--;
          return;
        }
      }
    },
    deleteproduct(id) {
      this.purshases = this.purshases.filter((x) => x.id != id);
      localStorage.setItem('purshases', JSON.stringify(this.purshases));
    },
    checkquantity(id) {
      let i = 0;
      for (i = 0; i < this.purshases.length; i++) {
        if (this.products[i].id === id && this.products[i].quantity > 0) {
          return true;
        }
      }
      return false;
    },
    add_quantity(id) {
      let i = 0;
      if (this.checkquantity(id)) {
        for (i = 0; i < this.purshases.length; i++) {
          if (this.purshases[i].id == id) {
            this.purshases[i].buy++;
          }
        }
        for (i = 0; i < this.products.length; i++) {
          if (this.products[i].id == id) {
            this.products[i].quantity--;
          }
        }
      }
    },
    showArticle(type) {
      this.filtred_products = [];
      let i = 0;
      for (i = 0; i < this.products.length; i++) {
        if (this.products[i].type == type) {
          this.filtred_products.push(this.products[i]);
        }
      }
      if (type == 'all') {
        this.filtred_products = this.products;
      }
      this.filter = type;
    },
    pass_order() {
      let i=0;
      for(i=0;i<this.purshases.length;i++){
          this.confirm_orders.push({ ...this.purshases[i]});
    }
      this.purshases = [];
      localStorage.setItem('purshases', JSON.stringify(this.purshases));
      localStorage.setItem('confirm_orders', JSON.stringify(this.confirm_orders));
    },
    totalfacture() {
      let total = 0;
      let i = 0;
      for (i = 0; i < this.purshases.length; i++) {
        total += this.purshases[i].price * this.purshases[i].buy;
      }
      return total;
    }
  },
  computed: {

  }
}
</script>
<style>
.store {
  margin-bottom: 5%;
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
  margin-left: 2%;
}

.product-image {
  height: 100px;
  width: 100px;
}

.btn-cart:hover {
  background-color: #FFBF00;
}

.add-btn {
  margin-left: 2%;
}

.filter-btn {
  margin-bottom: 2%;
  margin-left: 1%;
}

.selected {
  background-color: #FFBF00;
}

.selected:hover {
  background-color: #FFBF00;
}

.close-btn {
  cursor: pointer;
}

.card-purshase {
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.confirm-orders {
  background-color: #FFBF00;
}

.confirm-orders:hover {
  background-color: #FFBF00;
}

@media screen and (max-width:768px) {
  .card-purshase {
    margin-left: 0%;
  }

  .store-img {
    display: none;
  }
}
</style>