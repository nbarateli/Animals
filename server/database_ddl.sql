DROP DATABASE IF EXISTS animals;
CREATE DATABASE animals;
USE animals;

CREATE TABLE species
(
  id      INT PRIMARY KEY AUTO_INCREMENT,
  name_KA VARCHAR(50) NOT NULL,
  name_EN VARCHAR(50) NOT NULL
);
CREATE TABLE municipalities
(
  id      INT PRIMARY KEY AUTO_INCREMENT,
  name_KA VARCHAR(50) NOT NULL,
  name_EN VARCHAR(50) NOT NULL
);
CREATE TABLE sources
(
  id                INT PRIMARY KEY AUTO_INCREMENT,
  name_KA           VARCHAR(50)  NOT NULL,
  name_EN           VARCHAR(50)  NOT NULL,
  attached_document VARCHAR(180) NOT NULL
);
CREATE TABLE species_data
(
  id              INT PRIMARY KEY AUTO_INCREMENT,
  date_created    DATE,
  population      INT NOT NULL,
  species_id      INT NOT NULL,
  source_id       INT,
  municipality_id INT,
  CONSTRAINT species_data_species_id_fk FOREIGN KEY (species_id) REFERENCES species (id)
    ON DELETE CASCADE,
  CONSTRAINT species_data_municipalities_id_fk FOREIGN KEY (municipality_id) REFERENCES municipalities (id)
    ON DELETE CASCADE,
  CONSTRAINT species_data_sources_id_fk FOREIGN KEY (source_id) REFERENCES sources (id)
    ON DELETE CASCADE
);