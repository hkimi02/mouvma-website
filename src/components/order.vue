<template>
    <div class="card mb-3 card-purshase">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="c.img" class="img-fluid rounded-start" alt="" />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{c.name}}</h5>
                    <p class="card-text">
                    <p class="fw-light">{{c.buy}}</p>
                    <p>{{"product price : " + (c.price*c.buy) +"$"}}</p>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:'order',
    props:[
        'c',
    ],
    created(){
        console.log(this.c);
    }
}
</script>