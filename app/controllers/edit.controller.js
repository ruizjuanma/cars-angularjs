(function () {
  "use strict";
  
  angular.module('app')
    .controller('Edit', EditController);
  
  EditController.$inject = ['Car', '$routeParams'];
  
  function EditController(Car, $routeParams) {
    var vm = this;
    
    vm.car = {};
    vm.update = update;
    
    vm.car = Car.find($routeParams.id);

    function update() {
      Car.update(vm.car);
    }
  }
}());