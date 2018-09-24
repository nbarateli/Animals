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
include_once '../objects/Source.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare sources object
$source = new Source($db);

// get sources id
$data = json_decode(file_get_contents("php://input"));

// set sources id to be deleted
$source->id = $data->id;

// delete the sources
if ($source->delete()) {
    echo '{';
    echo '"message": "sources was deleted."';
    echo '}';
} // if unable to delete the sources
else {
    echo '{';
    echo '"message": "Unable to delete object."';
    echo '}';
}
?>
