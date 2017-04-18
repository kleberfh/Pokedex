var app = angular.module('pokedex', []);
app.controller('MainController', ['$scope', function($scope){
	$scope.indice = 0;
	$scope.pokes = [
	{name:"Mew",id:1,type:"Psychic",img:'http://cdn.bulbagarden.net/upload/thumb/b/b1/151Mew.png/250px-151Mew.png'},
	{name:"MewTwo",id:2,type:"Psychic",img:'http://cdn.bulbagarden.net/upload/thumb/7/78/150Mewtwo.png/250px-150Mewtwo.png'},
	{name:"Articuno",id:3,type:"Ice , Flying",img:'http://cdn.bulbagarden.net/upload/thumb/4/4e/144Articuno.png/250px-144Articuno.png'},
	{name:"Charmander",id:4,type:"Fire",img:'http://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png'},
	{name:"Charmeleon",id:5,type:"Fire",img:'http://cdn.bulbagarden.net/upload/thumb/4/4a/005Charmeleon.png/250px-005Charmeleon.png'},
	{name:"Charizard",id:6,type:"Fire , Flying",img:'http://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png'},
	{name:"Pikachu",id:7,type:"Eletric",img:'http://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png'},
	{name:"Raichu",id:8,type:"Eletric",img:'http://cdn.bulbagarden.net/upload/thumb/8/88/026Raichu.png/250px-026Raichu.png'},
	{name:"Ponyta",id:9,type:"Fire",img:'http://cdn.bulbagarden.net/upload/thumb/3/3b/077Ponyta.png/250px-077Ponyta.png'},
	{name:"Rapidash",id:10,type:"Fire",img:'http://cdn.bulbagarden.net/upload/thumb/3/3f/078Rapidash.png/250px-078Rapidash.png'},
	{name:"Meowth",id:11,type:"Normal",img:'http://cdn.bulbagarden.net/upload/thumb/d/d6/052Meowth.png/250px-052Meowth.png'},
	{name:"Persian",id:12,type:"Normal",img:'http://cdn.bulbagarden.net/upload/thumb/1/13/053Persian.png/250px-053Persian.png'},
	{name:"Cubone",id:13,type:"Ground",img:'http://cdn.bulbagarden.net/upload/thumb/2/2a/104Cubone.png/250px-104Cubone.png'},
	{name:"marowak",id:14,type:"Ground",img:'http://cdn.bulbagarden.net/upload/thumb/9/98/105Marowak.png/250px-105Marowak.png'},
	{name:"Mr. Mime",id:15,type:"Psychic",img:'http://cdn.bulbagarden.net/upload/thumb/e/ec/122Mr._Mime.png/250px-122Mr._Mime.png'},
	{name:"Jynx",id:16,type:"Ice , Psychic",img:'http://cdn.bulbagarden.net/upload/thumb/7/7c/124Jynx.png/250px-124Jynx.png'},
	{name:"Tauros",id:17,type:"Normal",img:'http://cdn.bulbagarden.net/upload/thumb/b/b8/128Tauros.png/250px-128Tauros.png'},
	{name:"Magikarp",id:18,type:"Water",img:'http://cdn.bulbagarden.net/upload/thumb/0/02/129Magikarp.png/250px-129Magikarp.png'},
	{name:"Gyarados",id:19,type:"Water , Flying",img:'http://cdn.bulbagarden.net/upload/thumb/4/41/130Gyarados.png/250px-130Gyarados.png'},
	{name:"Ditto",id:20,type:"Normal",img:'http://cdn.bulbagarden.net/upload/thumb/3/36/132Ditto.png/250px-132Ditto.png'},
	{name:"Porygon",id:21,type:"Normal",img:'http://cdn.bulbagarden.net/upload/thumb/6/6b/137Porygon.png/250px-137Porygon.png'}, 
	{name:"Aerodactyl",id:22,type:"Rock , Flying",img:'http://cdn.bulbagarden.net/upload/thumb/e/e8/142Aerodactyl.png/250px-142Aerodactyl.png'},
	{name:"Zapdos",id:23,type:"Eletric , Flying",img:'http://cdn.bulbagarden.net/upload/thumb/e/e3/145Zapdos.png/250px-145Zapdos.png'},
	{name:"Moltres",id:24,type:"Fire , Flying",img:'http://cdn.bulbagarden.net/upload/thumb/1/1b/146Moltres.png/250px-146Moltres.png'},
	{name:"Dragonite",id:25,type:"Dragon , Flying",img:'http://cdn.bulbagarden.net/upload/thumb/8/8b/149Dragonite.png/250px-149Dragonite.png'}
	];
	$scope.next = function() {
		if($scope.indice == $scope.indice){
			for ($scope.indice > $scope.pokes.length; $scope.indice >= 24; $scope.indice--) {
			}
			$scope.indice++;
		}
	};
	$scope.prev = function() {
		if($scope.indice == $scope.indice){
			for ($scope.indice < $scope.pokes.length; $scope.indice <= 0; $scope.indice++) {
			}
			$scope.indice--;
		}
	};
}]);

