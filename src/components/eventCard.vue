<template>
        <div class="card member-card other-member">
            <img :src="event.poster" class="card-img-top member-pic">
            <div class="card-body">
                <h5 class="card-title text-center">{{event.event_name}}</h5>
                <div class="social-media text-muted" style="margin-left: 20%;margin-bottom: 6%;">
                    <button class="me-4 text-reset btn icon-btn" v-if="(checkSaved(event.id)==true)" @click="delete_event()">
                        <i class="bi bi-trash icon-card"></i>
                    </button>
                    <button class="me-4 text-reset btn icon-btn" @click="add_event()" v-else>
                        <i class="bi bi-folder-plus icon-card"></i>
                    </button>
                    
                    <router-link :to="{name:'eventDetailsView', params:{id:event.id} }">
                    <button  class="me-4 text-reset btn icon-btn">
                        <i class="bi bi-info-circle icon-card"></i>
                    </button>
                    </router-link>
                    <a href="" class="me-4 text-muted icon-card">
                        {{event.date}}
                    </a>
                </div>
            </div>
        </div>
</template>
<script>
export default{
    name:'eventCard',
    created(){
    },
    props:{
        event:Object,
        savedEvents:Array,
    },
    methods:{
        add_event(){
            this.$emit('add-event');
        },
        delete_event(){
            this.$emit('delete-event');
        },
        checkSaved(id){
            let i=0;
            for(i=0;i<this.savedEvents.length;i++){
                if(this.savedEvents[i].event_id==id){
                    return true;
                }
            }
            return false;
        },
    }
}
</script>
<style scoped>
.member-card {
    width: 18rem;
    background-color: #FFBF00;
    transition: all 300ms ease;
    box-shadow: var(--box-shadow);
}

.member-card:hover {
    box-shadow: none;
}

.other-member {
    margin-top: 5%;
    margin-left: 9%;
}


.member-pic {
    margin-top: 5%;
    height: 20rem;
}
.social-media{
    display: flex;
    align-items: center;
    margin-left: -20%;
}
.icon-card{
    font-size: 1rem !important;
    color: black !important;
    font: bolder !important;
}
.icon-btn{
    background-color: var(--color-light-blue);
}
</style>