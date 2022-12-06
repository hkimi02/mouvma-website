<template>
        <div class="card member-card other-member">
            <img :src="event.poster" class="card-img-top member-pic">
            <div class="card-body">
                <h5 class="card-title text-center">{{event.event_name}}</h5>
                <div class="social-media text-muted" style="margin-left: 20%;margin-bottom: 6%;">
                    <a href="" class="me-4 text-reset">
                        <i class="bi bi-folder-plus"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="bi bi-info-circle"></i>
                    </a>
                    <a href="" class="me-4 text-muted">
                        {{event.date}}
                    </a>
                </div>
            </div>
        </div>
</template>
<script>
export default{
    name:'eventCard',
    props:{
        event:Object,
    }
}
</script>
<style scoped>
.member-card {
    width: 18rem;
    background-color: #FFBF00;
    transition: all 300ms ease;
    box-shadow: 0 2rem 3rem #dce1eb;
}

.member-card:hover {
    transform: scale(1.2);
}

.other-member {
    margin-top: 5%;
    margin-left: 9%;
}


.member-pic {
    margin-top: 5%;
}
.social-media{
    display: flex;
    align-items: center;
}
</style>