<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed">
      <div class="container-fluid">
        <a class="navbar-brand brand-text" style="color: #10A19D;" href="#">MOUVMA </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <div class="nav-link">
                <router-link class="router-link" to="/"><span class="material-symbols-outlined">home</span>
                </router-link>
              </div>
            </li>
            <li class="nav-item">
              <div class="nav-link">
                <router-link class="router-link" to="/Profile"><span class="material-symbols-outlined">person</span>
                </router-link>
              </div>
            </li>
            <li class="nav-item">
              <div class="nav-link">
                <router-link class="router-link" to="/Events"><span class="material-symbols-outlined">
                    event
                  </span></router-link>
              </div>
            </li>
            <li class="nav-item">
              <div class="nav-link">
                <router-link class="router-link" to="/Store"><span class="material-symbols-outlined">
                    store
                  </span></router-link>
              </div>
            </li>
          </ul>
          <button class="btn login_btn" style="background-color: #10A19D;">login</button>
        </div>
      </div>
    </nav>
  </div>
  <div>
    <router-view v-slot="{ Component }">
  <transition name="grow-out" mode="out-in">
    <component :is="Component" />
  </transition>
</router-view>
  </div>
  <footer_part></footer_part>
</template>
<script>
import footer_part from '@/components/footer_part.vue'
export default {
  name: 'App',
  components: {
    footer_part
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600&display=swap');

:root {
  --color-primary: #7380ec;
  --color-danger: #ff7782;
  --color-success: #41f1b6;
  --color-warning: #ffbb55;
  --color-light-blue: #10A19D;
  --color-purple: #540375;
  --color-orange: #FF7000;
  --color-yellow: #FFBF00;
  --color-white: #fff;
  --color-info-dark: #7d8da1;
  --color-info-light: #dce1eb;
  --color-dark: #363949;
  --color-light: rgba(132, 139, 200, 0.18);
  --color-primary-variant: #111e88;
  --color-dark-variant: #677483;
  --color-background: #f6f6f9;
  --card-border-radius: 2rem;
  --border-radius-1: 0.4rem;
  --border-radius-2: 0.8rem;
  --border-radius-2: 1.2rem;
  --card-padding: 1.8rem;
  --padding-1: 1.2rem;
  --box-shadow: 0 2rem 3rem var(--color-light);
}
/* .fade-enter,.fade-leave-to{
  opacity: 0;
  transform: translateX(2em);
}
.fade-enter-active,.fade-leave-active{
  transition: all .3s ease;
} */
.dark-theme-variables {
  --color-backgound: #181a12;
  --color-white: #202528;
  --color-dark-variant: #a3bdcc;
  --color-light: rgba(0, 0, 0, 0.4);
  --box-shadow: 0 2rem 3rem var(--color-light);
}
* {
  margin: 0%;
  padding: 0%;
  outline: 0;
  appearance: none;
  border: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
html{
  scroll-behavior: smooth;
}
.router-link {
  text-decoration: none;
}

.navbar {
  background-color: var(--color-yellow);
  box-shadow: var(--box-shadow);
  position: fixed!important;
  width: 100%;
  top: 0%;
  z-index: 10;
}

span {
  font-size: 1rem;
  color: var(--color-light-blue);
}

button {
  box-shadow: var(--box-shadow);
}
.fade-enter-form,
.fade-leave-to{
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.3s ease-out;
}
.slide-enter-form,
.slide-leave-to{
  opacity: 0;
  transform: translateX(-100%);
}
.slide-enter-active,
.slide-leave-active{
  transition: 0.3s ease-out;
}
.slide-down-enter-form,
.slide-down-leave-to{
  opacity: 0;
  transform: translateY(300px);
}
.slide-down-enter-active,
.slide-down-leave-active{
  transition: 0.3s ease-out;
}
.grow-in-enter-form,
.grow-in-leave-to{
  opacity: 0;
  transform: scale(0.3);
}
.grow-in-enter-active,
.grow-in-leave-active{
  transition: 0.3s ease-out;
}
.grow-out-enter-form,
.grow-out-leave-to{
  opacity: 0;
  transform: scale(1.2);
}
.grow-out-enter-active,
.grow-out-leave-active{
  transition: 0.5s ease-out;
}

</style>
