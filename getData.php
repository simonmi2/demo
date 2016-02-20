<?php
ini_set('display_errors', 1); 

//database login info
$host = 'localhost';
$port = '5432';
$dbname = 'solanohcp';
$user = 'postgres';
$password = 'Msimonpass!';


$conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");
if (!$conn) {
	echo "Not connected : " . pg_error();
	exit;
}

//get the table and fields data
$table = $_GET['table'];
$fields = $_GET['fields'];

//turn fields array into formatted string
$fieldstr = "";
foreach ($fields as $i => $field){
	$fieldstr = $fieldstr . "l.$field, ";
}

//get the geometry as geojson in WGS84
$fieldstr = $fieldstr 

//create basic sql statement
$sql = "SELECT $fieldstr FROM $table";

//if a query, add those to the sql statement
if (isset($_GET['featname'])){
	$featname = $_GET['APN'];


	//join for spatial query - table geom is in EPSG:26916
	$sql = $sql . " LEFT JOIN $parcels WHERE r.featname = '$APN';";
}

// echo $sql;

//send the query
if (!$response = pg_query($conn, $sql)) {
	echo "A query error occured.\n";
	exit;
}

//echo the data back to the DOM
while ($row = pg_fetch_row($response)) {
	foreach ($row as $i => $attr){
		echo $attr.", ";
	}
	echo ";";
}

?>