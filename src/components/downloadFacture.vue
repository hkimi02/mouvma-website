<template>
    <div ref="document">
        <div id="facture">
            <table class="table" border="1">
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
        }
    },
    methods: {
        exportToPDF() {
            html2pdf(document.getElementById("facture"), {
                margin: 1,
                filename: "facture.pdf",
            });
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
}
</style>