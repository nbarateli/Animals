insert into species (name_KA, name_EN)
VALUES ('მგელი', 'Wolf'),
       ('ვეფხვი', 'Tiger'),
       ('ნიყვი', 'Ceasar\'s shroomz'),
       ('ციყვი', 'Squirrel'),
       ('ლომი', 'Lion'),
       ('წავი', 'el tsavo'),
       ('ირემი', 'Deer'),
       ('ელარჯი', 'Elarji'),
       ('ავაზა', 'Panther'),
       ('ჯიქი', 'Snow Leopard'),
       ('ბრიყვი', 'fool');

insert into municipalities (name_KA, name_EN)
VALUES ('თბილისი', 'Tbilisi'),
       ('ქუთაისი', 'Kutaisi'),
       ('ლანჩხუთი', 'Lunchfive'),
       ('მანგლისი', 'Manglease'),
       ('ზუგდიდი', 'Zugdidi'),
       ('ვაკანდა', 'Wakanda'),
       ('ჩოხატაური', 'Chokhatauri'),
       ('ფაბრიკა', 'Fabrika');

insert into sources (name_KA, name_EN, attached_document)
VALUES ('წყაროების წყარო', 'The source to end all sources', 'source.jpg'),
       ('ჩემი ძმაკანა ტოო', 'My Dzmakana', 'source.jpg'),
       ('თერიბლ', 'Terrible', 'source.jpg'),
       ('ჯიგარი სორსი', 'Jigar sauce', 'source.jpg'),
       ('ლომპორტი', 'Lion\'s Den', 'source.jpg'),
       ('წავიდა გულავი', 'Tsavi & gulavi', 'source.jpg'),
       ('სენაკი სითი ლაიფ', 'West side', 'source.jpg'),
       ('დადიანის მენიუ', 'menu of the restaurant Dadiani', 'source.jpg'),
       ('ჰან სოლო', 'dies in force awakens', 'source.jpg'),
       ('ეჰ', 'eh', 'source.jpg'),
       ('ასე ჯობია', 'a lance through', 'source.jpg'),
       ('თაბლე', 'Table', 'source.jpg');

insert into species_data (date_created, population, species_id, municipality_id, source_id)
VALUES (STR_TO_DATE('12/6/2015', '%d/%m/%Y'), 2456, '1', '1', '1'),
       (STR_TO_DATE('22/11/2015', '%d/%m/%Y'), 3456, '2', '2', '2'),
       (STR_TO_DATE('12/6/2015', '%d/%m/%Y'), 9856, '3', '3', '3'),
       (STR_TO_DATE('5/4/2013', '%d/%m/%Y'), 23456, '4', '4', '4'),
       (STR_TO_DATE('23/3/2002', '%d/%m/%Y'), 10552, '5', '3', '5'),
       (STR_TO_DATE('22/4/2015', '%d/%m/%Y'), 1816, '6', '2', '6'),
       (STR_TO_DATE('12/8/1995', '%d/%m/%Y'), 1063, '7', '5', '7'),
       (STR_TO_DATE('1/2/2005', '%d/%m/%Y'), 43467, '8', '5', '8'),
       (STR_TO_DATE('12/2/2018', '%d/%m/%Y'), 9856, '9', '6', '9'),
       (STR_TO_DATE('19/8/2018', '%d/%m/%Y'), 1046, '10', '7', '10'),
       (STR_TO_DATE('11/9/2018', '%d/%m/%Y'), 6755, '10', '8', '11'),
       (STR_TO_DATE('12/6/2015', '%d/%m/%Y'), 4423, '11', '1', '12')