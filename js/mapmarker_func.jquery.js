		//set up markers 
		var myMarkers = {"markers": [
				{"latitude": "37.3953278", "longitude":"-122.02681860000001", "icon": "img/map-marker.png"}
			]
		};
		
		//set up map options
		$("#map").mapmarker({
			zoom	: 14,
			center	: '764 San Aleso Avenue, Sunnyvale, CA, United States',
			markers	: myMarkers
		});

