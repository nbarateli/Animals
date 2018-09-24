<?php
/**
 * Created by PhpStorm.
 * User: Niko
 * Date: 24.09.2018
 * Time: 12:03
 */

class Municipality {
    //columns
    public $id;
    public $name_KA;
    public $name_EN;

    private $conn;
    private $table_name = "municipalities";

    public function __construct($connection) {
        $this->conn = $connection;
    }

    // read municipalities
    function read() {

        // select all query
        $query = "SELECT *
            FROM
                " . $this->table_name;

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }

    // create municipalities
    function create() {

        // query to insert record
        $query = "INSERT INTO
                " . $this->table_name . "
            SET
                name_KA=:name_KA, name_EN=:name_EN";

        // prepare query
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->name_KA = htmlspecialchars(strip_tags($this->name_KA));
        $this->name_EN = htmlspecialchars(strip_tags($this->name_EN));


        // bind values
        $stmt->bindParam(":name_KA", $this->name_KA);
        $stmt->bindParam(":name_EN", $this->name_EN);


        // execute query
        if ($stmt->execute()) {
            return true;
        }

        return false;

    }

    // used when filling up the update municipalities form
    function readOne() {

        // query to read single record
        $query = "SELECT
               *
            FROM
                " . $this->table_name . " s 
            WHERE
                s.id = ?
            LIMIT
                0,1";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // bind id of municipalities to be updated
        $stmt->bindParam(1, $this->id);

        // execute query
        $stmt->execute();

        // get retrieved row
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        // set values to object properties
        $this->name_KA = $row['name_KA'];
        $this->name_EN = $row['name_EN'];
    }

    // update the municipalities
    function update() {

        // update query
        $query = "UPDATE
                " . $this->table_name . "
            SET
                name = :name,
                price = :price,
                description = :description,
                category_id = :category_id
            WHERE
                id = :id";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->name_KA = htmlspecialchars(strip_tags($this->name_KA));
        $this->name_EN = htmlspecialchars(strip_tags($this->name_EN));

        // bind new values
        $stmt->bindParam(':name_KA', $this->name_KA);
        $stmt->bindParam(':name_EN', $this->name_EN);


        // execute the query
        if ($stmt->execute()) {
            return true;
        }

        return false;
    }

    // delete the municipalities
    function delete() {

        // delete query
        $query = "DELETE FROM " . $this->table_name . " WHERE id = ?";

        // prepare query
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->id = htmlspecialchars(strip_tags($this->id));

        // bind id of record to delete
        $stmt->bindParam(1, $this->id);

        // execute query
        if ($stmt->execute()) {
            return true;
        }

        return false;

    }

    // search products
    function search($keywords) {

        // select all query
        $query = "SELECT *            FROM
                " . $this->table_name . " p
                
            WHERE
                p.name_KA LIKE ? OR p.name_EN LIKE ?;";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // sanitize
        $keywords = htmlspecialchars(strip_tags($keywords));
        $keywords = "%{$keywords}%";

        // bind
        $stmt->bindParam(1, $keywords);
        $stmt->bindParam(2, $keywords);

        // execute query
        $stmt->execute();

        return $stmt;
    }

    // read products with pagination
    public function readPaging($from_record_num, $records_per_page) {

        // select query
        $query = "SELECT
               *
            FROM
                " . $this->table_name . " p
            LIMIT ?, ?";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // bind variable values
        $stmt->bindParam(1, $from_record_num, PDO::PARAM_INT);
        $stmt->bindParam(2, $records_per_page, PDO::PARAM_INT);

        // execute query
        $stmt->execute();

        // return values from database
        return $stmt;
    }

    // used for paging products
    public function count() {
        $query = "SELECT COUNT(*) as total_rows FROM " . $this->table_name . "";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        return $row['total_rows'];
    }
}