<template>
    <div class="container" v-if="(event!=null)">
        <Eventdescrib :event="event"></Eventdescrib>
    </div>
</template>
<script>
import Eventdescrib from '@/components/Eventdescrib.vue';
import EventService from '@/services/EventService.js';
export default{
    props:["id"],
    components:{
        Eventdescrib,
    },
    data(){
        return{
            event:null,
        }
    },
    created(){
            // console.log(this.$params.id);
            // this.id=this.$params.id;
            console.log(this.id);
            EventService.getEvent(this.id).then((response)=>{
                this.event=response.data;
                this.event.poster = require("../assets/images/event" + this.id + "/" + response.data.poster.split("/")[4]);
                this.event.img1 = require("../assets/images/event" + this.id + "/" + response.data.img1.split("/")[4]);
                this.event.img2 = require("../assets/images/event" + this.id + "/" + response.data.img2.split("/")[4]);
                this.event.img3 = require("../assets/images/event" + this.id + "/" + response.data.img3.split("/")[4]);
                this.event.img4 = require("../assets/images/event" + this.id + "/" + response.data.img4.split("/")[4]);
            })
            .catch((error)=>{
                console.log(error);
            });
    },
}
</script>
<style scoped>
.container{
    margin-top: 10%;
}
</style>