angular.module("ProductApp")
.directive("productCard", function() {
    return {
        restrict: "E",
        scope: {
            product: "=",
            showButton: "@"   //to show/hide Add to Cart button
        },  
        template: `
        <div class="product-card border-green">
            <a class="product-image-container" ng-href="details.html?id={{product.id}}">
                <img ng-src="{{product.images[0]}}" class="img-fluid">
            </a>
            <div class="mt-2">
                <div class="stars mb-1">
                    <i class="fa-regular fa-star" ng-repeat="i in [1,2,3,4,5]"></i>
                </div>
                <h5 class="mb-0 fw-bold" style="font-family: 'Inter'; font-size: 1rem;">
                    {{product.title}}
                </h5>
                <small class="text-muted" style="font-family: 'Instrument Sans'; font-size: 13px;">
                    {{product.category}}
                </small>
                <div class="d-flex justify-content-between align-items-center mt-2">
                    <div class="price" style="font-family: 'Instrument Sans';">
                        ₹{{ (product.price * 87.56).toFixed(2) }} (&#36;{{product.price}})
                    </div>
                    <button ng-if="showButton" class="btn btn-sm btn-success"
                            style="background-color: #88ad35; border: none;">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
        `
    };
});
