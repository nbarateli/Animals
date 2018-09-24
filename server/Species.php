<?php
/**
 * Created by PhpStorm.
 * User: Niko
 * Date: 24.09.2018
 * Time: 12:03
 */

class Species {
    public $id;
    public $name_KA;

    //columns
    public $name_EN;
    private $conn;
    private $table_name = "products";

    public function __construct($connection) {
        $this->conn = $connection;
    }
}