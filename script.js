// Page4 Google Maps Javascript
function initMap() {
  var bridgestone = {lat: 36.159190, lng: -86.778497};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: bridgestone
  });
  var marker = new google.maps.Marker({
    position: bridgestone,
    map: map
  });
  var infowindow = new google.maps.InfoWindow({
    content: 'Bridgestone Arena'
  });
  marker.addListener('click', function() {
		infowindow.open(map, marker);
	});
}

// Page2 Slider Javascript
var slideIndex = 1;
showSlides(slideIndex);
// Previous/Next controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Image controls
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
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}