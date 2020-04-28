CREATE TABLE IF NOT EXISTS m_taste (
    id INT(11) NOT NULL AUTO_INCREMENT
    , taste_cd VARCHAR(3) NOT NULL
    , taste_nm VARCHAR(16) NOT NULL
    , genre_cd VARCHAR(6) NOT NULL
    , created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    , updated_at TIMESTAMP NOT NULL DEFAULT '0000-00-00 00:00:00'
    , PRIMARY KEY (id)
);
