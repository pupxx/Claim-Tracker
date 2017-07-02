(function() {
  console.log('claimService.js is connected');
  'use strict';

  angular
    .module('app')
    .service('claimService', claimService)

  claimService.$inject = ['API_BASE_URL','$http']


  function claimService(baseUrl, $http) {



  }

})()
