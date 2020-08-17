
// For The Toggle Mobile Menu
let navbarToggleBtn = document.querySelector('#navbar-toggle-button');
let menuItens = document.querySelector('#mobile-menu');

navbarToggleBtn.addEventListener('click', () => {
  console.log('clicked');
  // menuItens.style.display = 'none';
  menuItens.classList.toggle('active');
});

// ---------------------- For the slideshow ------------------------
var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active-dot";
}

// -------------------------- for Google Maps ---------------------
function initMap() {
  // The location of Uluru
  var uluru = {lat: -29.152303, lng: -51.200321};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 16, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}