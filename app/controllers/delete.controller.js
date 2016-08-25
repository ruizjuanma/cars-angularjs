(function () {
  "use strict";
  
  angular.module('app')
    .controller('Delete', DeleteController);
  
  DeleteController.$inject = ['Car', '$routeParams', '$location'];
  
  function DeleteController(Car, $routeParams, $location) {
    var vm = this;
    
    vm.car = {};
    vm.destroy = destroy;
    
    vm.car = Car.find($routeParams.id);

    function destroy() {
      Car.remove(vm.car);
      $location.path('/cars');
    }
  }
}());