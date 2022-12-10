<template>
    <!-- Footer -->
    <footer class="text-center text-lg-start text-muted">
        <!-- Section: Social media -->
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <!-- Left -->
            <div class="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
            </div>
            <!-- Left -->
            <!-- Right -->
            <div>
                <a href="" class="me-4 text-reset">
                    <i class="bi bi-facebook"></i>
                </a>
                <a href="" class="me-4 text-reset">
                    <i class="bi bi-twitter"></i>
                </a>
                <a href="" class="me-4 text-reset">
                    <i class="bi bi-google"></i>
                </a>
                <a href="" class="me-4 text-reset">
                    <i class="bi bi-instagram"></i>
                </a>
                <a href="" class="me-4 text-reset">
                    <i class="bi bi-linkedin"></i>
                </a>
                <a href="" class="me-4 text-reset">
                    <i class="bi bi-github"></i>
                </a>
            </div>
            <!-- Right -->
        </section>
        <!-- Section: Social media -->

        <!-- Section: Links  -->
        <section class="">
            <div class="container text-center text-md-start mt-5">
                <!-- Grid row -->
                <div class="row mt-3">
                    <!-- Grid column -->
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <!-- Content -->
                        <h6 class="text-uppercase fw-bold mb-4">
                            <i class="fas fa-gem me-3"></i>MOUVMA
                        </h6>
                        <p>
                            university club sport,events,merch in one place
                        </p>
                    </div>
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">
                            sections
                        </h6>
                        <p>
                            <router-link to="/Events" class="text-reset">events</router-link>
                        </p>
                        <p>
                            <router-link to="/Store" class="text-reset">store</router-link>
                        </p>
                        <p>
                            <router-link to="/Profile" class="text-reset">profile</router-link>
                        </p>
                        <p>
                            <router-link to="/contactUs" class="text-reset">contact us</router-link>
                        </p>
                    </div>
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                        <p><i class="bi bi-house-door-fill"></i> tunis tunisia</p>
                        <p>
                            <i class="bi bi-envelope-fill"></i>
                            mouvma@gmail.com
                        </p>
                        <p><i class="bi bi-telephone-fill"></i> + 42 463 928</p>
                    </div>
                    <!-- Grid column -->
                </div>
                <!-- Grid row -->
            </div>
        </section>
        <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
            © 2022 Copyright:
            <a class="text-reset fw-bold" href="https://www.facebook.com/mohamedamin.hkimi.5/">Hkimi Mohamed Amin</a>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'footer_part',
}
</script>
<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css");

footer {
    background: #FFBF00;
    color: #10A19D;
}
</style>