CREATE TABLE IF NOT EXISTS m_shop (
    id INT(11) NOT NULL AUTO_INCREMENT
    , shop_cd VARCHAR(6) NOT NULL
    , shop_nm VARCHAR(32) NOT NULL
    , place_cd VARCHAR(6) NOT NULL
    , station_cd VARCHAR(6)
    , taste_cd VARCHAR(3) 
    , price INT(5)
    , url VARCHAR(512)
    , created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    , updated_at TIMESTAMP NOT NULL DEFAULT '0000-00-00 00:00:00'
    , PRIMARY KEY (id)
);
