(function () {
  "use strict";
  
  angular.module('app')
    .directive('carForm', carFormDirective);
  
  function carFormDirective() {
    return {
      restrict: 'E',
      templateUrl: './app/directives/carForm.template.html',
      scope: {
        vm: "="
      }
    };
  }
}());