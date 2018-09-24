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
include_once '../objects/Source.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare sources object
$source = new Source($db);

// set ID property of sources to be edited
$source->id = isset($_GET['id']) ? $_GET['id'] : die();

// read the details of sources to be edited
$source->readOne();

// create array
$sources_arr = array(
    "id" => $source->id,
    "name_KA" => $source->name_KA,
    "name_EN" => $source->name_EN,
    "attached_document" => $source->attached_document
);

// make it json format
print_r(json_encode($sources_arr));