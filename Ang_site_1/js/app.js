(function()
{
  'use strict'
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject=['$scope','$filter'];
  function LunchCheckController($scope,$filter)
  {
    $scope.split_items=function()
    {
      if(!$scope.items)
      {
          $scope.message="Please enter data first";
      }
      else
      {
      $scope.seperated_items=$scope.items.split(',');
      $scope.count=$scope.seperated_items.length;
      if($scope.count<=3)
      {
        $scope.message="Enjoy!";
      }
      else if($scope.count>3){

        $scope.message="Too much!";
      }
    }
  }
}
})
()
