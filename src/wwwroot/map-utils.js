var map = {};

var markers = { // https://github.com/nathan-muir/fontawesome-markers 
    "MICROPHONE": "M41.472-39.095v4.608q0 7.956-5.31 13.842t-13.122 6.75v4.752h9.216q.936 0 1.62.684t.684 1.62-.684 1.62-1.62.684h-23.04q-.936 0-1.62-.684t-.684-1.62.684-1.62 1.62-.684h9.216v-4.752q-7.812-.864-13.122-6.75t-5.31-13.842v-4.608q0-.936.684-1.62t1.62-.684 1.62.684.684 1.62v4.608q0 6.66 4.734 11.394t11.394 4.734 11.394-4.734 4.734-11.394v-4.608q0-.936.684-1.62t1.62-.684 1.62.684.684 1.62zm-9.216-13.824v18.432q0 4.752-3.384 8.136t-8.136 3.384-8.136-3.384-3.384-8.136v-18.432q0-4.752 3.384-8.136t8.136-3.384 8.136 3.384 3.384 8.136z",
    "VOLUME_UP": "M27.648-51.767v39.168q0 .936-.684 1.62t-1.62.684-1.62-.684l-11.988-11.988h-9.432q-.936 0-1.62-.684t-.684-1.62v-13.824q0-.936.684-1.62t1.62-.684h9.432l11.988-11.988q.684-.684 1.62-.684t1.62.684.684 1.62zm13.824 19.584q0 2.736-1.53 5.094t-4.05 3.366q-.36.18-.9.18-.936 0-1.62-.666t-.684-1.638q0-.756.432-1.278t1.044-.9 1.224-.828 1.044-1.278.432-2.052-.432-2.052-1.044-1.278-1.224-.828-1.044-.9-.432-1.278q0-.972.684-1.638t1.62-.666q.54 0 .9.18 2.52.972 4.05 3.348t1.53 5.112zm9.216 0q0 5.508-3.06 10.17t-8.1 6.786q-.468.18-.9.18-.972 0-1.656-.684t-.684-1.62q0-1.404 1.404-2.124 2.016-1.044 2.736-1.584 2.664-1.944 4.158-4.878t1.494-6.246-1.494-6.246-4.158-4.878q-.72-.54-2.736-1.584-1.404-.72-1.404-2.124 0-.936.684-1.62t1.62-.684q.468 0 .936.18 5.04 2.124 8.1 6.786t3.06 10.17zm9.216 0q0 8.28-4.572 15.21t-12.168 10.206q-.468.18-.936.18-.936 0-1.62-.684t-.684-1.62q0-1.296 1.404-2.124.252-.144.81-.378t.81-.378q1.656-.9 2.952-1.836 4.428-3.276 6.912-8.172t2.484-10.404-2.484-10.404-6.912-8.172q-1.296-.936-2.952-1.836-.252-.144-.81-.378t-.81-.378q-1.404-.828-1.404-2.124 0-.936.684-1.62t1.62-.684q.468 0 .936.18 7.596 3.276 12.168 10.206t4.572 15.21z",
    "FILM": "M13.824-6.839v-4.608q0-.936-.684-1.62t-1.62-.684h-4.608q-.936 0-1.62.684t-.684 1.62v4.608q0 .936.684 1.62t1.62.684h4.608q.936 0 1.62-.684t.684-1.62zm0-13.824v-4.608q0-.936-.684-1.62t-1.62-.684h-4.608q-.936 0-1.62.684t-.684 1.62v4.608q0 .936.684 1.62t1.62.684h4.608q.936 0 1.62-.684t.684-1.62zm0-13.824v-4.608q0-.936-.684-1.62t-1.62-.684h-4.608q-.936 0-1.62.684t-.684 1.62v4.608q0 .936.684 1.62t1.62.684h4.608q.936 0 1.62-.684t.684-1.62zm36.864 27.648v-18.432q0-.936-.684-1.62t-1.62-.684h-27.648q-.936 0-1.62.684t-.684 1.62v18.432q0 .936.684 1.62t1.62.684h27.648q.936 0 1.62-.684t.684-1.62zm-36.864-41.472v-4.608q0-.936-.684-1.62t-1.62-.684h-4.608q-.936 0-1.62.684t-.684 1.62v4.608q0 .936.684 1.62t1.62.684h4.608q.936 0 1.62-.684t.684-1.62zm50.688 41.472v-4.608q0-.936-.684-1.62t-1.62-.684h-4.608q-.936 0-1.62.684t-.684 1.62v4.608q0 .936.684 1.62t1.62.684h4.608q.936 0 1.62-.684t.684-1.62zm-13.824-27.648v-18.432q0-.936-.684-1.62t-1.62-.684h-27.648q-.936 0-1.62.684t-.684 1.62v18.432q0 .936.684 1.62t1.62.684h27.648q.936 0 1.62-.684t.684-1.62zm13.824 13.824v-4.608q0-.936-.684-1.62t-1.62-.684h-4.608q-.936 0-1.62.684t-.684 1.62v4.608q0 .936.684 1.62t1.62.684h4.608q.936 0 1.62-.684t.684-1.62zm0-13.824v-4.608q0-.936-.684-1.62t-1.62-.684h-4.608q-.936 0-1.62.684t-.684 1.62v4.608q0 .936.684 1.62t1.62.684h4.608q.936 0 1.62-.684t.684-1.62zm0-13.824v-4.608q0-.936-.684-1.62t-1.62-.684h-4.608q-.936 0-1.62.684t-.684 1.62v4.608q0 .936.684 1.62t1.62.684h4.608q.936 0 1.62-.684t.684-1.62zm4.608-5.76v48.384q0 2.376-1.692 4.068t-4.068 1.692h-57.6q-2.376 0-4.068-1.692t-1.692-4.068v-48.384q0-2.376 1.692-4.068t4.068-1.692h57.6q2.376 0 4.068 1.692t1.692 4.068z",
    "VIDEO_CAMERA": "M64.512-51.767v39.168q0 1.512-1.404 2.124-.468.18-.9.18-.972 0-1.62-.684l-14.508-14.508v5.976q0 4.284-3.042 7.326t-7.326 3.042h-25.344q-4.284 0-7.326-3.042t-3.042-7.326v-25.344q0-4.284 3.042-7.326t7.326-3.042h25.344q4.284 0 7.326 3.042t3.042 7.326v5.94l14.508-14.472q.648-.684 1.62-.684.432 0 .9.18 1.404.612 1.404 2.124z",
    "CAMERA": "M34.56-40.247q4.284 0 7.326 3.042t3.042 7.326-3.042 7.326-7.326 3.042-7.326-3.042-3.042-7.326 3.042-7.326 7.326-3.042zm25.344-14.976q3.816 0 6.516 2.7t2.7 6.516v32.256q0 3.816-2.7 6.516t-6.516 2.7h-50.688q-3.816 0-6.516-2.7t-2.7-6.516v-32.256q0-3.816 2.7-6.516t6.516-2.7h8.064l1.836-4.896q.684-1.764 2.502-3.042t3.726-1.278h18.432q1.908 0 3.726 1.278t2.502 3.042l1.836 4.896h8.064zm-25.344 41.472q6.66 0 11.394-4.734t4.734-11.394-4.734-11.394-11.394-4.734-11.394 4.734-4.734 11.394 4.734 11.394 11.394 4.734z",
    "PICTURE_O": "M23.04-43.703q0 2.88-2.016 4.896t-4.896 2.016-4.896-2.016-2.016-4.896 2.016-4.896 4.896-2.016 4.896 2.016 2.016 4.896zm36.864 13.824v16.128h-50.688v-6.912l11.52-11.52 5.76 5.76 18.432-18.432zm3.456-25.344h-57.6q-.468 0-.81.342t-.342.81v43.776q0 .468.342.81t.81.342h57.6q.468 0 .81-.342t.342-.81v-43.776q0-.468-.342-.81t-.81-.342zm5.76 1.152v43.776q0 2.376-1.692 4.068t-4.068 1.692h-57.6q-2.376 0-4.068-1.692t-1.692-4.068v-43.776q0-2.376 1.692-4.068t4.068-1.692h57.6q2.376 0 4.068 1.692t1.692 4.068z",
    "FILE_TEXT": "M52.848-47.303q.504.504 1.008 1.296h-16.992v-16.992q.792.504 1.296 1.008zm-17.136 5.904h19.584v38.016q0 1.44-1.008 2.448t-2.448 1.008h-48.384q-1.44 0-2.448-1.008t-1.008-2.448v-57.6q0-1.44 1.008-2.448t2.448-1.008h28.8v19.584q0 1.44 1.008 2.448t2.448 1.008zm5.76 26.496v-2.304q0-.504-.324-.828t-.828-.324h-25.344q-.504 0-.828.324t-.324.828v2.304q0 .504.324.828t.828.324h25.344q.504 0 .828-.324t.324-.828zm0-9.216v-2.304q0-.504-.324-.828t-.828-.324h-25.344q-.504 0-.828.324t-.324.828v2.304q0 .504.324.828t.828.324h25.344q.504 0 .828-.324t.324-.828zm0-9.216v-2.304q0-.504-.324-.828t-.828-.324h-25.344q-.504 0-.828.324t-.324.828v2.304q0 .504.324.828t.828.324h25.344q.504 0 .828-.324t.324-.828z",
    "FILE_TEXT_O": "M52.848-50.759q1.008 1.008 1.728 2.736t.72 3.168v41.472q0 1.44-1.008 2.448t-2.448 1.008h-48.384q-1.44 0-2.448-1.008t-1.008-2.448v-57.6q0-1.44 1.008-2.448t2.448-1.008h32.256q1.44 0 3.168.72t2.736 1.728zm-15.984-8.784v13.536h13.536q-.36-1.044-.792-1.476l-11.268-11.268q-.432-.432-1.476-.792zm13.824 55.008v-36.864h-14.976q-1.44 0-2.448-1.008t-1.008-2.448v-14.976h-27.648v55.296h46.08zm-36.864-31.104q0-.504.324-.828t.828-.324h25.344q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-25.344q-.504 0-.828-.324t-.324-.828v-2.304zm26.496 8.064q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-25.344q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h25.344zm0 9.216q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-25.344q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h25.344z",
    "COMMENT": "M64.512-32.183q0 6.264-4.32 11.574t-11.736 8.388-16.2 3.078q-2.52 0-5.22-.288-7.128 6.3-16.56 8.712-1.764.504-4.104.792-.612.072-1.098-.324t-.63-1.044v-.036q-.108-.144-.018-.432t.072-.36.162-.342l.216-.324.252-.306.288-.324q.252-.288 1.116-1.242t1.242-1.368 1.116-1.422 1.17-1.836.972-2.124.936-2.736q-5.652-3.204-8.91-7.92t-3.258-10.116q0-4.68 2.556-8.946t6.876-7.362 10.296-4.914 12.528-1.818q8.784 0 16.2 3.078t11.736 8.388 4.32 11.574z",
    "COMMENT_O": "M32.256-50.615q-7.344 0-13.734 2.502t-10.152 6.75-3.762 9.18q0 4.032 2.574 7.686t7.254 6.318l3.132 1.8-.972 3.456q-.864 3.276-2.52 6.192 5.472-2.268 9.9-6.156l1.548-1.368 2.052.216q2.484.288 4.68.288 7.344 0 13.734-2.502t10.152-6.75 3.762-9.18-3.762-9.18-10.152-6.75-13.734-2.502zm32.256 18.432q0 6.264-4.32 11.574t-11.736 8.388-16.2 3.078q-2.52 0-5.22-.288-7.128 6.3-16.56 8.712-1.764.504-4.104.792h-.18q-.54 0-.972-.378t-.576-.99v-.036q-.108-.144-.018-.432t.072-.36.162-.342l.216-.324.252-.306.288-.324q.252-.288 1.116-1.242t1.242-1.368 1.116-1.422 1.17-1.836.972-2.124.936-2.736q-5.652-3.204-8.91-7.92t-3.258-10.116q0-6.264 4.32-11.574t11.736-8.388 16.2-3.078 16.2 3.078 11.736 8.388 4.32 11.574z",
    "COMMENTING": "M23.04-32.183q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm13.824 0q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm13.824 0q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm13.824 0q0 6.264-4.32 11.574t-11.736 8.388-16.2 3.078q-3.96 0-7.596-.648-6.228 6.228-15.66 8.244-1.872.36-3.096.468-.432.036-.792-.216t-.468-.648q-.144-.54.72-1.332.18-.18.846-.774t.918-.846.846-.918.864-1.134.738-1.332.72-1.728.522-2.07.45-2.61q-5.256-3.24-8.262-7.794t-3.006-9.702q0-6.264 4.32-11.574t11.736-8.388 16.2-3.078 16.2 3.078 11.736 8.388 4.32 11.574z",
    "COMMENTING_O": "M23.04-32.183q0 1.908-1.35 3.258t-3.258 1.35-3.258-1.35-1.35-3.258 1.35-3.258 3.258-1.35 3.258 1.35 1.35 3.258zm13.824 0q0 1.908-1.35 3.258t-3.258 1.35-3.258-1.35-1.35-3.258 1.35-3.258 3.258-1.35 3.258 1.35 1.35 3.258zm13.824 0q0 1.908-1.35 3.258t-3.258 1.35-3.258-1.35-1.35-3.258 1.35-3.258 3.258-1.35 3.258 1.35 1.35 3.258zm-18.432-18.432q-7.344 0-13.734 2.502t-10.152 6.75-3.762 9.18q0 4.032 2.574 7.686t7.254 6.318l3.132 1.8-.972 3.456q-.864 3.276-2.52 6.192 5.472-2.268 9.9-6.156l1.548-1.368 2.052.216q2.484.288 4.68.288 7.344 0 13.734-2.502t10.152-6.75 3.762-9.18-3.762-9.18-10.152-6.75-13.734-2.502zm32.256 18.432q0 6.264-4.32 11.574t-11.736 8.388-16.2 3.078q-2.52 0-5.22-.288-7.128 6.3-16.56 8.712-1.764.504-4.104.792h-.18q-.54 0-.972-.378t-.576-.99v-.036q-.108-.144-.018-.432t.072-.36.162-.342l.216-.324.252-.306.288-.324q.252-.288 1.116-1.242t1.242-1.368 1.116-1.422 1.17-1.836.972-2.124.936-2.736q-5.652-3.204-8.91-7.92t-3.258-10.116q0-4.68 2.556-8.946t6.876-7.362 10.296-4.914 12.528-1.818 12.528 1.818 10.296 4.914 6.876 7.362 2.556 8.946z",
}

function showDistrictOverlay() {
    axios.get('district-high.json')
        .then(function (response) {
            var district = new google.maps.Polygon({
                map: map,
                paths: response.data,
                strokeColor: '#00F',
                strokeOpacity: 0.4,
                strokeWeight: 0.4,
                fillColor: '#00F',
                fillOpacity: 0.04,
                clickable: false
            });
            var bounds = new google.maps.LatLngBounds();
            response.data.forEach(function (point) {
                bounds.extend(point);
            }, this);
            map.fitBounds(bounds);
        });
}

function showRoute() {
    axios.get('route.json')
        .then(function (response) {
            response.data.forEach(function (day) {
                var info = new google.maps.InfoWindow({
                    content: "<h5>Day " + day.day + "</h5>"
                    + "<h6>" + day.date + "</h6>"
                    + day.description
                });
                var line = new google.maps.Polyline({
                    map: map,
                    strokeColor: day.color,
                    path: day.path
                });
                line.addListener('click', function (e) {
                    info.open(map, line);
                    info.setPosition(e.latLng, e.latLng);
                });
            });
        });
}

function showEvents() {
    axios.get('events.json')
        .then(function (response) {
            response.data.forEach(function (event) {
                var info = new google.maps.InfoWindow({
                    content: "<h5>" + event.title + "</h5>"
                    + "<h6>" + event.date + "</h6>"
                    + "<p>" + event.description + "</p>"
                    + "<iframe src=\"" + event.embedded_content + "\" frameborder=\"0\"></iframe>"
                });
                var marker = new google.maps.Marker({
                    map: map,
                    position: event.location,
                    title: event.title,
                    icon: { fillColor: 'blue' }
                });
                marker.addListener('click', function (e) {
                    info.open(map, marker);
                    info.setPosition(e.latLng, e.latLng);
                });
            });
        });
}

function updatePosition() {
    axios.get('ian.json')
        .then(function (response) {
            var position = response.data
            var marker = new google.maps.Marker({
                map: map,
                icon: {
                    url: "running-poi.png"
                },
                position: position.location,
                title: "Ian's location at " + location.time
            });
        });
}

function watchIan() {
    updatePosition();
    setInterval(updatePosition, 30000);
}

function showDrawingToolbox(snapToRoads) {
    var drawingManager = new google.maps.drawing.DrawingManager({
        map: map,
        drawingMode: google.maps.drawing.OverlayType.POLYLINE,
        drawingControl: false
    });
    google.maps.event.addListener(drawingManager, 'polylinecomplete', function (line) {
        if (snapToRoads) {
            var path = [];
            var waypoints = [];
            var linePath = line.getPath();
            for (n = 1; n < linePath.getLength() - 1; n++) {
                waypoints.push({ "location": linePath.getAt(n) });
            }
            directionsService.route({
                origin: linePath.getAt(0),
                destination: linePath.getAt(n),
                waypoints: waypoints,
                travelMode: google.maps.DirectionsTravelMode.WALKING
            }, function (result, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    for (var i = 0, len = result.routes[0].overview_path.length; i < len; i++) {
                        path.push(result.routes[0].overview_path[i]);
                    }
                }
                console.log(JSON.stringify(path));
                line.setPath(path);
            });
        } else {
            console.log(JSON.stringify(line.getPath().getArray()));
        }
    });
}

function initMap() {
    var drawing = false;
    var snapToRoads = false;

    var directionsService = new google.maps.DirectionsService();
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: { "lat": 42.6, "lng": -78.1 }
    });

    showDistrictOverlay();
    showRoute();
    showEvents();
    watchIan();

    if (drawing) {
        showDrawingToolbox(snapToRoads);
    }
}