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

// instantiate species object
include_once '../objects/species.php';

$database = new Database();
$db = $database->getConnection();

$species = new Species($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));

// set species property values
$species->name = $data->name;
$species->price = $data->price;
$species->description = $data->description;
$species->category_id = $data->category_id;
$species->created = date('Y-m-d H:i:s');

// create the species
if ($species->create()) {
    echo '{';
    echo '"message": "species was created."';
    echo '}';
} // if unable to create the species, tell the user
else {
    echo '{';
    echo '"message": "Unable to create species."';
    echo '}';
}