// Load TileJSON
wax.tilejson('http://earthatlas.info/nz/tiles/nz-popden.tilejson', function(tilejson) {

  // Create map and add image tiles	  
  var map = new L.Map('map-div')
    .addLayer(new wax.leaf.connector(tilejson))
    .setView(new L.LatLng(51, 0), 1);
  
  // Create map legend
  wax.leaf.legend(map, tilejson).appendTo(map._container);

  // Add map interaction (tooltips)	
  wax.leaf.interaction()
    .map(map)
    .tilejson(tilejson)
    .on(wax.tooltip().animate(true).parent(map._container).events());

});