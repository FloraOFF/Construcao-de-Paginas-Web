/*let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}*/

$('.carousel').carousel({
  interval: 2000
})

document.getElementById('formulario').addEventListener("submit", function(e) {
  e.preventDefault()

  let select_input = document.getElementById("Categoria");

  let selected = select_input.value;

  if (selected == "A Ordem Paranormal") {
    /*alert("entrou aqui")*/
    window.location.href = "./A_Ordem_Paranormal.html"
  }

  if (selected == "O Segredo na Floresta") {
    /*alert("entrou aqui")*/
    window.location.href = "./O_Segredo_na_Floresta.html"
  }

  if (selected == "Desconjuração") {
    /*alert("entrou aqui")*/
    window.location.href = "./Desconjuracao.html"
  }

  if (selected == "Calamidade") {
    /*alert("entrou aqui")*/
    window.location.href = "./Calamidade.html"
  }

})

/*
function formPag () {
  var page = document.getElementById('submit');
  if (page === "A Ordem Paranormal") {
    window.location.href = "./A_Ordem_Paranormal.html";
  }

  if (page === "O Segredo na Floresta") {
    window.location.href = "./O_Segredo_na_Floresta.html";
  }

  if (page === "Desconjuração") {
    window.location.href = "./Desconjuracao.html";
  }

  if (page === "Calamidade") {
    window.location.href = "./Calamidade.html";
  }
}*/

