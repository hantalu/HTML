function Move1(){
	var startpos = -700;
	var despos = 720;
	var speed = 20;
	
	var x2 = startpos;
	setInterval(function(){
		for(var x = x2; x <= despos; x++){
		document.getElementById('SoF-big').setAttribute("style", "top:" + x + "px"); ++x2; if(x2 == despos){x2 = startpos}; break;}
		},speed)
}

function StartSwimmingClownFish(){
	var countidClownfish = 89;
	var countmaxClownFish = 30;
	var speedClownFish = 50;
	
	for( var a = 0; a <= countidClownfish; a ++ ){	
	var b = "Clownfishswim" + a + "();";
	document.getElementById('body').innerHTML += b;
	}
	
	for( var x = 0; x <= countidClownfish; x ++ ){	
	var y = "function Clownfishswim" + x + "(){var x2 = 0;setInterval(function(){for(var x = x2; x <= " + countmaxClownFish + "; x++){document.getElementById('Clownfish" + x + "').src = '../Imgs/Game screen/fish2_small_' + x + '.png'; ++x2; if(x2 == " + countmaxClownFish + "){x2 = 0}; break;}}," + speedClownFish + ")}";
	document.getElementById('body').innerHTML += y;
	}
}

function StartSwimmingDragonflyFish(){
	var countidDragonflyfish = 27;
	var countmaxDragonflyFish = 18;
	var speedDragonflyFish = 100;
	
	for( var a = 0; a <= countidDragonflyfish; a ++ ){	
	var b = "Dragonflyfishswim" + a + "();";
	document.getElementById('body').innerHTML += b;
	}
	
	for( var x = 0; x <= countidDragonflyfish; x ++ ){	
	var y = "function Dragonflyfishswim" + x + "(){var x2 = 0;setInterval(function(){for(var x = x2; x <= " + countmaxDragonflyFish + "; x++){document.getElementById('Dragonflyfish" + x + "').src = '../Imgs/Game screen/cachuon_' + x + '.png'; ++x2; if(x2 == " + countmaxDragonflyFish + "){x2 = 0}; break;}}," + speedDragonflyFish + ")}";
	document.getElementById('body').innerHTML += y;
	}
}

function StartSwimmingBlueshark(){
	var countidBlueshark = 1;
	var countmaxBlueshark = 70;
	var speedBlueshark = 20;
	
	for( var a = 0; a <= countidBlueshark; a ++ ){	
	var b = "Bluesharkswim" + a + "();";
	document.getElementById('body').innerHTML += b;
	}
	
	for( var x = 0; x <= countidBlueshark; x ++ ){	
	var y = "function Bluesharkswim" + x + "(){var x2 = 0;setInterval(function(){for(var x = x2; x <= " + countmaxBlueshark + "; x++){document.getElementById('Blueshark" + x + "').src = '../Imgs/Game screen/shark_' + x + '.png'; ++x2; if(x2 == " + countmaxBlueshark + "){x2 = 0}; break;}}," + speedBlueshark + ")}";
	document.getElementById('body').innerHTML += y;
	}
}

function StartSwimmingGoldenshark(){
	var countidGoldenshark = 1;
	var countmaxGoldenshark = 79;
	var speedGoldenshark = 20;
	
	for( var a = 0; a <= countidGoldenshark; a ++ ){	
	var b = "Goldensharkswim" + a + "();";
	document.getElementById('body').innerHTML += b;
	}
	
	for( var x = 0; x <= countidGoldenshark; x ++ ){	
	var y = "function Goldensharkswim" + x + "(){var x2 = 0;setInterval(function(){for(var x = x2; x <= " + countmaxGoldenshark + "; x++){document.getElementById('Goldenshark" + x + "').src = '../Imgs/Game screen/Cavoivang_' + x + '.png'; ++x2; if(x2 == " + countmaxGoldenshark + "){x2 = 0}; break;}}," + speedGoldenshark + ")}";
	document.getElementById('body').innerHTML += y;
	}
}