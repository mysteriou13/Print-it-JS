const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let nbImage = 0;

/*create list dot*/
function createDots() {
  let listdot = document.querySelector("#dots");
  for (let a = 0; a < slides.length; a++) {
    let newDiv = document.createElement("div");
    newDiv.id = "dot" + a;
    newDiv.classList.add("dot");
    listdot.appendChild(newDiv);
  }
  document.querySelector("#dot0").classList.add("dot_selected");
}

/*update css dots scrollling carousel*/
function selectDot(id) {
  for (let a = 0; a < slides.length; a++) {
    let dotelement = document.querySelector("#dot" + a);
    if (a == id) {
      dotelement.classList.add("dot_selected");
    } else {
      dotelement.classList.remove("dot_selected");
    }
  }
}
/*scrolling carrousel*/
function showSlide(direction) {
  switch (direction) {
    case "right":
      nbImage++;
      break;
    case "left":
      if (nbImage == 0) {
        nbImage = slides.length;
      }
      nbImage--;
      break;
  }

  if (nbImage == slides.length) {
    nbImage = 0;
  }

  let slideimage = "./assets/images/slideshow/" + slides[nbImage].image;
  document.querySelector("imgslide").src = slideimage;

  selectDot(nbImage);
}

createDots();
