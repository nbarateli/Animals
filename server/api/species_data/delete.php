<?php
/**
 * Created by PhpStorm.
 * User: Niko
 * Date: 24.09.2018
 * Time: 13:05
 */
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


// include database and object file
include_once '../config/database.php';
include_once '../objects/SpeciesData.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare species data object
$species_data = new SpeciesData($db);

// get species data id
$data = json_decode(file_get_contents("php://input"));

// set species data id to be deleted
$species_data->id = $data->id;

// delete the species data
if ($species_data->delete()) {
    echo '{';
    echo '"message": "species data was deleted."';
    echo '}';
} // if unable to delete the species data
else {
    echo '{';
    echo '"message": "Unable to delete object."';
    echo '}';
}
?>
