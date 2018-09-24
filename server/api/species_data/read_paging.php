<?php
/**
 * Created by PhpStorm.
 * User: Niko
 * Date: 24.09.2018
 * Time: 13:30
 */
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once '../config/core.php';
include_once '../shared/utilities.php';
include_once '../config/database.php';
include_once '../objects/SpeciesData.php';

// utilities
$utilities = new Utilities();

// instantiate database and species_data object
$database = new Database();
$db = $database->getConnection();

// initialize object
$species_data = new SpeciesData($db);

// query species_data
$stmt = $species_data->readPaging($from_record_num, $records_per_page);
$num = $stmt->rowCount();

// check if more than 0 record found
if ($num > 0) {

    // species_data array
    $species_data_arr = array();
    $species_data_arr["records"] = array();
    $species_data_arr["paging"] = array();

    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);

        $species_data_item = array(
            "id" => $id,
            "date_created" => $date_created,
            "population" => $population,
            "species_id" => $species_id, "species_name_KA" => $species_name_KA, "species_name_EN" => $species_name_EN,
            "source_id" => $source_id, "source_name_KA" => $source_name_KA, "source_name_EN" => $source_name_EN, "source_attached_document" => $source_attached_document,
            "municipality_id" => $municipality_id, "municipality_name_KA" => $municipality_name_KA, "municipality_name_EN" => $municipality_name_EN,
        );

        array_push($species_data_arr["records"], $species_data_item);
    }


    // include paging
    $total_rows = $species_data->count();
    $page_url = "{$home_url}species_data/read_paging.php?";
    $paging = $utilities->getPaging($page, $total_rows, $records_per_page, $page_url);
    $species_data_arr["paging"] = $paging;

    echo json_encode($species_data_arr);
} else {
    echo json_encode(
        array("message" => "No species_data found.")
    );
}