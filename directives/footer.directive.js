angular.module('ProductApp')
.directive('appFooter', function() {
    return {
        restrict: "E",  
        template: ` 
        <footer class="custom-footer py-4">
          <div class="container text-center text-md-start">
            <div class="row align-items-center">
              <div class="col-md-3 mb-3 mb-md-0">
                <a href="#" class="text-dark text-decoration-none">SHOP</a>
              </div>

              <div class="col-md-6 mb-3 mb-md-0">
                <ul class="nav justify-content-center">
                  <li class="nav-item"><a href="index.html" class="nav-link px-2 text-dark custom-footer-navlink">Home</a></li>
                  <li class="nav-item"><a href="shop.html" class="nav-link px-2 text-dark custom-footer-navlink">Shop</a></li>
                  <li class="nav-item"><a href="#" class="nav-link px-2 text-dark custom-footer-navlink">About</a></li>
                  <li class="nav-item"><a href="#" class="nav-link px-2 text-dark custom-footer-navlink">Contact</a></li>
                </ul>
              </div>

              <div class="col-md-3 text-center text-md-end">
                <i class="fab fa-facebook me-3"></i>
                <i class="fab fa-instagram me-3"></i>
                <i class="fab fa-youtube me-3"></i>
                <i class="fab fa-x-twitter"></i>
              </div>
            </div>

            <hr class="my-3">

            <div class="row">
              <div class="col text-center">
                <small class="text-muted">© 2025 Generic eCommerce</small>
              </div>
            </div>
          </div>
        </footer>
        `
    };
});
