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

// instantiate municipalities object
include_once '../objects/Municipality.php';

$database = new Database();
$db = $database->getConnection();

$municipality = new Municipality($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));

// set municipality property values
$municipality->name_KA = $data->name_KA;
$municipality->name_EN = $data->name_EN;

// create the municipalities
if ($municipality->create()) {
    echo '{';
    echo '"message": "municipalities was created."';
    echo '}';
} // if unable to create the municipalities, tell the user
else {
    echo '{';
    echo '"message": "Unable to create municipalities."';
    echo '}';
}