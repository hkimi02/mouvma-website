<template>
  <div class="all">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link now" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button"
          role="tab" aria-controls="home-tab-pane" aria-selected="true">ALL</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button"
          role="tab" aria-controls="profile-tab-pane" aria-selected="false">saved events</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button"
          role="tab" aria-controls="contact-tab-pane" aria-selected="false">confirmed orders</button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
      </div>
      <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
        </div>
      <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
        <div class="container">
          <div class="row flex-end now">
            b
          </div>
          <div class="row">
            <downloadFacture></downloadFacture>
          <div class="col" v-for="c in confirmed_orders">
                  <order :c="c" />
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
</template>
<script>
import order from '@/components/order.vue'
import downloadFacture from '@/components/downloadFacture.vue';
export default {
  name: 'ProfileView',
  created() {
    this.confirmed_orders = JSON.parse(localStorage.getItem('confirm_orders'));
  },
  data() {
    return {
      active: 'all',
      confirmed_orders: [],
    }
  },
  components:{
    order,
    downloadFacture,
  },
}
</script>
<style>
.now {
  background-color: #FFBF00;
}
.all{
  margin-top: 4%;
}
</style>
