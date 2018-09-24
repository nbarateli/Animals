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
include_once '../objects/species.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare species object
$species = new Species($db);

// get species id
$data = json_decode(file_get_contents("php://input"));

// set species id to be deleted
$species->id = $data->id;

// delete the species
if ($species->delete()) {
    echo '{';
    echo '"message": "species was deleted."';
    echo '}';
} // if unable to delete the species
else {
    echo '{';
    echo '"message": "Unable to delete object."';
    echo '}';
}
?>
