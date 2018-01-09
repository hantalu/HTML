function Move1(){
	var startpos = -700;
	var despos = 850;
	var speed = 20;
	
	var x2 = startpos;
	setInterval(function(){
		for(var x = x2; x <= despos; x++){
		document.getElementById('SoF-big').setAttribute("style", "top:" + x + "px"); ++x2; if(x2 == despos){x2 = startpos}; break;}
		},speed)
}

function Move2a(){
	var startpos = -450;
	var despos = 1450;
	var speed = 20;
	
	var x2 = startpos;
	setInterval(function(){
		for(var x = x2; x <= despos; x++){
		document.getElementById('SoF-big1').setAttribute("style", "left:" + x + "px"); ++x2; if(x2 == despos){x2 = startpos}; break;}
		},speed)
}

function Move2b(){
	var startpos = -750;
	var despos = 1100;
	var speed = 20;
	
	var x2 = startpos;
	setInterval(function(){
		for(var x = x2; x <= despos; x++){
		document.getElementById('SoF-big2').setAttribute("style", "top:" + x + "px"); ++x2; if(x2 == despos){x2 = startpos}; break;}
		},speed)
}

function Move2c(){
	var startpos = -350;
	var despos = 1450;
	var speed = 20;
	
	var x2 = startpos;
	setInterval(function(){
		for(var x = x2; x <= despos; x++){
		document.getElementById('SoF-big3').setAttribute("style", "right:" + x + "px"); ++x2; if(x2 == despos){x2 = startpos}; break;}
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
	var countidDragonflyfish = 26;
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

function StartSwimmingFugufish(){
	var countidFugufish = 71;
	var countmaxFugufish = 59;
	var speedFugufish = 70;
	
	for( var a = 0; a <= countidFugufish; a ++ ){	
	var b = "Fugufishswim" + a + "();";
	document.getElementById('body').innerHTML += b;
	}
	
	for( var x = 0; x <= countidFugufish; x ++ ){	
	var y = "function Fugufishswim" + x + "(){var x2 = 0;setInterval(function(){for(var x = x2; x <= " + countmaxFugufish + "; x++){document.getElementById('Fugufish" + x + "').src = '../Imgs/Game screen/CaNocBoi_' + x + '.png'; ++x2; if(x2 == " + countmaxFugufish + "){x2 = 0}; break;}}," + speedFugufish + ")}";
	document.getElementById('body').innerHTML += y;
	}
}

function StartSwimmingClownfishb(){
	var countidClownfishb = 39;
	var countmaxClownfishb = 30;
	var speedClownfishb = 50;
	
	for( var a = 0; a <= countidClownfishb; a ++ ){	
	var b = "Clownfishbswim" + a + "();";
	document.getElementById('body').innerHTML += b;
	}
	
	for( var x = 0; x <= countidClownfishb; x ++ ){	
	var y = "function Clownfishbswim" + x + "(){var x2 = 0;setInterval(function(){for(var x = x2; x <= " + countmaxClownfishb + "; x++){document.getElementById('Clownfishb" + x + "').src = '../Imgs/Game screen/fish2_small_' + x + '.png'; ++x2; if(x2 == " + countmaxClownfishb + "){x2 = 0}; break;}}," + speedClownfishb + ")}";
	document.getElementById('body').innerHTML += y;
	}
}

function StartSwimmingRay(){
	var countidRay = 3;
	var countmaxRay = 60;
	var speedRay = 50;
	
	for( var a = 0; a <= countidRay; a ++ ){	
	var b = "Rayswim" + a + "();";
	document.getElementById('body').innerHTML += b;
	}
	
	for( var x = 0; x <= countidRay; x ++ ){	
	var y = "function Rayswim" + x + "(){var x2 = 0;setInterval(function(){for(var x = x2; x <= " + countmaxRay + "; x++){document.getElementById('Ray" + x + "').src = '../Imgs/Game screen/fish3_' + x + '.png'; ++x2; if(x2 == " + countmaxRay + "){x2 = 0}; break;}}," + speedRay + ")}";
	document.getElementById('body').innerHTML += y;
	}
}