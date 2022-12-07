<template>
    <div class="card card-bg" style="width: 15rem;">
            <h3>invitation</h3>
    <img :src="event.poster" class="card-img-top img-card" alt="">
    <div class="card-body">
    <p class="card-text text-center">you're invited to the {{event.event_name}} hosted by MOUVMA on this date {{event.date}}</p>
    <button class="btn bg" @click="delete_saved_event()"><i class="bi bi-trash icon-card"></i></button>
    </div>
</div>
</template>
<script>
    export default{
        name:'savedEvent',
        data(){
            return{
            }
        },
        props:{
            event:Object,
    },
    methods:{
        delete_saved_event(){
            this.$emit('delete-saved');
        }
    },
    }

</script>
<style scoped>
.img-card{
    height:10rem;
    width: 10rem;
  
}
.card-bg{
    background-color: var(--color-yellow);
    align-items: center;
}
.bg{
    background-color: var(--color-yellow);
}
</style>