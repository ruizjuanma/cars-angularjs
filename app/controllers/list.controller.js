(function () {
  "use strict";
  
  angular.module('app')
    .controller('List', ListController);
  
  ListController.$inject = ['Car', '$routeParams'];
  
  function ListController(Car, $routeParams) {
    var vm = this;
    
    vm.cars = [];
    
    if ($routeParams.filterModel !== '') {
      vm.filterModel = $routeParams.filterModel;
    }
    if ($routeParams.filterWheels !== '') {
      vm.filterWheels = $routeParams.filterWheels;
    }
    if ($routeParams.filterColor !== '') {
      vm.filterColor = $routeParams.filterColor;
    }
    if ($routeParams.filterPrice !== '') {
      vm.filterPrice = $routeParams.filterPrice;
    }
    
    if ($routeParams.sortModel !== '') {
      vm.sort = $routeParams.sortModel;
    } else if ($routeParams.sortWheels !== '') {
      vm.sort = $routeParams.sortWheels;
    } else if ($routeParams.sortColor !== '') {
      vm.sort = $routeParams.sortColor;
    } else if ($routeParams.sortPrice !== '') {
      vm.sort = $routeParams.sortPrice;
    }
    
    vm.cars = Car.all();
  }
}());