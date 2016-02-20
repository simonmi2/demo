
		function parcellayerfeatures (feature,layer){
		var popupContent1 = "<b>APN: </b>" + feature.properties.apndashes + "<br><br><b>City: </b> Fairfield" +"<br><br><b>Acres: </b>" + feature.properties.Area_ac + 
		"<br><br><b>Land Use: </b>" + feature.properties.Landuse + "<br><br><b>Conservation Area: </b>" 
		+ feature.properties.CONSERVATI + "<br><br><b>CNDDB Occurrences: </b>" 
		+ feature.properties.cnddbspeci + "<br><br><b>Wetlands: </b>" 
		+ feature.properties.Wetlands + "<br><br><b>Special Status Species Occurrences: </b>" 
		+ feature.properties.spec_st_sp + "<br><br><b>Vegetation: </b>" + feature.properties.vegtype + "<br><br><a href=http://solanocountyhcp.byethost7.com/Compliance%20Monitoring%20Table%20for%20Solano%20HCP%20Measures.html TARGET = blank>Click here for Solano HCP Requirements and Compliance for this Parcel</a>"
			layer.bindPopup (popupContent1)
		};
		
		function cnddbfeatures (feature,layer){
		var popupContent2 = feature.properties.CNAME
			layer.bindPopup (popupContent2)
		};
		
		function landusefeatures (feature,layer){
		var popupContent3 = feature.properties.Status2015
			layer.bindPopup (popupContent3)
		};
		
		function natcomfeatures (feature,layer){
		var popupContent4 = feature.properties.NatCom2015
			layer.bindPopup (popupContent4)
		};
		
		function openspacefeatures (feature,layer){
		var popupContent5 = feature.properties.PROTECTION
			layer.bindPopup (popupContent5)
		};
		
		function sssfeatures (feature,layer){
		var popupContent6 = feature.properties.CommonName
			layer.bindPopup (popupContent6)
		};
		
		
		function vpconfeatures (feature,layer){
		var popupContent7 = feature.properties.PVPArea
			layer.bindPopup (popupContent7)
		};
		function wetlandsfeatures (feature,layer){
		var popupContent8 = feature.properties.WebMap
			layer.bindPopup (popupContent8)
		};
				
			var planareastyle = {
			"color": "#000000",
			"weight": 1,
			"opacity": 1,
            "fillOpacity": 0
			}

			var parcelstyle = {
			"color": "#000000",
			"weight": 0.5,
			"opacity": 1,
            "fillOpacity": 0
			}
			
			var cnddbstyle = {
			"color": "#DF0101",
			"weight": 2,
			"opacity": 1,
            "fillOpacity": 0
			}
			
			var sssstyle = {
			"color": "#DF0101",
			"weight": 1,
			"opacity": 1,
            "fillOpacity": 1
			}
			
			
			var landusestyle = {
				style: function(feature) {
                        switch (feature.properties.Status2015) {
                            case 'Developed':
                                return {
                                    color: "#828282",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
                            case 'General Plan Designated Open Space and/or Ag':
                                return {
                                    color: "#F5DA81",
                                    weight: 1,
                                    opacity: 0.5,
                                    fillOpacity: 0.7
                                };
                            case 'Individual Mitigation Project':
                                return {
                                    color: "#B40486",
                                    weight: 1,
                                    opacity: 0.5,
									fillOpacity: 0.5
								};
							case 'Mitigation Bank':
                                return {
                                    color: "#FE2E9A",
                                    weight: 1,
                                    opacity: 0.5,
									fillOpacity: 0.5
								};
							case 'Planned Development':
                                return {
                                    color: "#C4C0C0",
                                    weight: 1,
                                    opacity: 0.5,
									fillOpacity: 0.5
								};
							case 'Travis AFB':
                                return {
                                    color: "#FFFFFF",
                                    weight: 1,
                                    opacity: 1,
									fillOpacity: 1
								};
							case 'Travis Reserve':
                                return {
                                    color: "#F3DADA",
                                    weight: 1,
                                    opacity: 1,
									fillOpacity: 1
								};
						}
				}
			};
						
							var natcomstyle = {
						style: function(feature) {
					switch (feature.properties.NatCom2015) {
                            case 'Agriculture':
                                return {
                                    color: "#70FF91",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
                            case 'Coastal Marsh':
                                return {
                                    color: "#96E7EB",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
                            case 'Developed':
                                return {
                                    color: "#828282",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
                            case 'Inner Coast Range':
                                return {
                                    color: "#FFAA00",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
                            case 'Pre-approved Development':
                                return {
                                    color: "#FF5500",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
                            case 'Riparian':
                                return {
                                    color: "#000FE1",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
                            case 'Valley Floor Grassland/Vernal Pool':
                                return {
                                    color: "#C7B296",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
			
							}}};
							
					var openspacestyle = {
						style: function(feature) {
					switch (feature.properties.PROTECTION) {
                            case 'Conservation/Mitigation Bank':
                                return {
                                    color: "#61210B",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
                            case 'Individual Mitigation Project':
                                return {
                                    color: "#8A4B08",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
                            case 'Potential Mitigation Lands':
                                return {
                                    color: "#B18904",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
                          
			
							}}};
							
							
					var vpconstyle = {
						style: function(feature) {
                        switch (feature.properties.VPArea) {
                            case 'High Value Vernal Pool Conservation Area':
                                return {
                                    color: "#FE2E2E",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
                            case 'Medium Value Vernal Pool Conservation Area':
                                return {
                                    color: "#FE9A2E",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
                               
                          
			
							}}};
							
					var wetlandsstyle = {
						style: function(feature) {
                        switch (feature.properties.WetType) {
                            case 'Creek':
                                return {
                                    color: "#81BEF7",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
                            case 'J_Drain-seasonal-NJ':
                                return {
                                    color: "#819FF7",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
							        case 'J_Wet-seasonal-J':
                                return {
                                    color: "#8181F7",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
								        case 'Other Seasonal Wetland Jurisdictional':
                                return {
                                    color: "#00BFFF",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
								        case 'Other Seasonal Wetland Jurisdictional - Potential CTS Breeding Habitat':
                                return {
                                    color: "#4000FF",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
								        case 'Other Seasonal Wetland Non-jurisdictional':
                                return {
                                    color: "#7982AE",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
								        case 'Playa Pool A':
                                return {
                                    color: "#89A5BF",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
								        case 'Playa Pool B':
                                return {
                                    color: "#6693BE",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
								        case 'Potentially Jurisdictional Wetlands/Vernal Pools':
                                return {
                                    color: "#8566BE",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
								        case 'Riparian':
                                return {
                                    color: "#7401DF",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
								        case 'Seasonal Wetland':
                                return {
                                    color: "#4E9A95",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
								        case 'Seasonal Wetlands':
                                return {
                                    color: "#4E9A95",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
								        case 'Tributary C':
                                return {
                                    color: "#629D6E",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
								        case 'Tributary D':
                                return {
                                    color: "#819D62",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
								        case 'Tributary E':
                                return {
                                    color: "#9D9862",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
								        case 'Tributary of Union Creek':
                                return {
                                    color: "#629D77",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
								        case 'Union Creek':
                                return {
                                    color: "#629D77",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
								      case 'Union Creek Bypass Channel':
                                return {
                                    color: "#F629D77",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
								case 'Vernal Pool Wetland Jurisdictional':
                                return {
                                    color: "#023A9A",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
								case 'Vernal Pool Wetland Jurisdictional - Potential CTS Breedig Habitat':
                                return {
                                    color: "#020A9A",
                                    weight: 0,
                                    opacity: 1,
                                    fillOpacity: 0.7
                                };
                               
                               
                          
			
							}}};
							
							
							
