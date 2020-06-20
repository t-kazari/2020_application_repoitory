CREATE TABLE IF NOT EXISTS m_prefecture (
    id INT(11) NOT NULL AUTO_INCREMENT
    , prefecture_cd VARCHAR(2) NOT NULL
    , prefecture_nm VARCHAR(6) NOT NULL
    , created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    , updated_at TIMESTAMP NOT NULL DEFAULT '0000-00-00 00:00:00'
    , PRIMARY KEY (id)
);
