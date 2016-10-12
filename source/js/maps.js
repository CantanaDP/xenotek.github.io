
function initGoogleMaps(){
    
    console.log('Загрузка google-карт');

    initMap = function () {
        var mapOptions = {
            disableDefaultUI: true,
            zoom: 11,
            center: new google.maps.LatLng(55.787433, 37.495374),
            styles: [{"featureType":"all","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#ff0000"}]},{"featureType":"all","elementType":"geometry","stylers":[{"saturation":"100"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"hue":"#ff0000"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape.natural.terrain","elementType":"labels.text.stroke","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#86a77a"},{"visibility":"on"}]}]
        };
        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(55.797631, 37.558982),
            zoom:8,
            map: map,
            title: 'Я!',
            icon: {
                url: "/assets/img/map_marker.svg",
                scaledSize: new google.maps.Size(43, 60)
            }
        });
    };

    var script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDijOXp2FZJSfRKEEXqJAvpt6aVHOa2lZw&callback=initMap";
    script.type="text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);
}


    


