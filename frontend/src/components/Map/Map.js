import React from 'react'

const Map = () => {
    let storeLatitude = 18.4654
    let storeLongitude = 17.586
    // if (userLatitude == "" && storeLongitude == "") {
    //     alert("Please allow to access your location");
    //     return false;
    // }
    var myLatlng = new window.google.maps.LatLng(storeLatitude, storeLongitude) // This is used to center the map to show our markers

    var mapOptions = {
        center: myLatlng,
        zoom: 8,
        marker: true
    };
    const renderMap = (
        <div id="map_canvas" class="map">

        </div>
    )
    var map = new window.google.maps.Map(renderMap, mapOptions);
    var start = new window.google.maps.LatLng(39.3995, storeLongitude);
    //var start = new window.google.maps.LatLng(39.3995, -76.9748);
    var end = new window.google.maps.LatLng(storeLatitude, storeLongitude);

    var directionsDisplay = new window.google.maps.DirectionsRenderer();// also, constructor can get "DirectionsRendererOptions" object
    directionsDisplay.setMap(map); // map should be already initialized.

    var request = {
        origin: start,
        destination: end,
        travelMode: window.google.maps.TravelMode.DRIVING
    };
    var directionsService = new window.google.maps.DirectionsService();
    directionsService.route(request, function (response, status) {
        if (status === window.google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
  return (
    <>
      {renderMap}
    </>
  )
}

export default Map