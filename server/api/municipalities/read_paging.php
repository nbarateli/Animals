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
include_once '../objects/Municipality.php';

// utilities
$utilities = new Utilities();

// instantiate database and municipalities object
$database = new Database();
$db = $database->getConnection();

// initialize object
$municipality = new Municipality($db);

// query municipalities
$stmt = $municipality->readPaging($from_record_num, $records_per_page);
$num = $stmt->rowCount();

// check if more than 0 record found
if ($num > 0) {

    // municipalities array
    $municipalities_arr = array();
    $municipalities_arr["records"] = array();
    $municipalities_arr["paging"] = array();

    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);

        $municipalities_item = array(
            "id" => $id,
            "name_KA" => $name_KA,
            "name_EN" => $name_EN
        );

        array_push($municipalities_arr["records"], $municipalities_item);
    }


    // include paging
    $total_rows = $municipality->count();
    $page_url = "{$home_url}municipalities/read_paging.php?";
    $paging = $utilities->getPaging($page, $total_rows, $records_per_page, $page_url);
    $municipalities_arr["paging"] = $paging;

    echo json_encode($municipalities_arr);
} else {
    echo json_encode(
        array("message" => "No municipalities found.")
    );
}