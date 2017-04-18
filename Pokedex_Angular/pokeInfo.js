app.directive('pokeInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'pokeInfo.html' 
  }; 
});