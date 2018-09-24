<?php
/**
 * Created by PhpStorm.
 * User: Niko
 * Date: 24.09.2018
 * Time: 12:03
 */

class SpeciesData {
    //columns
    public $id;
    public $date_created;
    public $population;
    public $species_id;
    public $source_id;
    public $municipality_id;

    private $conn;
    private $table_name = "species_data";

    public function __construct($connection) {
        $this->conn = $connection;
    }

    // read municipalities
    function read() {

        // select all query
        $query = "SELECT *,
      sp.name_KA          as species_name_KA,
      sp.name_EN          as species_name_EN,
      m.name_KA           as municipality_name_KA,
      m.name_EN           as municipality_name_EN,
      s.name_KA           as source_name_KA,
      s.name_EN           as source_name_EN,
      s.attached_document as source_attached_document


      FROM " . $this->table_name . " data
       LEFT JOIN species sp ON data.species_id = sp.id
       LEFT JOIN municipalities m ON data.municipality_id = m.id
       LEFT JOIN sources s ON data.source_id = s.id
    ORDER BY data.date_created DESC";

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
                date_created=:date_created, population=:population, 
                species_id=:species_id, source_id=:source_id, municipality_id=:municipality_id";

        // prepare query
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->date_created = htmlspecialchars(strip_tags($this->date_created));
        $this->population = htmlspecialchars(strip_tags($this->population));
        $this->species_id = htmlspecialchars(strip_tags($this->species_id));
        $this->municipality_id = htmlspecialchars(strip_tags($this->municipality_id));
        $this->source_id = htmlspecialchars(strip_tags($this->source_id));

        // bind values
        $stmt->bindParam(":date_created", $this->date_created);
        $stmt->bindParam(":population", $this->population);
        $stmt->bindParam(":species_id", $this->species_id);
        $stmt->bindParam(":municipality_id", $this->municipality_id);
        $stmt->bindParam(":source_id", $this->source_id);


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
        $this->date_created = $row['date_created'];
        $this->population = $row['population'];;
        $this->species_id = $row['species_id'];
        $this->municipality_id = $row['municipality_id'];
        $this->source_id = $row['source_id'];

    }

    // update the municipalities
    function update() {

        // update query
        $query = "UPDATE
                " . $this->table_name . "
            SET
                SET
                date_created=:date_created, population=:population, 
                species_id=:species_id, source_id=:source_id, municipality_id=:municipality_id
            WHERE
                id = :id";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->date_created = htmlspecialchars(strip_tags($this->date_created));
        $this->population = htmlspecialchars(strip_tags($this->population));
        $this->species_id = htmlspecialchars(strip_tags($this->species_id));
        $this->municipality_id = htmlspecialchars(strip_tags($this->municipality_id));
        $this->source_id = htmlspecialchars(strip_tags($this->source_id));

        // bind new values
        $stmt->bindParam(":date_created", $this->date_created);
        $stmt->bindParam(":population", $this->population);
        $stmt->bindParam(":species_id", $this->species_id);
        $stmt->bindParam(":municipality_id", $this->municipality_id);
        $stmt->bindParam(":source_id", $this->source_id);


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
                " . $this->table_name . " data
                
            WHERE
                data.name_KA LIKE ? OR p.name_EN LIKE ?;";

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
        $query = "SELECT *,
      sp.name_KA          as species_name_KA,
      sp.name_EN          as species_name_EN,
      m.name_KA           as municipality_name_KA,
      m.name_EN           as municipality_name_EN,
      s.name_KA           as source_name_KA,
      s.name_EN           as source_name_EN,
      s.attached_document as source_attached_document


      FROM " . $this->table_name . " data
       LEFT JOIN species sp ON data.species_id = sp.id
       LEFT JOIN municipalities m ON data.municipality_id = m.id
       LEFT JOIN sources s ON data.source_id = s.id

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