<template>
    <div ref="document">
        <div id="facture"  ref="fact" >
            <h1 class="text-center title">facture</h1>
            <table class="table" border="2">
                <tr>
                    <th class="scope">profuct name</th>
                    <th class="scope">profuct price</th>
                    <th class="scope">profuct quantity</th>
                    <th class="scope">profuct total</th>
                </tr>
                <tr v-for="confirm in confirmed_orders">
                <td>{{confirm.name}}</td>
                <td>{{confirm.price + '$'}}</td>
                <td>{{confirm.buy}}</td>
                <td>{{(confirm.price * confirm.buy) + "$"}}</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>total price : </td>
                    <td>{{totalFacture() + "$"}}</td>
                </tr>
            </table>
        </div>
        <button @click="exportToPDF" class="btn selected">download receipt</button>
    </div>
</template>

<script>
import html2pdf from 'html2pdf.js';

export default {
    name: "app",
    created(){
        this.confirmed_orders= JSON.parse(localStorage.getItem("confirm_orders"))==null ? [] : JSON.parse(localStorage.getItem("confirm_orders"));
    },
    data(){
        return{
            confirmed_orders:[],
            download:false,
        }
    },
    methods: {
        async exportToPDF()  {
            let fact = this.$refs['fact'];
            fact.classList.add('style_pdf');
            console.log(fact.classList);
            await html2pdf(document.getElementById("facture"), {
                margin: 1,
                filename: "facture.pdf",
            })
            fact.classList.remove('style_pdf');
        },
        totalFacture(){
            let total=0;
            for(let i=0;i<this.confirmed_orders.length;i++){
                total+=(this.confirmed_orders[i].price*this.confirmed_orders[i].buy);
            }
            return total;
        },
    },
};
</script>
<style scoped>
.selected{
    background-color: #FFBF00;
    margin-left: 80%;
    margin-bottom: 10%;
}
.style_pdf{
    margin-top: 60px;
    margin-left: 10%;
}
.title{
    margin-left: -10%;
}
</style>