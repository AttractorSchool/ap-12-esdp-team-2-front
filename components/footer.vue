<template>
  <footer class="footer-area section-gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <h4>Top Products</h4>
            <ul>
              <li><router-link to="#">Managed Website</router-link></li>
              <li><router-link to="#">Manage Reputation</router-link></li>
              <li><router-link to="#">Power Tools</router-link></li>
              <li><router-link to="#">Marketing Service</router-link></li>
            </ul>								
          </div>
        </div>
        <div class="col-lg-4  col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <h4>Newsletter</h4>
            <p>Stay update with our latest</p>
            <div class="" id="mc_embed_signup">
              <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get">
                <div class="input-group">
                  <input v-model="email" type="email" class="form-control" placeholder="Enter Email Address" required>
                  <div class="input-group-btn">
                    <button class="btn btn-default" type="submit"><span class="lnr lnr-arrow-right"></span></button>
                  </div>
                </div>
              </form> 
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom row align-items-center justify-content-between">
        <p class="footer-text m-0 col-lg-6 col-md-12">
          <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
          Copyright &copy; {{ getCurrentYear() }} All rights reserved | Made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a> &amp; distributed by <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
          <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
        </p>
        <div class="col-lg-6 col-sm-12 footer-social">
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-dribbble"></i></a>
          <a href="#"><i class="fa fa-behance"></i></a>
        </div>
      </div>						
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    getCurrentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped>
.footer-area {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>