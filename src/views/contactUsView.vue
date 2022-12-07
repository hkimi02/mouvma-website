<template>
    <div class="main container">
        <h1 class="title text-center">give us your opinions to help us develop our services</h1>
        <div class="row presentation">
            <div class="col">
                <contactForm @add-comment="add_comment"></contactForm>
            </div>
            <div class="col">
                <img src="../assets/images/contactUS.svg" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import contactForm from '@/components/contactForm.vue'
export default {
    name: 'contactUs',
    created() {
        this.comments = JSON.parse(localStorage.getItem('comments')) == null ? localStorage.setItem("comments", JSON.stringify(this.comments)) : JSON.parse(localStorage.getItem('comments'));
    },
    components: {
        contactForm
    },
    data() {
        return {
            comments: [],
        }
    },
    methods: {
        add_comment(new_comment) {
            this.comments.push(new_comment);
            alert('this comment has been saved you can check it in your profile :)');
            localStorage.setItem("comments", JSON.stringify(this.comments));
        }
    }
}
</script>
<style scoped>
.main {
    margin-top: 10%;
    margin-bottom: 10%;
}

.title {
    color: var(--color-yellow);
}

@media screen and (max-width:768px) {
    .presentation {
        display: block;
    }

    .main {
        margin-top: 15%;
    }
}
</style>