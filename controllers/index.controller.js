angular.module('ProductApp')
.controller('ProductController', function($scope, ProductService) {

    $scope.products = [];
    $scope.categories = [];

    $scope.categoryIcons = {
        "beauty": "fas fa-magic",
        "fragrances": "fas fa-spray-can",
        "furniture": "fas fa-couch",
        "groceries": "fas fa-shopping-basket",
        "home-decoration": "fas fa-paint-roller",
        "kitchen-accessories": "fas fa-utensils",
        "laptops": "fas fa-laptop",
        "mens-shirts": "fas fa-tshirt",
        "mens-shoes": "fas fa-shoe-prints",
        "mens-watches": "fas fa-clock",
        "mobile-accessories": "fas fa-mobile-alt",
        "motorcycle": "fas fa-motorcycle",
        "skin-care": "fas fa-spa",
        "smartphones": "fas fa-mobile-screen",
        "sports-accessories": "fas fa-basketball-ball",
        "sunglasses": "fas fa-glasses",
        "tablets": "fas fa-tablet-alt",
        "tops": "fas fa-tshirt",
        "vehicle": "fas fa-car",
        "womens-bags": "fas fa-shopping-bag",
        "womens-dresses": "fas fa-female",
        "womens-jewellery": "fas fa-gem",
        "womens-shoes": "fas fa-shoe-prints",
        "womens-watches": "fas fa-clock"
    };

    // Load featured products
    ProductService.getFeaturedProducts(3)
        .then(res => $scope.products = res.data.products)
        .catch(err => console.error('Product API error:', err));

    // Load categories
    ProductService.getCategories()
        .then(res => $scope.categories = res.data)
        .catch(err => console.error('Category API error:', err));
});
