<?php
/**
 * Created by PhpStorm.
 * User: Niko
 * Date: 24.09.2018
 * Time: 13:37
 */

// show error reporting
ini_set('display_errors', 1);
error_reporting(E_ALL);

// home page url
$home_url = "http://localhost/api/";

// page given in URL parameter, default page is one
$page = isset($_GET['page']) ? $_GET['page'] : 1;

// set number of records per page
$records_per_page = 5;

// calculate for the query LIMIT clause
$from_record_num = ($records_per_page * $page) - $records_per_page;
?>