(function () {
  "use strict";
  
  angular.module('app')
    .controller('New', NewController);
  
  NewController.$inject = ['Car'];
  
  function NewController(Car) {
    var vm = this;
    
    vm.add = add;
    vm.car = {};
    
    function add() {
      Car.create(vm.car);
      vm.car = {};
    }
  }
}());