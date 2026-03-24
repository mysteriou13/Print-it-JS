const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let nbimage = 0;

/*create list dot*/
function createDots() {
    let listdot = document.getElementById("dots");
    for (let a = 0; a < slides.length; a++) {
        let newDiv = document.createElement("div");
        newDiv.id = "dot"+a;
        newDiv.classList.add("dot");
        listdot.appendChild(newDiv);
    }
	document.getElementById("dot0").classList.add("dot_selected");
}

/*update css dots scrollling carousel*/
function selectDot(id) {
    for (let a = 0; a < slides.length; a++) {
        let dotelement = document.getElementById("dot"+a);
        if (a == id) {
            dotelement.classList.add("dot_selected");
            
        } else {
            dotelement.classList.remove("dot_selected"); 
    }
}
}
/*scrolling carrousel*/
function showSlide(direction) {

     switch(direction){
		case "right":
			nbimage++;
          break;

		  case 'left':
		  if(nbimage == 0){
           nbimage = 4;
		  }
		  nbimage--;
		  break;
	 }

    if(nbimage == slides.length){
    nbimage = 0
	}	

	let slideimage  = "./assets/images/slideshow/"+slides[nbimage].image
	 document.getElementById("imgslide").src=slideimage
	 
 selectDot(nbimage)

}

createDots()