﻿  var map;

  function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
          center: {
              lat: 46.483,
              lng: 49.43
          },
          zoom: 2,
          styles: [{
                  "featureType": "administrative.province",
                  "elementType": "geometry.stroke",
                  "stylers": [{
                      "visibility": "off"
                  }]
              }, {
                  "featureType": "administrative.province",
                  "elementType": "labels",
                  "stylers": [{
                      "visibility": "off"
                  }]
              }, {
                  "featureType": "poi",
                  "elementType": "geometry.fill",
                  "stylers": [{
                      "color": "#c5e3bf"
                  }]
              }, {
                  "featureType": "road",
                  "elementType": "geometry",
                  "stylers": [{
                      "lightness": 100
                  }, {
                      "visibility": "simplified"
                  }]
              }, {
                  "featureType": "road",
                  "elementType": "geometry.fill",
                  "stylers": [{
                      "color": "#D1D1B8"
                  }]
              }, {
                  "featureType": "road.highway",
                  "elementType": "labels",
                  "stylers": [{
                      "visibility": "off"
                  }]
              }, {
                  "featureType": "road.arterial",
                  "elementType": "labels",
                  "stylers": [{
                      "visibility": "off"
                  }]
              }, {
                  "featureType": "transit",
                  "elementType": "geometry.fill",
                  "stylers": [{
                      "visibility": "off"
                  }]
              }, {
                  "featureType": "water",
                  "elementType": "geometry",
                  "stylers": [{
                      "visibility": "on"
                  }, {
                      "color": "#4c6455"
                  }]
              }, {
                  "featureType": "water",
                  "elementType": "labels.text.fill",
                  "stylers": [{
                      "color": "#e9e9e9"
                  }, {
                      "visibility": "on"
                  }]
              }, {
                  "featureType": "water",
                  "elementType": "labels.text.stroke",
                  "stylers": [{
                      "invert_lightness": true
                  }, {
                      "lightness": "-100"
                  }]
              }, {
                  elementType: 'geometry',
                  stylers: [{
                      color: '#2D3035'
                  }]
              },
              {
                  elementType: 'labels.text.stroke',
                  stylers: [{
                      color: '#242f3e'
                  }]
              },
              {
                  elementType: 'labels.text.fill',
                  stylers: [{
                      color: '#746855'
                  }]
              },

              {
                  featureType: 'road',
                  elementType: 'geometry',
                  stylers: [{
                      color: '#2D3035'
                  }]
              },
              {
                  featureType: 'road',
                  elementType: 'geometry.stroke',
                  stylers: [{
                      color: '#2D3035'
                  }]
              },
              {
                  featureType: 'road',
                  elementType: 'labels.text.fill',
                  stylers: [{
                      color: '#9ca5b3'
                  }]
              },
              {
                  featureType: 'road.highway',
                  elementType: 'geometry',
                  stylers: [{
                      color: '#746855'
                  }]
              },
              {
                  featureType: 'road.highway',
                  elementType: 'geometry.stroke',
                  stylers: [{
                      color: '#1f2835'
                  }]
              },
              {
                  featureType: 'road.highway',
                  elementType: 'labels.text.fill',
                  stylers: [{
                      color: '#f3d19c'
                  }]
              },

              {
                  featureType: 'water',
                  elementType: 'geometry',
                  stylers: [{
                      color: '#22252A'
                  }]
              },
              {
                  featureType: 'water',
                  elementType: 'labels.text.fill',
                  stylers: [{
                      color: '#515c6d'
                  }]
              },
              {
                  featureType: 'water',
                  elementType: 'labels.text.stroke',
                  stylers: [{
                      color: '#22252A'
                  }]
              },
          ]

      });
      var data = `[
                                            {
                                                "latitude": 46.485,
                                                "longitude": 49.417,
                                                "acq_date": 20181013,
                                                "acq_time": 2255,
                                                "brightness": 317.8,
                                                "daynight": "N",
                                                "bright_t31": 277.4,
                                                "version": "6.0NRT",
                                                "instrument": "MODIS",
                                                "frp": 19.8,
                                                "confidence": 76,
                                                "scan": 1,
                                                "track": 1,
                                                "satellite": "Hana"
                                            },
                                            {
                                                "latitude": 46.494,
                                                "longitude": 49.364,
                                                "acq_date": 20181013,
                                                "acq_time": 2255,
                                                "brightness": 324.3,
                                                "daynight": "N",
                                                "bright_t31": 277.4,
                                                "version": "6.0NRT",
                                                "instrument": "MODIS",
                                                "frp": 28,
                                                "confidence": 88,
                                                "scan": 1,
                                                "track": 1,
                                                "satellite": "Toka"
                                            }, {
                                                "latitude": 46.4854,
                                                "longitude": 49.1564,
                                                "acq_date": 20181013,
                                                "acq_time": 2255,
                                                "brightness": 317.8,
                                                "daynight": "N",
                                                "bright_t31": 277.4,
                                                "version": "6.0NRT",
                                                "instrument": "MODIS",
                                                "frp": 19.8,
                                                "confidence": 76,
                                                "scan": 1,
                                                "track": 1,
                                                "satellite": "Hana"
                                            }, {
                                                "latitude": 46.49679,
                                                "longitude": 49.1956,
                                                "acq_date": 20181013,
                                                "acq_time": 2255,
                                                "brightness": 317.8,
                                                "daynight": "N",
                                                "bright_t31": 277.4,
                                                "version": "6.0NRT",
                                                "instrument": "MODIS",
                                                "frp": 19.8,
                                                "confidence": 76,
                                                "scan": 1,
                                                "track": 1,
                                                "satellite": "Hana"
                                            }, {
                                                "latitude": 46.47679,
                                                "longitude": 49.3956,
                                                "acq_date": 20181013,
                                                "acq_time": 2255,
                                                "brightness": 317.8,
                                                "daynight": "N",
                                                "bright_t31": 277.4,
                                                "version": "6.0NRT",
                                                "instrument": "MODIS",
                                                "frp": 19.8,
                                                "confidence": 90,
                                                "scan": 1,
                                                "track": 1,
                                                "satellite": "Hana"
                                            },
                                            {
                        "latitude": 13.637,
                        "longitude": 40.796,
                        "acq_date": 20181013,
                        "acq_time": 2305,
                        "brightness": 342.3,
                        "daynight": "N",
                        "bright_t31": 310.7,
                        "version": "6.0NRT",
                        "instrument": "MODIS",
                        "frp": 49.3,
                        "confidence": 100,
                        "scan": 1.1,
                        "track": 1,
                        "satellite": "Aqua"
                    },
                    {
                        "latitude": 19.002,
                        "longitude": 23.028,
                        "acq_date": 20181013,
                        "acq_time": 2315,
                        "brightness": 314,
                        "daynight": "N",
                        "bright_t31": 291.2,
                        "version": "6.0NRT",
                        "instrument": "MODIS",
                        "frp": 65.1,
                        "confidence": 88,
                        "scan": 3,
                        "track": 1.7,
                        "satellite": "Aqua"
                    },
                    {
                        "latitude": 18.996,
                        "longitude": 22.999,
                        "acq_date": 20181013,
                        "acq_time": 2315,
                        "brightness": 301.3,
                        "daynight": "N",
                        "bright_t31": 291.2,
                        "version": "6.0NRT",
                        "instrument": "MODIS",
                        "frp": 22.6,
                        "confidence": 40,
                        "scan": 3,
                        "track": 1.7,
                        "satellite": "Aqua"
                    },
                    {
                        "latitude": 19.005,
                        "longitude": 23.035,
                        "acq_date": 20181013,
                        "acq_time": 2315,
                        "brightness": 307.1,
                        "daynight": "N",
                        "bright_t31": 290.4,
                        "version": "6.0NRT",
                        "instrument": "MODIS",
                        "frp": 40.1,
                        "confidence": 70,
                        "scan": 3,
                        "track": 1.7,
                        "satellite": "Aqua"
                    },
                    {
                        "latitude": 18.999,
                        "longitude": 23.007,
                        "acq_date": 20181013,
                        "acq_time": 2315,
                        "brightness": 308.5,
                        "daynight": "N",
                        "bright_t31": 291.6,
                        "version": "6.0NRT",
                        "instrument": "MODIS",
                        "frp": 44.8,
                        "confidence": 75,
                        "scan": 3,
                        "track": 1.7,
                        "satellite": "Aqua"
                    },
                    {
                        "latitude": 19.985,
                        "longitude": 30.934,
                        "acq_date": 20181013,
                        "acq_time": 2315,
                        "brightness": 302.5,
                        "daynight": "N",
                        "bright_t31": 288.9,
                        "version": "6.0NRT",
                        "instrument": "MODIS",
                        "frp": 6,
                        "confidence": 49,
                        "scan": 1,
                        "track": 1,
                        "satellite": "Aqua"
                    },
                    {
                        "latitude": 19.347,
                        "longitude": 27.945,
                        "acq_date": 20181013,
                        "acq_time": 2315,
                        "brightness": 304.3,
                        "daynight": "N",
                        "bright_t31": 291,
                        "version": "6.0NRT",
                        "instrument": "MODIS",
                        "frp": 8.1,
                        "confidence": 59,
                        "scan": 1.3,
                        "track": 1.1,
                        "satellite": "Aqua"
                    },
                    {
                        "latitude": 19.339,
                        "longitude": 27.94,
                        "acq_date": 20181013,
                        "acq_time": 2315,
                        "brightness": 305.1,
                        "daynight": "N",
                        "bright_t31": 291.4,
                        "version": "6.0NRT",
                        "instrument": "MODIS",
                        "frp": 8.9,
                        "confidence": 63,
                        "scan": 1.3,
                        "track": 1.1,
                        "satellite": "Aqua"
                    },
                    {
                        "latitude": 18.967,
                        "longitude": 35.12,
                        "acq_date": 20181013,
                        "acq_time": 2315,
                        "brightness": 304.4,
                        "daynight": "N",
                        "bright_t31": 292.9,
                        "version": "6.0NRT",
                        "instrument": "MODIS",
                        "frp": 8.8,
                        "confidence": 60,
                        "scan": 1.3,
                        "track": 1.1,
                        "satellite": "Aqua"
                    },
                    {
                        "latitude": 17.936,
                        "longitude": 30.307,
                        "acq_date": 20181013,
                        "acq_time": 2315,
                        "brightness": 311.4,
                        "daynight": "N",
                        "bright_t31": 290,
                        "version": "6.0NRT",
                        "instrument": "MODIS",
                        "frp": 12.5,
                        "confidence": 82,
                        "scan": 1.1,
                        "track": 1,
                        "satellite": "Aqua"
                    },
                    {
                        "latitude": 17.69,
                        "longitude": 30.622,
                        "acq_date": 20181013,
                        "acq_time": 2315,
                        "brightness": 311.8,
                        "daynight": "N",
                        "bright_t31": 287.3,
                        "version": "6.0NRT",
                        "instrument": "MODIS",
                        "frp": 13.6,
                        "confidence": 83,
                        "scan": 1,
                        "track": 1,
                        "satellite": "Aqua"
                    },
                    {
                        "latitude": 17.09,
                        "longitude": 29.102,
                        "acq_date": 20181013,
                        "acq_time": 2315,
                        "brightness": 304.6,
                        "daynight": "N",
                        "bright_t31": 293.4,
                        "version": "6.0NRT",
                        "instrument": "MODIS",
                        "frp": 7,
                        "confidence": 61,
                        "scan": 1.2,
                        "track": 1.1,
                        "satellite": "Aqua"
                    },
                    {
                        "latitude": 16.82,
                        "longitude": 29.467,
                        "acq_date": 20181013,
                        "acq_time": 2315,
                        "brightness": 301.7,
                        "daynight": "N",
                        "bright_t31": 291.2,
                        "version": "6.0NRT",
                        "instrument": "MODIS",
                        "frp": 6.2,
                        "confidence": 43,
                        "scan": 1.2,
                        "track": 1.1,
                        "satellite": "Aqua"
                    },
                    {
                        "latitude": 16.794,
                        "longitude": 29.367,
                        "acq_date": 20181013,
                        "acq_time": 2315,
                        "brightness": 308.1,
                        "daynight": "N",
                        "bright_t31": 292.5,
                        "version": "6.0NRT",
                        "instrument": "MODIS",
                        "frp": 10.9,
                        "confidence": 74,
                        "scan": 1.2,
                        "track": 1.1,
                        "satellite": "Aqua"
                    },
                    {
                        "latitude": 17.127,
                        "longitude": 33.228,
                        "acq_date": 20181013,
                        "acq_time": 2315,
                        "brightness": 317.5,
                        "daynight": "N",
                        "bright_t31": 293.7,
                        "version": "6.0NRT",
                        "instrument": "MODIS",
                        "frp": 15.7,
                        "confidence": 95,
                        "scan": 1,
                        "track": 1,
                        "satellite": "Aqua"
                    },
                    {
                        "latitude": 16.535,
                        "longitude": 29.911,
                        "acq_date": 20181013,
                        "acq_time": 2315,
                        "brightness": 304.3,
                        "daynight": "N",
                        "bright_t31": 292.9,
                        "version": "6.0NRT",
                        "instrument": "MODIS",
                        "frp": 6.9,
                        "confidence": 59,
                        "scan": 1.1,
                        "track": 1.1,
                        "satellite": "Aqua"
                    },
                    {
                        "latitude": 16.533,
                        "longitude": 29.901,
                        "acq_date": 20181013,
                        "acq_time": 2315,
                        "brightness": 306.4,
                        "daynight": "N",
                        "bright_t31": 292.4,
                        "version": "6.0NRT",
                        "instrument": "MODIS",
                        "frp": 8.7,
                        "confidence": 68,
                        "scan": 1.1,
                        "track": 1.1,
                        "satellite": "Aqua"
                    },
                    {
                        "latitude": 16.531,
                        "longitude": 29.908,
                        "acq_date": 20181013,
                        "acq_time": 2315,
                        "brightness": 313.3,
                        "daynight": "N",
                        "bright_t31": 293.1,
                        "version": "6.0NRT",
                        "instrument": "MODIS",
                        "frp": 13.7,
                        "confidence": 87,
                        "scan": 1.1,
                        "track": 1.1,
                        "satellite": "Aqua"
                    },
                    {
                        "latitude": 16.511,
                        "longitude": 29.965,
                        "acq_date": 20181013,
                        "acq_time": 2315,
                        "brightness": 305,
                        "daynight": "N",
                        "bright_t31": 294.3,
                        "version": "6.0NRT",
                        "instrument": "MODIS",
                        "frp": 6.7,
                        "confidence": 62,
                        "scan": 1.1,
                        "track": 1.1,
                        "satellite": "Aqua"
                    },
                    {
                        "latitude": 16.479,
                        "longitude": 30.234,
                        "acq_date": 20181013,
                        "acq_time": 2315,
                        "brightness": 304.2,
                        "daynight": "N",
                        "bright_t31": 292.7,
                        "version": "6.0NRT",
                        "instrument": "MODIS",
                        "frp": 6.3,
                        "confidence": 59,
                        "scan": 1.1,
                        "track": 1,
                        "satellite": "Aqua"
                    },
                    {
                        "latitude": 16.264,
                        "longitude": 29.448,
                        "acq_date": 20181013,
                        "acq_time": 2315,
                        "brightness": 321,
                        "daynight": "N",
                        "bright_t31": 296.1,
                        "version": "6.0NRT",
                        "instrument": "MODIS",
                        "frp": 20.2,
                        "confidence": 100,
                        "scan": 1.2,
                        "track": 1.1,
                        "satellite": "Aqua"
                    },
                    {
                        "latitude": 16.263,
                        "longitude": 29.437,
                        "acq_date": 20181013,
                        "acq_time": 2315,
                        "brightness": 326.1,
                        "daynight": "N",
                        "bright_t31": 296.6,
                        "version": "6.0NRT",
                        "instrument": "MODIS",
                        "frp": 27.9,
                        "confidence": 100,
                        "scan": 1.2,
                        "track": 1.1,
                        "satellite": "Aqua"
                    },
                    {
                        "latitude": 16.261,
                        "longitude": 29.426,
                        "acq_date": 20181013,
                        "acq_time": 2315,
                        "brightness": 307.6,
                        "daynight": "N",
                        "bright_t31": 294.9,
                        "version": "6.0NRT",
                        "instrument": "MODIS",
                        "frp": 7.3,
                        "confidence": 7,
                        "scan": 1.2,
                        "track": 1.1,
                        "satellite": "Aqua"
                    },
                    {
                        "latitude": 16.518,
                        "longitude": 31.326,
                        "acq_date": 20181013,
                        "acq_time": 2315,
                        "brightness": 300.7,
                        "daynight": "N",
                        "bright_t31": 289.8,
                        "version": "6.0NRT",
                        "instrument": "MODIS",
                        "frp": 4.6,
                        "confidence": 31,
                        "scan": 1,
                        "track": 1,
                        "satellite": "Aqua"
                    },
                    {
                        "latitude": 16.509,
                        "longitude": 31.327,
                        "acq_date": 20181013,
                        "acq_time": 2315,
                        "brightness": 302.5,
                        "daynight": "N",
                        "bright_t31": 289.8,
                        "version": "6.0NRT",
                        "instrument": "MODIS",
                        "frp": 5.6,
                        "confidence": 49,
                        "scan": 1,
                        "track": 1,
                        "satellite": "Aqua"
                    },
                    {
                        "latitude": 15.914,
                        "longitude": 30.804,
                        "acq_date": 20181013,
                        "acq_time": 2315,
                        "brightness": 311.9,
                        "daynight": "N",
                        "bright_t31": 297.1,
                        "version": "6.0NRT",
                        "instrument": "MODIS",
                        "frp": 9.5,
                        "confidence": 81,
                        "scan": 1.1,
                        "track": 1,
                        "satellite": "Aqua"
                    }

                                            ]`;
      var infowindow = new google.maps.InfoWindow({

      });
      $.each(JSON.parse(data), function (index, value) {

          var myLatlng = new google.maps.LatLng(value.latitude, value.longitude);
          //alert(myLatlng/*);*/
          var marker = new google.maps.Marker({
              position: myLatlng,
              map: map,
              // class: map-blink
          });
          // marker.class.add('map-blink');

          var redCircle = new google.maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 1,
              strokeWeight: 1,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              map: map,
              center: {
                  lat: value.latitude,
                  lng: value.longitude
              },
              radius: value.confidence * 5.5
          });
          redCircle.setMap(map);

          var direction = 1;
          var rMin = value.confidence * 1,
              rMax = value.confidence * 5.5;
          setInterval(function () {
              var radius = redCircle.getRadius();
              if ((radius > rMax) || (radius < rMin)) {
                  direction *= -1;
              }
              redCircle.setRadius(radius + direction * 10);
          }, 100);
          // google.maps.event.addDomListener(window, 'load', initialize);


          if (value.confidence > 0 && value.confidence <= 40) {
              redCircle.strokeColor = "#ffd11a";
              redCircle.fillColor = "#ffd11a";

          }
          if (value.confidence > 40 && value.confidence <= 70) {
              redCircle.strokeColor = "#ff6600";
              redCircle.fillColor = "#ff6600";
          } else {
              redCircle.strokeColor = "#ff0000";
              redCircle.fillColor = "#ff0000";
          }
          //alert(redCircle.radius);
          //var greenCircle = new google.maps.Circle({
          //    strokeColor: '#33cc33',
          //    strokeOpacity: 0.8,
          //    strokeWeight: 2,
          //    fillColor: '#FFFF00',
          //    fillOpacity: 0.35,
          //    map: map,
          //    center: { lat: value.latitude, lng: value.longitude },
          //    radius: value.confidence * 10 + 100
          //});
          bindInfoWindow(marker, map, infowindow, "", value.latitude, value.longitude);
      });
  }

  function bindInfoWindow(marker, map, infowindow, divi, lat, lng) {
      marker.addListener('click', function () {
          $('#myModal').modal('show');
          showChart(lat, lng);

      });
      //marker.addListener('mouseover', function () {
      ////    infowindow.setContent(divi);
      ////    infowindow.open(map, this);
      ////});

  }

  var count = $(('#count'));
  $({
      Counter: 0
  }).animate({
      Counter: count.text()
  }, {

      easing: 'linear',
      step: function () {
          count.text(Math.ceil(Math.floor((Math.random() * 100) + 1)) + "%");
      }
  });

  var s = Snap('#animated');
  var progress = s.select('#progress');

  progress.attr({
      strokeDasharray: '0, 251.2'
  });
  Snap.animate(0, 251.2, function (value) {
      progress.attr({
          'stroke-dasharray': value + ',251.2'
      });
  }, 0);

  function showChart(lat, lng) {
      var drejtimi = ['N', 'NE', 'W', 'E', 'SE', 'S', 'SW', 'NW'];
      $("#count1").text(Math.ceil(Math.floor((Math.random() * 200) + 1)) + "ppb");
      $("#count2").text(Math.ceil(Math.floor((Math.random() * 50) + 1)) + "km/h");
      $("#count3").text(drejtimi[Math.floor(Math.random() * drejtimi.length)]);
      $('.modal-title').text(lat + "º , " + lng + "º");
  }