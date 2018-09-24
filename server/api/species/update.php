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
include_once '../objects/species.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare species object
$species = new Species($db);

// get id of species to be edited
$data = json_decode(file_get_contents("php://input"));

// set ID property of species to be edited
$species->id = $data->id;

// set species property values
$species->name_KA = $data->name_KA;
$species->name_EN = $data->name_EN;


// update the species
if ($species->update()) {
    echo '{';
    echo '"message": "species was updated."';
    echo '}';
} // if unable to update the species, tell the user
else {
    echo '{';
    echo '"message": "Unable to update species."';
    echo '}';
}