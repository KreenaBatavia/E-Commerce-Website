angular.module('ProductApp')
.controller('DetailsController', function($scope, $http, ProductService) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    ProductService.getProductById(id)
        .then(res => $scope.product = res.data)
        .catch(err => console.error('Error fetching product details:', err));
});
