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
include_once '../objects/SpeciesData.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare species_data object
$species_data = new SpeciesData($db);

// set ID property of species_data to be edited
$species_data->id = isset($_GET['id']) ? $_GET['id'] : die();

// read the details of species_data to be edited
$species_data->readOne();

// create array
$species_data_item = array(
    "id" => $id,
    "date_created" => $date_created,
    "population" => $population,
    "species_id" => $species_id, "species_name_KA" => $species_name_KA, "species_name_EN" => $species_name_EN,
    "source_id" => $source_id, "source_name_KA" => $source_name_KA, "source_name_EN" => $source_name_EN, "source_attached_document" => $source_attached_document,
    "municipality_id" => $municipality_id, "municipality_name_KA" => $municipality_name_KA, "municipality_name_EN" => $municipality_name_EN,
);
// make it json format
print_r(json_encode($species_data_arr));