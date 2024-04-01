window.onload = function() {
    mapboxgl.accessToken = 'pk.eyJ1IjoianJ3MDIzIiwiYSI6ImNrc3A5eWRyeTAwMnMydWxlNHh5dzRsZzkifQ.gS8gDrC-O5stM1SXROxeFw';
    var map = new mapboxgl.Map({
        container: 'map', // container ID in the HTML component
        style: 'mapbox://styles/mapbox/streets-v11', // Map style
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });
};
