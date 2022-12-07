<template>
    <div class="card comment-card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{comment.name}}</h5>
    <h6 class="card-subtitle mb-2 text-muted"><a :href="('mailto:'+comment.email)">{{comment.email}}</a></h6>
    <p class="card-text">{{comment.message}}</p>
    <p class="card-text"><span class="fa fa-star checked" v-for="star in comment.rating"></span></p>
    <button class="btn delete-btn" @click="delete_comment"><i class="bi bi-trash icon-card"></i></button>
</div>
</div>
</template>
<script>
    name:'comment'
    export default{
      data(){
        return{

        }
      },
      props:{
        comment:Object
      },
      methods:{
        delete_comment(){
          this.$emit('delete-comment');
        }
      }
    }
</script>
<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
.comment-card{
  background-color: var(--color-yellow);
  box-shadow: var(--box-shadow);
}
</style>