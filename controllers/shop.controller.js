angular.module('ProductApp')
.controller('ShopController', function($scope, $window, $timeout, ProductService) {
    $scope.products = [];
    $scope.page = 0;
    $scope.limit = 9;
    $scope.loading = false;
    $scope.allLoaded = false;
    $scope.totalProducts = 0;

    $scope.categories = [];

    // Load categories and initialize Select2
    ProductService.getCategories()
    .then(res => {
        // Wait for DOM to render ng-repeat if needed
        $timeout(() => {
            const $select = $('#categorySelect');

            // Clear any existing options and add placeholder
            $select.empty().append('<option></option>');

            // Add categories to the select
            res.data.forEach(category => {
                $select.append(new Option(category, category));
            });

            // Initialize Select2 without AJAX
            $select.select2({
                placeholder: 'Select a category',
                allowClear: true
            });

            // Listen for changes
            $select.on('change', function () {
                const selected = $(this).val();
                $scope.filterByCategory(selected);
            });
        });
    })
    .catch(err => console.error('Error fetching categories:', err));

    // Load initial products
    ProductService.getAllProducts($scope.limit, 0)
        .then(res => {
            $scope.totalProducts = res.data.total;
            $scope.products = res.data.products;
            $scope.page = 1;
        })
        .catch(err => console.error('Error fetching products:', err));

    // Load more products (infinite scroll)
    $scope.loadProducts = function () {
        if ($scope.loading || $scope.allLoaded) return;

        if ($scope.products.length >= $scope.totalProducts) {
            $scope.allLoaded = true;
            return;
        }

        $scope.loading = true;
        ProductService.getAllProducts($scope.limit, $scope.page * $scope.limit)
            .then(res => {
                const newProducts = res.data.products || [];
                if (newProducts.length === 0) {
                    $scope.allLoaded = true;
                } else {
                    $scope.products = $scope.products.concat(newProducts);
                    $scope.page++;
                }
            })
            .finally(() => $scope.loading = false);
    };

    // Filter products by selected category
    $scope.filterByCategory = function (category) {
        $scope.$apply(() => {
            if (!category) {
                // If cleared (placeholder shown), load all products
                $scope.page = 0;
                $scope.products = [];
                $scope.allLoaded = false;
                $scope.loadProducts();
            } else {
                ProductService.getProductsByCategory(category)
                    .then(res => {
                        $scope.products = res.data.products;
                        $scope.totalProducts = res.data.total;
                        $scope.allLoaded = true; // disable infinite scroll for filtered view
                    })
                    .catch(err => console.error('Error fetching category products:', err));
            }
        });
    };

    // Infinite scroll
    angular.element($window).bind('scroll', function () {
        if ($window.innerHeight + $window.scrollY >= document.body.offsetHeight - 200) {
            $scope.$apply($scope.loadProducts);
        }
    });
});
