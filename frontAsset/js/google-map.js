$(document).ready( function(){

  var gmapDiv = $("#google-map");
  var gmapMarker = gmapDiv.attr("data-address");

  gmapDiv.gmap3({
    zoom: 16,
    address: gmapMarker,
    oomControl: true,
    navigationControl: true,
    scrollwheel: false,
    styles: [
      {
      "featureType":"all",
      "elementType":"all",
        "stylers":[
          { "saturation":"-50" }
        ]
    }]
  })
  .marker({
    address: gmapMarker,
    icon: "frontAsset/img/map_pin.png"
  })
  .infowindow({
    content: "I - House, Mondeal Retail Park, Besides Iscon mall, Iscon cross Road, s.g. highway, 380015, Ahmedabad"
  })
  .then(function (infowindow) {
    var map = this.get(0);
    var marker = this.get(1);
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  });
});