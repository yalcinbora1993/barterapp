angular.module('barterApp')
  .controller('PostCtrl', function ($scope, $location, $http){
    $scope.postImage = function(image){
      var postToDatabase = function(location){
        console.log("postToDatabase running");
        $scope.data = {
          value: $scope.value,
          description: $scope.description,
          location: [location.lat, location.lng],
          image: $scope.image
        };
        $http.post('/post', $scope.data)
        .success(function(data, status, headers, config){
          console.log("SUCCESS!");
          $location.path('/');
        })
        .error(function(data, status){
          console.log("ERROR :(");
        });
      };
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("location is:",position);
        var location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        postToDatabase(location);
      });
  };
});