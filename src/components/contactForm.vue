<template>
    <div class="card">
        <form @submit.prevent="add_comment()">
            <div class="alert alert-danger" v-if="erreur==false">
                <p>{{msgErreur}}</p>
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" placeholder="tom wolf" v-model="name">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="email">
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">message</label>
                <textarea class="form-control" id="message" rows="3" v-model="message"></textarea>
            </div>
            <div class="mb-3">
                <label for="rating" class="form-label">rating</label>
                <select class="form-select" aria-label="Default select example" id="rating" v-model.number="rating">
                    <option selected>rate us !</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">four</option>
                    <option value="5">five</option>
                </select>
            </div>
            <div class="mb-3">
                <button type="submit" class="btn sign-btn"><i class="bi bi-send"></i></button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'contactForm',
    data() {
        return {
            name: '',
            email: '',
            message: '',
            rating: null,
            erreur: true,
            msgErreur: 'please fill all the fields',
        }
    },
    props: {
        id: Number,
    },
    methods: {
        //function to check if the name is valid or not
        validName() {
            if (this.name.length < 3) {
                return false;
            } else {
                return true;
            }
        },
        vaildForm() {
            if (this.name == '' || this.email == '' || this.message == '' || this.rating == null) {
                return false;
            } else {
                return true;
            }
        },
        add_comment() {
            if(!this.vaildForm()){
                this.erreur=false;
                return this.erreur;
            }
        else{
            let new_comment = {
                id:this.id,
                name: this.name,
                email: this.email,
                message: this.message,
                rating: this.rating,
            }
            this.$emit('add-comment', new_comment);
            this.name = '';
            this.email = '';
            this.message = '';
            this.rating = '';
            this.erreur=true;
            return true;
        }}
    }
}
</script>
<style scoped>
.card form {
    margin: 5%;
}

.sign-btn {
    background-color: var(--color-yellow);
    text-align: right;
}
</style>