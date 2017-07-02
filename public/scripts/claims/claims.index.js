console.log('claims.js is connected');
(function(){
  angular.module('app')
  .component('claims.index', {
    controller: controller,
    templateUrl: './scripts/claims/claims.html'
  })

  controller.$inject = ['API_BASE_URL', '$http', '$state', 'claimService']
  function controller (baseUrl, $http, $state, claimService){
    const vm = this


    vm.$onInit = onInit;
    vm.toggleForm = toggleForm;



    function onInit (){
      console.log('hi');
      vm.show = false
    }

    function toggleForm(){
      if(vm.show === false){
        vm.show = true
      } else{
        vm.show = false
      }
    }



  }


})()
