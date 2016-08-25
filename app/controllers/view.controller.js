(function () {
  "use strict";
  
  angular.module('app')
    .controller('View', ViewController);
  
  ViewController.$inject = ['Car', '$routeParams'];
  
  function ViewController(Car, $routeParams) {
    var vm = this;
    
    vm.car = Car.find($routeParams.id);
  }
}());