<template>
  <div class="container">
    <h1 class="text-center text-capitalize title">welcome to the official mouvma website</h1>
   <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
  .container{
    margin-top: 5%;
    margin-bottom: 5%;
  }
  .title{
    font-size: 4rem;
    color: #ffbb55;
  }
  @media screen and (max-width:768px) {
    .title{
      margin-top: 30%;
    }
  }
</style>