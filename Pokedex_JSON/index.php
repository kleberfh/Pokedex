<DOCTYPE html>
	<html>
		<head>
		
			<title>Pokedex</title>
			<link href="pokedex.css" rel="stylesheet" type="text/css">
			<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
			<script>
				var p = 0;
				var i = 1;
				var k = '00';
				$(document).ready(function() {

					$.getJSON("pokemon.json", function(data){
						
						$('.pokesimg').html("<img src='" + k + i + data[i].name + ".png" + "' style='" + "width:250px;height:250px;" + "'/>");
						$('.pokesinf').html('<h2> ID:'+ i +'<h3> Name:' + data[i].name + '<h4> Type:' + data[i].type);
						
						$('.btn-success').click(function(){
							if(i == i){
								for (i == i; i > 150; i--) {
								}
								i++
									if(i > 9) {
										k = '0'
										if(i > 99){
											k=''
										}
									}
							}
						$('.pokesimg').html("<img src='" + k + i + data[i].name + ".png" + "' style='" + "width:250px;height:250px;" + "'/>");
						$('.pokesinf').html('<h2> ID:'+ i +'<h3> Name:' + data[i].name + '<h4> Type:' + data[i].type);
						// console.log(i);
						});
						$('.btn-primary').click(function(){
							if(i == i){
								for (i == i; i < 2; i++) {
								}
								i--			
								if(i < 10) {
									k = '00'						
								}else if(i < 100) {
									k = '0'
								}
							}
						$('.pokesimg').html("<img src='" + k + i + data[i].name + ".png" + "' style='" + "width:250px;height:250px;" + "'/>");
						$('.pokesinf').html('<h2> ID:'+ i +'<h3> Name:' + data[i].name + '<h4> Type:' + data[i].type);
						// console.log(i);
						});
					});
				});
			</script>
		</head>
		<body>
			<div class="main container">
				<div class="row">
				  <div class="col-sm-6 col-md-4 col-md-offset-4">
				    <div class="thumbnail" id="dx">
				  	<img src="http://cdn.bulbagarden.net/upload/thumb/4/4b/Pok%C3%A9dex_logo.png/250px-Pok%C3%A9dex_logo.png"/>
						<div class="screen">
								<div class='pokesimg'></div>	
							</div>
				      <div class="caption">	
				      <div class="inf">
				      	<div class='pokesinf'></div>
				      </div>
						<nav aria-label="...">
						  <ul class="pager">
						    <li><button class="btn-primary" id="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></button></li>
						    <li><button class="btn-success" id="prox"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></button></li>
						  </ul>
						</nav>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		</body>
	</html>	