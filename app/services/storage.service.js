(function () {
  "use strict";
  
  angular.module('app')
    .service('Storage', StorageService);
  
  StorageService.$inject = ['LOCALSTORAGE'];
  
  function StorageService(LOCALSTORAGE) {
    var sv = this;
    
    sv.addCar = addCar;
    sv.carsNoLocalStorage = [];
    sv.deleteCar = deleteCar;
    sv.editCar = editCar;
    sv.getCarById = getCarById;
    sv.getCarId = getCarId;
    sv.getCarsLocalStorage = getCarsLocalStorage;
    sv.setCarsLocalStorage = setCarsLocalStorage;
    sv.useLocalStorage = useLocalStorage;
    
    function addCar(list, car) {
      list.push(car);
    }
    
    function deleteCar(list, id) {
      list.splice(findIndexByKeyValue(list, 'id', id), 1);
    }
    
    function editCar(car, model, wheels, color, price) {
      car.model = model;
      car.wheels = wheels;
      car.color = color;
      car.price = price;
    }
    
    function findIndexByKeyValue(array, key, value) {
      for (var i = 0; i < array.length; i++) {
        if (array[i][key] == value) {
          return i;
        }
      }
      return null;
    }
    
    function getCarById(list, id) {
      //return ($.grep(list, function (o) {return o.id == id; }))[0];
      
      var index = findIndexByKeyValue(list, 'id', id);
      return index === null ? null : list[index];
    }
    
    function getCarId(list) {
      return list.length === 0 ? 0 : Math.max.apply(Math, list.map(function (o) {return o.id; })) + 1;
    }
    
    function getCarsLocalStorage() {
      var list = localStorage.getItem(LOCALSTORAGE.KEY);
      return JSON.parse((list === null) ? '[]' : list);
    }
    
    function setCarsLocalStorage(list) {
      localStorage.setItem(LOCALSTORAGE.KEY, JSON.stringify(list));
    }
    
    function useLocalStorage() {
      return ((typeof (Storage) !== 'undefined') && (LOCALSTORAGE.ACTIVE)) ? true : false;
    }
  }
}());