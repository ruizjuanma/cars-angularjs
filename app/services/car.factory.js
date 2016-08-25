(function () {
  "use strict";
  
  angular.module('app')
    .factory('Car', CarFactory);
  
  CarFactory.$inject = ['Storage'];
  
  function CarFactory(Storage) {
    return {
      all: all,
      create: create,
      update: update,
      remove: remove,
      find: find
    };
    
    function all() {
      if (Storage.useLocalStorage()) {
        return Storage.getCarsLocalStorage();
      } else {
        return Storage.carsNoLocalStorage;
      }
    }
    
    function create(car) {
      if (Storage.useLocalStorage()) {
        var carsLocalStorage = Storage.getCarsLocalStorage();
        car.id = Storage.getCarId(carsLocalStorage);
        Storage.addCar(carsLocalStorage, car);
        Storage.setCarsLocalStorage(carsLocalStorage);
      } else {
        car.id = Storage.getCarId(Storage.carsNoLocalStorage);
        Storage.addCar(Storage.carsNoLocalStorage, car);
      }
    }
    
    function update(carObj) {
      if (Storage.useLocalStorage()) {
        var carsLocalStorage = Storage.getCarsLocalStorage();
        Storage.editCar(Storage.getCarById(carsLocalStorage, carObj.id),
                            carObj.model,
                            carObj.wheels,
                            carObj.color,
                            carObj.price);
        Storage.setCarsLocalStorage(carsLocalStorage);
      } else {
        Storage.getCarById(Storage.carsNoLocalStorage, carObj.id) = carObj;
      }
    }
    
    function remove(carObj) {
      if (Storage.useLocalStorage()) {
        var carsLocalStorage = Storage.getCarsLocalStorage();
        Storage.deleteCar(carsLocalStorage, carObj.id);
        Storage.setCarsLocalStorage(carsLocalStorage);
      } else {
        Storage.deleteCar(Storage.carsNoLocalStorage, carObj.id);
      }
    }
    
    function find(id) {
      if (Storage.useLocalStorage()) {
        return Storage.getCarById(Storage.getCarsLocalStorage(), id);
      } else {
        return Storage.getCarById(Storage.carsNoLocalStorage, id);
      }
    }
  }

}());