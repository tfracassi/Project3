function initMap() {
  var bridgestone = {lat: 36.159437, lng: -86.778551};
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