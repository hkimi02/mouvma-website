<template>
    <div class="container-fluid main">
        <div class="row presentation">
            <div class="col">
                <img src="../assets/images/eventspage.svg" class="store-img" alt="">
            </div>
            <h2 class="col title text-center">here you can find all of mouvma events you can discover them and add them
                to your list</h2>
        </div>
        <div class="row">
            <h1 class="text-center title-event">Events</h1>
        </div>
        <div class="row">
            <div v-for="event in events" class="col card-event">
                <eventCard :event="event"></eventCard>
            </div>
        </div>
    </div>
</template>
<script>
import eventCard from '@/components/eventCard.vue';
import EventService from '@/services/EventService';
export default {
    name: 'EvenetsView',
    components: {
        eventCard
    },
    data() {
        return {
            events: [],
            savedEvents: [],
        }
    },
    created() {
        this.savedEvents=JSON.parse(localStorage.getItem('savedEvents')) == null ? localStorage.setItem("savedEvents",JSON.stringify(this.savedEvents)) : JSON.parse(localStorage.getItem('savedEvents'));
        EventService.getEvents().then(response => {
            console.log(response.data[0].poster.split("/")[4].substr(0, 16));
            this.events = response.data;
            let i = 0;
            for (i = 0; i < this.events.length; i++) {
                this.events[i].poster = require("../assets/images/event" + (i + 1) + "/" + response.data[i].poster.split("/")[4]);
                this.events[i].img1 = require("../assets/images/event" + (i + 1) + "/" + response.data[i].img1.split("/")[4]);
                this.events[i].img2 = require("../assets/images/event" + (i + 1) + "/" + response.data[i].img2.split("/")[4]);
                this.events[i].img3 = require("../assets/images/event" + (i + 1) + "/" + response.data[i].img3.split("/")[4]);
                this.events[i].img4 = require("../assets/images/event" + (i + 1) + "/" + response.data[i].img4.split("/")[4]);
            }
        })
    }
}
</script>
<style>
.main {
    width: 100% !important;
    margin-bottom: 5%;
    margin-top: 10%;
}

.card-event {
    margin-left: 6%;
    margin-bottom: 5%;
}

.title {
    color: #FFBF00;
    font: bold;
    font-size: 4rem;
    margin-top: 5%;
}

.title-event {
    color: var(--color-yellow);
    font: bold;
    font-size: 4rem;
}
@media screen and (max-width:768px) {
    .presentation{
        display: block;
    }
    .card-event {
    margin-left: 0%;
}
}
</style>