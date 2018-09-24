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
include_once '../objects/species.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare species object
$species = new Species($db);

// set ID property of species to be edited
$species->id = isset($_GET['id']) ? $_GET['id'] : die();

// read the details of species to be edited
$species->readOne();

// create array
$species_arr = array(
    "id" => $species->id,
    "name_KA" => $species->name_KA,
    "name_EN" => $species->name_EN
);

// make it json format
print_r(json_encode($species_arr));