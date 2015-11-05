var x = 0;

function slideTo(a){
	document.getElementsByTagName("nav")[0].children[x].classList.remove("activeSlide");
	if(a==0||a==1||a==2){
		//Side 1, Side 2, Slide 3
		x=a;
	}else if (a== -1){
		//En tilbake
		x--;
	}

	document.getElementById("slidewrapper").style.left = "-"+x+"00%";
	document.getElementsByTagName("nav")[0].children[x].classList.add("activeSlide");
}

function setStyle(){
	document.getElementsByTagName("nav")[0].children[x].classList.add("activeSlide");
}


//Gustav sitt forslag til piltaster
window.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
        case 37: // Left
            if(x>0){
            	var temp = x-1;
            	slideTo(temp);
            }
            break;

        case 39: // Right
        	if(x<2){
        		var temp = x+1;
        		slideTo(temp);
        	}
            break;
    }
}, false);