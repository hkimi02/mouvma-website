<template>
  <div class="all container">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link now active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button"
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
      <li class="nav-item" role="presentation">
    <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">comments</button>
  </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
        <div class="row tab-cards">
          <div class="card element-card col">
            <img src="../assets/images/Date_picker.svg" alt="" >
            <h3 class="title-card">saved Events</h3>
          </div>
          <div class="card element-card col">
            <img src="../assets/images/Drone_Delivery.svg" alt="" >
            <h3 class="title-card">confirmed orders</h3>
          </div>
          <div class="card element-card col">
            <img src="../assets/images/Get_in_touch.svg" alt="">
            <h3 class="title-card">comments</h3>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
        <div class="row invitations">
        <div class="col event-card" v-for="event in savedEvents">
          <savedEvent :event="event" @delete-saved="delete_saved(event.event_id)"></savedEvent>
        </div>
      </div>
      </div>
      <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
        <div class="container">
          <downloadFacture></downloadFacture>
          <div class="row">
            
            <div class="col" v-for="c in confirmed_orders">
              <order :c="c" />
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
        <div class="row comments">
          <div class="col comment-card" v-for="comment in comments">
            <comment :comment="comment" @delete-comment="delete_comment(comment.id)"></comment>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import order from '@/components/order.vue'
import downloadFacture from '@/components/downloadFacture.vue';
import savedEvent from '@/components/savedEvent.vue';
import comment from '@/components/comment.vue';
export default {
  name: 'ProfileView',
  created() {
    this.confirmed_orders = JSON.parse(localStorage.getItem('confirm_orders'));
    this.savedEvents=JSON.parse(localStorage.getItem('savedEvents'));
    this.comments=JSON.parse(localStorage.getItem('comments'));
    },
  data() {
    return {
      active: 'all',
      confirmed_orders: [],
      savedEvents:[],
      comments:[],
    }
  },
  components: {
    order,
    downloadFacture,
    savedEvent,
    comment,
  },
  methods:{
    delete_saved(id){
      this.savedEvents = this.savedEvents.filter((x) => x.event_id != id);
      alert('invitation removed');
      localStorage.setItem("savedEvents", JSON.stringify(this.savedEvents));
      console.log(this.savedEvents);
    },
    delete_comment(id){
      this.comments = this.comments.filter((x) => x.id != id);
      alert('comment removed');
      localStorage.setItem("comments", JSON.stringify(this.comments));
    },
  },
}
</script>
<style>
.now {
  background-color: #FFBF00;
}

.now:hover {
  background-color: #FFBF00;
}

.title-card {
  color: #FFBF00;
}

.all {
  margin-top: 4%;
  margin-bottom: 10%;
}

.element-card {
  height: 30rem!important;
  width: 30rem !important;
  box-shadow: var(--box-shadow);
  justify-content: center;
  align-items: center;
  transition: all 300ms ease;
}
.element-card img {
width: 20rem;
height: 20rem;
}

.element-card:hover {
  cursor: pointer;
  box-shadow: none;
}
.comment-card{
  margin-top: 5%;
}
.tab-cards {
  gap: 5%;
  margin-top: 5%;
}
.invitations,.comments{
  gap: 0rem;
  margin-top: 5%;
}
@media screen and (max-width:768px) {
  .all {
  margin-top: 15%;
  margin-bottom: 10%;
}
  .tab-cards{
    display: block;
    gap:1.5rem;
  }
  .invitations div{
  margin-left: 10%;
  margin-top: 3%;
}
.element-card,comment-card{
  margin-top: 3%;
  margin-left: 4%;
}
.comment-card{
  margin-left: 10%;
}
}
</style>
