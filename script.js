
var slideIndex = 0;

function getdata(){
	var jsontbl = new XMLHttpRequest();
	jsontbl.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(jsontbl.responseText);
            createtags(myObj);	
            showSlides();        
        };		
    };
	 
jsontbl.open("GET","http://localhost/ahaadis/slide show/data.txt", true);
jsontbl.send();
}

function createtags(myObj) {

    for(i=0;i<myObj.length;i++){

        var sample ="<div class='mySlides fade'>"+
        "<img src='http://localhost/ahaadis/slide show/images/"+myObj[i].imgname+".jpg' style='width:100%'>"+
        "<div class='text'>"+myObj[i].tags+"</div></div>";       
        document.getElementById('images').innerHTML+=sample;
        document.getElementById('dots').innerHTML+="<span class='dot'></span>";
    }
};

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 secondsd
}
