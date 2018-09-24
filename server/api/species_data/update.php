<?php
/**
 * Created by PhpStorm.
 * User: Niko
 * Date: 24.09.2018
 * Time: 12:54
 */
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// include database and object files
include_once '../config/database.php';
include_once '../objects/SpeciesData.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare species_data object
$species_data = new SpeciesData($db);

// get id of species_data to be edited
$data = json_decode(file_get_contents("php://input"));

// set ID property of species_data to be edited
$species_data->id = $data->id;

// set species_data property values
$species_data->date_created = $data->date_created;
$species_data->population = $data->population;
$species_data->source_id = $data->source_id;
$species_data->municipality_id = $data->municipality_id;
$species_data->species_id = $data->species_id;

// update the species_data
if ($species_data->update()) {
    echo '{';
    echo '"message": "species_data was updated."';
    echo '}';
} // if unable to update the species_data, tell the user
else {
    echo '{';
    echo '"message": "Unable to update species_data."';
    echo '}';
}