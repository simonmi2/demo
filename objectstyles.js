			function zone1citiesfeatures(feature, layer) {
                    var popupContent1 = feature.properties.Label
                    layer.bindPopup(popupContent1)
                };		
		function tilejsonlayerfeatures (feature,layer){
			var popupcontent2 = feature.properties.APN
			layer.bindPopup (popupcontent2)
		};
		function vernalpoollayerfeatures(feature,layer){
			var popupcontent3 = feature.properties.Category 
			layer.bindPopup (popupcontent3)
		};		
			
			
			var planareastyle = {
			"color": "#000000",
			"weight": 1,
			"opacity": 1,
            "fillOpacity": 0
			}

