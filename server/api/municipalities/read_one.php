<?php
/**
 * Created by PhpStorm.
 * User: Niko
 * Date: 24.09.2018
 * Time: 12:51
 */
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

// include database and object files
include_once '../config/database.php';
include_once '../objects/Municipality.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare municipalities object
$municipality = new Municipality($db);

// set ID property of municipalities to be edited
$municipality->id = isset($_GET['id']) ? $_GET['id'] : die();

// read the details of municipalities to be edited
$municipality->readOne();

// create array
$municipalities_arr = array(
    "id" => $municipality->id,
    "name_KA" => $municipality->name_KA,
    "name_EN" => $municipality->name_EN
);

// make it json format
print_r(json_encode($municipalities_arr));