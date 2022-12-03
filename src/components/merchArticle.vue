<template>
    <div class="col">
    <div class="product_card">
        <div class="imgBx">
            <img :src="product.img" alt="">
        </div>
        <div class="contextBx">
            <h3>{{product.name}}</h3>
            <h2 class="price">{{'$'+product.price}}</h2>
            <button class="buy" @click="addproduct()">Buy now</button>
        </div>
    </div>
</div>
</template>
<script>
export default{
    name:'mecrhArticle',
    data(){
        return{
        }
    },
    props:
        [
        'product'
        ]
    ,
    methods:{
        addproduct(){
            this.$emit("add-to-cart");
        }
    }
}
</script>
<style scoped>
.product_card {
    position: relative;
    width: 320px;
    height: 420px;
    background: #122936;
    border-radius: 20px;
    overflow: hidden;
}

.product_card::before {
    content: '';
    position: absolute;
    top: -50%;
    width: 100%;
    height: 100%;
    background: #FFBF00;
    transform: skewY(345deg);
    transition: 0.5s;
}

.product_card:hover::before {
    top: -60%;
    transform: skewY(390deg);
}

.product_card::after {
    content: 'Urban';
    position: absolute;
    bottom: 0;
    left: 0;
    font-weight: 600;
    font-size: 8em;
    color: rgba(0, 0, 0, 0.1);
}

.imgBx {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    z-index: 1; 
}

.imgBx img {
    max-width: 100%;
    width: 10rem;
    height: 13rem;
    transition: 0.5s;
}

.product_card:hover .imgBx img {
    max-width: 70%;
}

.contextBx {
    position: relative;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
}

.contextBx h3 {
    font-size: 18px;
    color: #fff;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.contextBx .price {
    font-size: 24px;
    color: #fff;
    font-weight: 500;
    letter-spacing: 1px;
}

.contextBx .buy {
    position: relative;
    top: 200px;
    opacity: 0;
    padding: 10px 30px;
    margin-top: 15px;
    color: #fff;
    text-decoration: none;
    background: #FFBF00;
    border-radius: 30px;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: 0.5s;
}

.contextBx .buy {
    top: 0;
    opacity: 1;
}
</style>