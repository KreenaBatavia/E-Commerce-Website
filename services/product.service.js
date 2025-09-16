angular.module('ProductApp')
.service('ProductService', function($http) {
    const API_BASE = 'https://dummyjson.com/products';

    this.getAllProducts = function(limit, skip) {
        return $http.get(`${API_BASE}?limit=${limit}&skip=${skip}`);
    };

    this.getProductById = function(id) {
        return $http.get(`${API_BASE}/${id}`);
    };

    this.getCategories = function() {
        return $http.get(`${API_BASE}/category-list`);
    };

    this.getFeaturedProducts = function(limit = 3) {
        return $http.get(`${API_BASE}?limit=${limit}`);
    };

    this.getProductsByCategory = function(category) {
        return $http.get(`${API_BASE}/category/${category}`);
    };


});
