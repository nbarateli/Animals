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
include_once '../objects/Municipality.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare municipalities object
$municipality = new Municipality($db);

// get id of municipalities to be edited
$data = json_decode(file_get_contents("php://input"));

// set ID property of municipalities to be edited
$municipality->id = $data->id;

// set municipalities property values
$municipality->name_KA = $data->name_KA;
$municipality->name_EN = $data->name_EN;


// update the municipalities
if ($municipality->update()) {
    echo '{';
    echo '"message": "municipalities was updated."';
    echo '}';
} // if unable to update the municipalities, tell the user
else {
    echo '{';
    echo '"message": "Unable to update municipalities."';
    echo '}';
}