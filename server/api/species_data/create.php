<?php
/**
 * Created by PhpStorm.
 * User: Niko
 * Date: 24.09.2018
 * Time: 12:24
 */
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// get database connection
include_once '../config/database.php';

// instantiate species data object
include_once '../objects/SpeciesData.php';

$database = new Database();
$db = $database->getConnection();

$species_data = new SpeciesData($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));

// set species_data property values
$species_data->date_created = $data->date_created;
$species_data->population = $data->population;
$species_data->source_id = $data->source_id;
$species_data->municipality_id = $data->municipality_id;
$species_data->species_id = $data->species_id;

// create the species data
if ($species_data->create()) {
    echo '{';
    echo '"message": "species data was created."';
    echo '}';
} // if unable to create the species data, tell the user
else {
    echo '{';
    echo '"message": "Unable to create species data."';
    echo '}';
}