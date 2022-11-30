<template>
    
    <div class="row store">
        <h2 class="row title text-center">welcome to the official mouvma Store all mouvma merch in one place</h2>
    <mecrhArticle></mecrhArticle>
</div>
</template>

<script>
// @ is an alias to /src
import mecrhArticle from '@/components/merchArticle.vue'

export default {
  name: 'StoreView',
  components: {
    mecrhArticle
  },
  data(){
    return{
        products:[
            {

            }
        ]
    }
  }
}
</script>
<style>
.store{
    margin-top: 5%;
    margin-bottom: 5%;
    margin-left: 3%;
}
</style>