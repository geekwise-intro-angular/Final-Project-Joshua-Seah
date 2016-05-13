angular.module('app',[]);
angular.module('app')
  .factory('keywordList', function(){
    return keywordList = [
        Profile_Pic = "lens_flare",
        Logo = "Sup",
        Dummy_Face = "Super"

    ]

})

  .controller('indexCtrl', function($scope, keywordList, $window){
      $scope.loadFromList = function(){
      var output = keywordList;
      $scope.output = keywordList;
      console.log(output);

}})
