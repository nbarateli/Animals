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

// instantiate sources object
include_once '../objects/Source.php';

$database = new Database();
$db = $database->getConnection();

$source = new Source($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));

// set source property values
$source->name_KA = $data->name_KA;
$source->name_EN = $data->name_EN;
$source->attached_document = $data->attached_document;

// create the sources
if ($source->create()) {
    echo '{';
    echo '"message": "sources was created."';
    echo '}';
} // if unable to create the sources, tell the user
else {
    echo '{';
    echo '"message": "Unable to create sources."';
    echo '}';
}