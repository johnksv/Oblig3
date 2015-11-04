// document.getElementById("slider").style.width = document.getElementsByClassName("content")[0].offsetWidth+"px"; Settes til 100% i CSS
//document.getElementById("slidewrapper").style.width = (document.getElementsByClassName("content")[0].offsetWidth+4)*3+"px";
var x = 0;

function slide(){
	x++;
	document.getElementById("slidewrapper").style.left = "-"+x+"00%";
}
function backslide(){
	x--;
	document.getElementById("slidewrapper").style.left = "-"+x+"00%";
}
function prob(){
	x = 0;
	document.getElementById("slidewrapper").style.left = "-"+x+"00%";
}
function los(){
	x = 1;
	document.getElementById("slidewrapper").style.left = "-"+x+"00%";
}
function pers(){
	x =2;
	document.getElementById("slidewrapper").style.left = "-"+x+"00%";
}