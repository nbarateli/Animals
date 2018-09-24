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
include_once '../objects/Source.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare municipalities object
$source = new Source($db);

// get id of municipalities to be edited
$data = json_decode(file_get_contents("php://input"));

// set ID property of municipalities to be edited
$source->id = $data->id;

// set municipalities property values
$source->name_KA = $data->name_KA;
$source->name_EN = $data->name_EN;
$source->attached_document = $data->attached_document;


// update the municipalities
if ($source->update()) {
    echo '{';
    echo '"message": "municipalities was updated."';
    echo '}';
} // if unable to update the municipalities, tell the user
else {
    echo '{';
    echo '"message": "Unable to update municipalities."';
    echo '}';
}