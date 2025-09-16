angular.module('ProductApp')
.directive('appNavbar', function() {
    return {
        restrict: "E",
        // scope: {
        //     navClass: '@'  
        // },

        link: function(scope, element, attrs) {
            // Dynamically replace nav class on the element
            element.find("nav").addClass(attrs.navClass);
        },
        template: `
        <nav class="navbar navbar-expand-lg py-3 font-Inst_Sans">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="assests/logo.png" class="logo">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link custom-navlink" href="index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link custom-navlink" href="shop.html">Shop</a></li>
                        <li class="nav-item"><a class="nav-link custom-navlink" href="#">About</a></li>
                        <li class="nav-item"><a class="nav-link custom-navlink" href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        `
    };
});
