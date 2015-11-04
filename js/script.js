// document.getElementById("slider").style.width = document.getElementsByClassName("content")[0].offsetWidth+"px"; Settes til 100% i CSS
//document.getElementById("slidewrapper").style.width = (document.getElementsByClassName("content")[0].offsetWidth+4)*3+"px";
var x=1;

function slide(){
	document.getElementById("slidewrapper").style.left = "-"+x+"00%";
		x++;
}