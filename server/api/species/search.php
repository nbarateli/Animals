<?php
/**
 * Created by PhpStorm.
 * User: Niko
 * Date: 24.09.2018
 * Time: 13:07
 */
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once '../config/database.php';
include_once '../objects/species.php';

// instantiate database and species object
$database = new Database();
$db = $database->getConnection();

// initialize object
$species = new Species($db);

// get keywords
$keywords = isset($_GET["s"]) ? $_GET["s"] : "";

// query speciess
$stmt = $species->search($keywords);
$num = $stmt->rowCount();

// check if more than 0 record found
if ($num > 0) {

    // speciess array
    $speciess_arr = array();
    $speciess_arr["records"] = array();

    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);

        $species_item = array(
            "id" => $id,
            "name_KA" => $name_KA,
            "name_EN" => $name_EN
        );

        array_push($speciess_arr["records"], $species_item);
    }

    echo json_encode($speciess_arr);
} else {
    echo json_encode(
        array("message" => "No speciess found.")
    );
}
?>