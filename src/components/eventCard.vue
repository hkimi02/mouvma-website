<template>
        <div class="card member-card other-member">
            <img :src="event.poster" class="card-img-top member-pic">
            <div class="card-body">
                <h5 class="card-title text-center">{{event.event_name}}</h5>
                <div class="social-media text-muted" style="margin-left: 20%;margin-bottom: 6%;">
                    <a href="" class="me-4 text-reset">
                        <i class="bi bi-folder-plus icon-card"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="bi bi-info-circle icon-card"></i>
                    </a>
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
    },
    methods:{
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
}
.icon-card{
    font-size: 1rem !important;
    color: black !important;
    font: bolder !important;
}

</style>