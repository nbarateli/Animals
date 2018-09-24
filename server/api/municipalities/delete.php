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
include_once '../objects/Municipality.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare municipalities object
$municipality = new Municipality($db);

// get municipalities id
$data = json_decode(file_get_contents("php://input"));

// set municipalities id to be deleted
$municipality->id = $data->id;

// delete the municipalities
if ($municipality->delete()) {
    echo '{';
    echo '"message": "municipalities was deleted."';
    echo '}';
} // if unable to delete the municipalities
else {
    echo '{';
    echo '"message": "Unable to delete object."';
    echo '}';
}
?>
