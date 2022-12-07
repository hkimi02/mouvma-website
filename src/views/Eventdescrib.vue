<template>
    <h1 class="title_page text-center">{{event.event_name}}</h1>
    <br>
    <div class="row presentation">
        <div class="col">
            <img :src="event.img1" class="store-img img-thumbnail rounded" alt="" style="width: 30rem;height: 40rem;">
        </div>
        <h2 class="col title text-center">{{ event.describ1 }}</h2>
    </div>
    <div class="row presentation">
        <h2 class="col title text-center">{{ event.describ2 }}</h2>
        <div class="col">
            <img :src="event.img2" class="store-img img-thumbnail rounded" alt="" style="width: 50rem;height: 50rem;">
        </div>
    </div>
    <div class="row presentation">
        <div class="col">
            <img :src="event.img3" class="store-img img-thumbnail rounded" alt="" style="width: 50rem;height: 50rem;">
        </div>
        <h2 class="col title text-center">{{ event.describ3 }}</h2>
    </div>
    <div class="row presentation">
        <h2 class="col title text-center">{{ event.describ4 }}</h2>
        <div class="col">
            <img :src="event.img4" class="store-img img-thumbnail rounded" alt="" style="width: 50rem;height: 50rem;">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    props: {
        event: Object
    }
}

</script>
<style scoped>
.title {
    color: var(--color-light-blue);
    font: bold;
    font-size: 2rem;
    margin-top: 10%;
}
.title_page{
    color: var(--color-light-blue);
    font: bold;
    font-size: 4rem;
    margin-top: 10%;
    text-align: center!important;
}
.presentation{
    margin-bottom: 5%;
}
.card{
    width: 100%;
}
@media screen and (max-width:768px) {
    .presentation {
        display: block;
    }
}
</style>