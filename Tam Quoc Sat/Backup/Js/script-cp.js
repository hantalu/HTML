var textarea = 0;
var html = 0;
var html2 = 0;
var temptext = 0;
var temptextredo = 0;
var maxtemptext = 0;
var gamenamevar;
var gamenamevarIndex = 0;
var sectionno = 0;
var counth3 = -1;
var imgordinal = 0;
var videolinkordinal = 0;
var tempcopy;
var currentedittinghtml = 0;
var countwrapper = 0;

$(function() {
  $('textarea#froala-editor').froalaEditor()
});

function Closepopup(x){
	$('.Pop-up-wrapper')[x].setAttribute('style','visibility: hidden');
	$('#Confirmnewbightml' + x).remove();
	countwrapper = 0;
	
	document.getElementById('Finalized-preview').innerHTML = "";
}

function nameh3(a){
		counth3 ++;
	var x = $('.new-h3-name')[0].value;
	var x1 = $('.new-h3-name')[1].value;
	var content = $('.content')[0];

	content.innerHTML += '<h3 class="h3-show" onclick="Showh3content(' + "'" + counth3 + "'" + ')"><span class="h3-ordinal-show">' + counth3 + '</span>.' + ' ' + x + '</h3>';
	content.innerHTML += '<h3 class="h3-hide" onclick="Closeh3content(' + "'" + counth3 + "'" + ')"><span class="h3-ordinal-hide">' + counth3 + '</span>.' + ' ' + x + '</h3>';
	content.innerHTML += '<div class="h3-content"><div class="html-yes"><div class="h3-content-more"></div></div><div class="html-no"><textarea class="text-area-h3" id="text-area-h3' + counth3 + '"></textarea><div class="h3-button-post" id="post-button" onclick="Post(' + counth3 + ')">Post</div><div class="h3-button-addul" onclick="Addul(' + counth3 + ')">Add &lt ul &gt </div><div class="h3-button-addli" id="h3-button-addli" onclick="Addli(' + counth3 + ')">Add &lt li &gt </div><div class="h3-button-addh4" id="h3-button-addh4" onclick="Addh4(' + counth3 + ')">Add H4</div><div class="h3-button-addh5" id="h3-button-addh5" onclick="Addh5(' + counth3 + ')">Add H5</div><div class="h3-button-addbold" id="h3-button-bold" onclick="Addbold(' + counth3 + ')"><b>Bold</b></div><div class="h3-button-additalic" id="h3-button-italic" onclick="Additalic(' + counth3 + ')"><i>Italic</i></div><div class="h3-button-addunderline" id="h3-button-underline" onclick="Addunderline(' + counth3 + ')"><u>Underline</u></div><div class="h3-button-addimg" onclick="popupnameh3(' + counth3 + ',2)">Add IMG</div><div class="h3-button-video" onclick="popupnameh3(' + counth3 + ',5)">Video / Audio table</div><div class="h3-button-edithtml" onclick="popuphtmlh3(' + counth3 + ',4,' + "'" + x + "'" + ')">Edit HTML</div><div class="saved-name-h3">' + x + '</div>';
	
	$('.new-h3-name')[0].value = "";
	
	countwrapper = 0;
	downloadbg();
	document.getElementsByClassName('Pop-up-wrapper')[a].setAttribute('style','visibility: hidden');
	
}

function Recounth3(){
	if($('.h3-show').length == 0){
		counth3 = -1;
	}else{
	for( var y = 0; y <= $('.h3-show').length; y++){
		document.getElementsByClassName('h3-show')[y].setAttribute('onclick','Showh3content(' + y + ')');
		document.getElementsByClassName('h3-hide')[y].setAttribute('onclick','Closeh3content(' + y + ')');
		document.getElementsByClassName('h3-ordinal-show')[y].innerHTML = y;
		document.getElementsByClassName('h3-ordinal-hide')[y].innerHTML = y;
		document.getElementsByClassName('text-area-h3')[y].setAttribute('id','text-area-h3' + y);
		document.getElementsByClassName('h3-button-addli')[y].setAttribute('onclick','Addli(' + y + ')');
		document.getElementsByClassName('h3-button-addul')[y].setAttribute('onclick','Addul(' + y + ')');
		document.getElementsByClassName('h3-button-addbold')[y].setAttribute('onclick','Addbold(' + y + ')');
		document.getElementsByClassName('h3-button-additalic')[y].setAttribute('onclick','Additalic(' + y + ')');
		document.getElementsByClassName('h3-button-addunderline')[y].setAttribute('onclick','Addunderline(' + y + ')');
		document.getElementsByClassName('h3-button-video')[y].setAttribute('onclick','popupnameh3(' + y + ',5)');
		document.getElementsByClassName('h3-button-addh4')[y].setAttribute('onclick','Addh4(' + y + ')');
		document.getElementsByClassName('h3-button-addh5')[y].setAttribute('onclick','Addh5(' + y + ')');
		document.getElementsByClassName('h3-button-addimg')[y].setAttribute('onclick','popupnameh3(' + y + ',2)');
		document.getElementsByClassName('h3-button-post')[y].setAttribute('onclick','Post(' + y + ')');
		var loadnameh3 = document.getElementsByClassName('saved-name-h3')[y].innerHTML;
		document.getElementsByClassName('h3-button-edithtml')[y].setAttribute('onclick','popuphtmlh3(' + y + ',4,"' + loadnameh3 + '")');
		counth3 = y;
		}}
}

function deleteh3(a){
	var deletesection = $('.new-h3-name')[1].value;
	
	$('.Pop-up-wrapper')[a].setAttribute('style','visibility: hidden');
 	try{
		countwrapper = 0;
		$('.h3-show')[deletesection].remove();
		$('.h3-hide')[deletesection].remove();
		$('.h3-content')[deletesection].remove();
		Recounth3();
	}catch(ex){
		countwrapper = 0;
	}
	
	$('.new-h3-name')[1].value = "";
	downloadbg();		
}

function deletegameIndex(a){
	var x2 = $('.new-h3-name')[2].value;
	var x3 = $('.Game-content')[x2];
	
	$('.Pop-up-wrapper')[a].setAttribute('style','visibility: hidden');
 	
	x3.remove();
	downloadbgindex();		
}

function gamename(x){
	countwrapper = 0;
	var a = $('.new-h3-name')[4].value;
	gamenamevar = a;
	document.getElementById('Game-name-h2').innerHTML = a;
	$('.Pop-up-wrapper')[x].setAttribute('style','visibility: hidden');
	$('#tag-2-active').attr('style','display:inline-block');
	gamenametag();
	gamelogotag();
	document.getElementById('temp-memory-ahref-1').href = a + " - GD.html";
	document.getElementById('temp-memory-ahref-2').innerHTML = a + " - GD.html";
	document.getElementById('temp-memory-logo').innerHTML = a;
	document.getElementById('temp-memory-name').innerHTML = a;
	document.getElementById('temp-memory-name-h2').innerHTML = a;
	downloadbg();
}

function gamenametag(){
	document.getElementById('Game-name-tag').innerHTML = gamenamevar;
}

function gamelogotag(){
	var error = 'onerror="this.src=' + "'" + '../Imgs/Game logo/Demo-logo.png' + "'" + '"';
	document.getElementById('Game-logo-2').innerHTML = '<img src="../Imgs/Game logo/' + gamenamevar + '-logo.png" ' + error + ' />';
}

function gamenameIndex(a){
	var x = $('.new-h3-name')[4].value;
	var x2 = gamenamevarIndex;
	var contentIndex = $('.content-2')[0];
	contentIndex.innerHTML += '<div class="Game-content"><div class="Game-logo"><img src="../Imgs/Game logo/' + x + '-logo.png" /></div><span class="Game-name">' + x + '</span><div class = "Game-intro"></div><div id = "Game-intro-textarea-wrapper"><textarea class = "Game-intro-textarea" placeholder = "Please input short Game info (enter = </br>)"></textarea><div class="Index-button" onclick="ShowupdateIntro(' + x2 + ')">Update</div><div class="Index-button-post" onclick="PostIntro(' + x2 + ')">Post</div><div class="Index-button" onclick="HtmlIndexIntro(' + x2 + ')">Edit HTML</div><div class="Index-button" onclick="SaveHtmlIndexIntro(' + x2 + ')">Save</div><div style="clear:both"></div></div><h3>Features</h3><div class = "Game-feature"></div><div id = "Game-feature-textarea-wrapper"><textarea class = "Game-feature-textarea" placeholder = "Please input short Game feature (enter = </br>)"></textarea><div class="Index-button" onclick="ShowupdateFeature(' + x2 + ')">Update</div><div class="Index-button-post" onclick="PostFeature(' + x2 + ')">Post</div><div class="Index-button" onclick="HtmlIndexFeature(' + x2 + ')">Edit HTML</div><div class="Index-button" onclick="SaveHtmlIndexFeature(' + x2 + ')">Save</div><div style="clear:both"></div></div><a href="' + x + '.html"><div class="Doc-button">Check Logical Document</div></a><a href="' + x + ' - GD.html"><div class="Doc-button" id="Doc-button-edit">Edit Tool</div></a></div>';
	downloadbgindex();
	$('.Pop-up-wrapper')[a].setAttribute('style','visibility: hidden');
}

function ShowupdateIntro(x){
	document.getElementsByClassName('Game-intro-textarea')[x].setAttribute('style','display: block');
	document.getElementsByClassName('Index-button-post')[x].setAttribute('style','display: block');
}

function ShowupdateFeature(x){
	document.getElementsByClassName('Game-feature-textarea')[x].setAttribute('style','display: block');
	document.getElementsByClassName('Index-button-post')[x + 1].setAttribute('style','display: block');
}

function PostIntro(x){
	var Postcontent = $('.Game-intro-textarea')[x].value;
	if(Postcontent != ""){
	$('.Game-intro')[x].innerHTML += Postcontent + '</br>';
	$('.Game-intro-textarea')[x].value = "";
	}
	else{
	return false;}
	downloadbgindex();
}

function PostFeature(x){
	var Postcontent = $('.Game-feature-textarea')[x].value;
	if(Postcontent != ""){
	$('.Game-feature')[x].innerHTML += Postcontent + '</br>';
	$('.Game-feature-textarea')[x].value = "";
	}
	else{
	return false;}
	downloadbgindex();
}

function SaveHtmlIndexIntro(x){
	var Savecontent = $('.Game-intro-textarea')[x].value;
	if (Savecontent != ""){
	$('.Game-intro')[x].innerHTML = Savecontent + '</br>';	
	$('.Game-intro-textarea')[x].value = "";
	}
	else{
	return false;}
	downloadbgindex();
}

function SaveHtmlIndexFeature(x){
	var Savecontent = $('.Game-feature-textarea')[x].value;
	if (Savecontent != ""){
	$('.Game-feature')[x].innerHTML = Savecontent + '</br>';	
	$('.Game-feature-textarea')[x].value = "";
	}
	else{
	return false;}
	downloadbgindex();
}


function download(){
			if(document.getElementById('temp-memory-name-h2').innerHTML == 'Please create new game name'){
				alert('Please create a Game Name before saving or finalizing!')
				popupnameh3(0,3);
			}else{
			var a = document.body.appendChild(
				document.createElement("a")
			);
			var b = document.getElementById('Game-name-h2').innerHTML;
			alert('Your Temp Document will be saved to local, please replace the old one in the source folder to make changes');
			a.download = b + " - GD.html";

			var c3 = document.getElementById("main").innerHTML;
			
			a.href = "data:text/html," + c3;
			a.click();
			}

}

function download2(){
	document.getElementById('temp-memory-ahref-2').innerHTML = gamenamevar + ".html";
			if(document.getElementById('temp-memory-name-h2').innerHTML == 'Please create new game name'){
				alert('Please create a Game Name before saving or finalizing!');
				popupnameh3(0,3);
			}else{
			var a = document.body.appendChild(
				document.createElement("a")
			);
			var b = document.getElementById('Game-name-h2').innerHTML;
			alert('Your Finalized Document will be saved to local, please replace the old one in the source folder to make changes');
			a.download = b + ".html";
 			var c2 = '<div class="Theme"><div class="Theme-items" onclick="Darktheme();">Dark Theme</div><div class="Theme-items" onclick="Lighttheme();">Light Theme</div></div><a href="" id="temp-memory-ahref-1"><span id="tag-2-active"><div id="Game-logo-2"><img src="../Imgs/Game logo/Demo-logo.png" /></div><div id="Game-name-tag"></div></span></a>';
			var c3 = document.getElementById("main").innerHTML;
			var c4 = '<div class="wrapper" id="main">';
			var c5 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>Untitled Document</title><link href="../Css/Subpages.css" rel="stylesheet" type="text/css" /><script type="text/javascript" src="../Js/jquery-3.2.1.js"></script></head><body>';
			var c6 = "</body></html>";
			var c7 = "</div><script>try{LoadImglink();}catch(ex){Click();ClearViewer();Loadgamename();Hideall();Checktheme();}</script>";
			a.href = "data:text/html," + c5 + c2 + c4 + c3 + c7 + c6;
			a.click();
			}

}

function downloadindex(){
			var a = document.body.appendChild(
				document.createElement("a")
			);
			var b = $('h2')[0].innerHTML;
			alert('Your Temp Document will be saved to local, please replace the old one in the source folder to make changes');
			a.download = b + " - GD.html";
	
			var c3 = document.getElementById("main").innerHTML;
			
			a.href = "data:text/html," + c3;
			a.click();

}

function download2index(){
			var a = document.body.appendChild(
				document.createElement("a")
			);
			var b = $('h2')[0].innerHTML;
			alert('Your Finalized Document will be saved to local, please replace the old one in the source folder to make changes');
			a.download = b + ".html";
			
			var c3 = document.getElementById("main").innerHTML;
			var c4 = '<div class="wrapper" id="main">';
			var c5 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>Untitled Document</title><link href="../Css/Subpages.css" rel="stylesheet" type="text/css" /><script type="text/javascript" src="../Js/jquery-3.2.1.js"></script></head><body>';
			var c6 = "</body></html>";
			var c7 = "</div><script>ClearViewer();</script>";
			a.href = "data:text/html," + c5 + c4 + c3 + c7 + c6;
			a.click();

}

function downloadbg(){
var a = document.body.appendChild(
				document.createElement("a")
			);
			var b = document.getElementById('Game-name-h2').innerHTML;
			a.download = b + " - GD.html";
			var c3 = document.getElementById("main").innerHTML;
			
			a.href = "data:text/html," + c3;
			a.click();
}

function downloadbgindex(){
	var a = document.body.appendChild(
				document.createElement("a")
			);
			var b = $('h2')[0].innerHTML;
			a.download = b + " - GD.html";

			var c3 = document.getElementById("main").innerHTML;
			
			a.href = "data:text/html," + c3;
			a.click();

}

function popupnameh3(x,y){
	$('.Pop-up-wrapper')[y].setAttribute('style','visibility: visible');
	countwrapper = 1;
	textarea = x;	
	
}

function popuppreview(x,y){

	$('.Pop-up-wrapper')[y].setAttribute('style','visibility: visible');
	countwrapper = 1;
	textarea = x;	
	
	var c2 = '<a href="" id="temp-memory-ahref-1"><span id="tag-2-active"><div id="Game-logo-2"><img src="../Imgs/Game logo/Demo-logo.png" /></div><div id="Game-name-tag"></div></span></a>';
			var c3 = document.getElementById("main").innerHTML;
			var c4 = '<div class="wrapper" id="main">';
			var c5 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>Untitled Document</title><link href="../Css/Subpages.css" rel="stylesheet" type="text/css" /><script type="text/javascript" src="../Js/jquery-3.2.1.js"></script></head><body>';
			var c6 = "</body></html>";
	
	document.getElementById('Finalized-preview').innerHTML = c5 + c2 + c4 + c3 + c6;
	
	Hideall();
	Loadgamename();
	ClearViewerPreview();
	
}


function disableF5(e) { if ((e.which || e.keyCode) == 116) e.preventDefault(); }

$(document).bind("keydown", disableF5);

$(document).on("keydown", disableF5);

/*winddow.onbeforeunload = confirmExit;
    function confirmExit() {
        return "You have attempted to leave this page. Are you sure?";
}*/

function Addmorerow(x){
	$('.text-area-h3')[x].style.height = "500px";
	document.getElementById('less-row-button').setAttribute('style','display: block');
	document.getElementById('more-row-button').setAttribute('style','display: none');
}

function Nomorerow(x){
	$('.text-area-h3')[x].style.height = "100px";
	document.getElementById('less-row-button').setAttribute('style','display: none');
	document.getElementById('more-row-button').setAttribute('style','display: block');
}

function Post(x){
	<!--if(maxtemptext <= 9){
	<!--maxtemptext ++;
	<!--}
	<!--$('.temp')[temptext].innerHTML = $('.h3-content-more')[x].innerHTML;
	<!--if(temptext < 10){ 
	<!--temptext ++;}
	<!--else{
	<!--temptext = 0;}
	var Postcontent = $('.text-area-h3')[x].value;
	if(Postcontent != ""){	
	$('.h3-content-more')[x].innerHTML += Postcontent + '</br>';
	<!--$('.temp-redo')[temptextredo].innerHTML = $('.h3-content-more')[x].innerHTML;-->
	<!--if(temptextredo < 10){ 
	<!--temptextredo ++;}
	<!--else{
	<!--temptextredo = 0;}
	$('.text-area-h3')[x].value = ""}
	<!--$('#undo-button').attr('style','display:block');
	<!--$('#redo-button').attr('style','display:block');
	<!--}
	else{
	return false;}
	Recount();
	downloadbg();
}

function addimg(b){
	var a = $('.new-h3-name')[2].value;
	var c = $('.new-h3-name')[3].value;
	$('.text-area-h3')[textarea].value += '<img class="Img" onclick="Zoom(' + "'" + imgordinal + "'" + ')" src="../Imgs/Game screen/' + a + '.png" onerror="this.src=' + "'" + '../Imgs/Source Img/fallback-img-2.png' + "'" + '"/><div class="Imglinksave" id="Imglinksave'+ imgordinal +'">' + '../Imgs/Game screen/' + a + '.png'  + '</div>';
	$('.text-area-h3')[textarea].value += '<span class="Img-note">' + c + '</span>'
	imgordinal++;
	document.getElementsByClassName('Pop-up-wrapper')[b].setAttribute('style','visibility: hidden');
}

function HtmlIndexIntro(x){
	var y = $('.Game-intro')[x].innerHTML;
	$('.Game-intro-textarea')[x].value = y;
}

function HtmlIndexFeature(x){
	var y = $('.Game-feature')[x].innerHTML;
	$('.Game-feature-textarea')[x].value = y;
}

function ClearGD(){
	var x = $('.Home-button')[0];
 	
	x.remove();		
}

function popuphtmlh3(x,y,z){
	if(x == 'big' && document.getElementById('temp-memory-name-h2').innerHTML != 'Please create new game name'){
		countwrapper = 1;
	$('.new-h3-name')[5].value = $('.wrapper')[0].innerHTML;
	$('.Pop-up-wrapper')[y].setAttribute('style','visibility: visible');
	document.getElementById('name-of-editting-html').innerHTML = z;
	document.getElementById('Confirmnewbightml').setAttribute('onclick','SaveHTMLbig("' + x + '",' + y + ');');
	RemovebuttonofEditor();
	}else if(x != 'big' && document.getElementById('temp-memory-name-h2').innerHTML != 'Please create new game name'){
		countwrapper = 1;
	$('.new-h3-name')[5].value = $('.h3-content-more')[x].innerHTML;
	$('.Pop-up-wrapper')[y].setAttribute('style','visibility: visible');
	document.getElementById('name-of-editting-html').innerHTML = "section '" + z + "'";
	document.getElementById('Confirmnewbightml').setAttribute('onclick','SaveHTMLbig(' + x + ',' + y + ');');
	currentedittinghtml = x;
	RemovebuttonofEditor();
	}else{
		alert("Please create a GAME NAME before editting HTML CODE!")
		popupnameh3(0,3);
	}

}

function SaveHTMLbig(x,y){
	if(x == 'big'){
		countwrapper = 0;
	$('.wrapper')[0].innerHTML = $('.new-h3-name')[5].value;
	$('.Pop-up-wrapper')[y].setAttribute('style','visibility: hidden');
	$('.new-h3-name')[5].value = "";
	Recount();
	downloadbg();
	}else{
		countwrapper = 0;
	$('.h3-content-more')[x].innerHTML = $('.new-h3-name')[5].value;
	$('.Pop-up-wrapper')[y].setAttribute('style','visibility: hidden');
	$('.new-h3-name')[5].value = "";
	Recount();
	downloadbg();}
}

function RemovebuttonofEditor(){
	$('.fr-placeholder').remove();$('.fr-view').remove();$('#bold-1').remove();$('#italic-1').remove();$('#underline-1').remove();$('#strikeThrough-1').remove();$('#subscript-1').remove();$('#superscript-1').remove();$('#fontFamily-1').remove();$('#fontSize-1').remove();$('#color-1').remove();$('#inlineStyle-1').remove();$('#paragraphStyle-1').remove();$('#paragraphFormat-1').remove();$('#dropdown-menu-fontFamily-1').remove();$('#dropdown-menu-fontSize-1').remove();$('#dropdown-menu-inlineStyle-1').remove();$('#dropdown-menu-paragraphStyle-1').remove();$('#dropdown-menu-paragraphFormat-1').remove();$('.fr-hs').remove();$('#align-1').remove();$('#dropdown-menu-align-1').remove();$('#formatOL-1').remove();$('#formatUL-1').remove();$('#outdent-1').remove();$('#indent-1').remove();$('#quote-1').remove();$('#dropdown-menu-quote-1').remove();$('#insertLink-1').remove();$('#insertImage-1').remove();$('#insertVideo-1').remove();$('#insertFile-1').remove();$('#insertTable-1').remove();$('#emoticons-1').remove();$('#specialCharacters-1').remove();$('#insertHR-1').remove();$('#selectAll-1').remove();$('#clearFormatting-1').remove();$('#print-1').remove();$('#spellChecker-1').remove();$('#help-1').remove();$('#undo-1').remove();$('#redo-1').remove();
	document.getElementById('html-1').setAttribute('onclick','Hideviewcodebtn();');
}

function Hideviewcodebtn(){
	$('#html-1').remove();
}

function Videotable(){
	var videolink = $('.new-h3-name')[7].value;	
	$('.text-area-h3')[textarea].value += '<table class="Table-videos"><tr><th>Case</th><th>Link</th><th>Name of the media</th></tr><tr><td>Normal spin</td><td><span class="video-link">' + videolink + '</span><img class="copy-button" onclick="Copyvideo(' + videolinkordinal + ')" src="../Imgs/Source Img/P-CopyIcon_0.1.png" ></td><td>Normal spin.mp4</td></tr></table>';
	videolinkordinal++;
	$('.Pop-up-wrapper')[5].setAttribute('style','visibility: hidden');
	$('.new-h3-name')[7].value = "";
}

function Recountimg(){
	for( var y = 0; y <= $('.Img').length; y++){
		document.getElementsByClassName('Img')[y].setAttribute('onclick','Zoom(' + y + ')');}
}

function Recountvideolink(){
	for( var y = 0; y <= $('.copy-button').length; y++){
		document.getElementsByClassName('copy-button')[y].setAttribute('onclick','Copyvideo(' + y + ')');}
}


function Recount(){
	try{
	Recountimg();
	}catch(ex){
		try{
		Recountvideolink();
		}catch(ex){
			try{
			Recounth3();
			}catch(ex){
				var sth = 0;}
		}
	}
}

function Hideblackcover(){
	document.getElementById('HTML-code-cover-2').setAttribute('style','height:0');
	document.getElementById('User-guide-btn-show').setAttribute('style','display:block');
	document.getElementById('User-guide-btn-hide').setAttribute('style','display:none');
}

function Showblackcover(){
	document.getElementById('HTML-code-cover-2').setAttribute('style','height:410px');
	document.getElementById('User-guide-btn-show').setAttribute('style','display:none');
	document.getElementById('User-guide-btn-hide').setAttribute('style','display:block');
}

/*function Countwrapper(){
	for(var x = 0; x <= 100)
	var element = document.getElementById('image_1'),
    style = window.getComputedStyle(element),
    top = style.getPropertyValue('top');
}*/

function ClearViewerPreview(){

	var x6 = $('#Finalized-preview .html-no');
	
	x6.remove();
	
}
