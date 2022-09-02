DROP TABLE IF EXISTS contact_info, states;

CREATE TABLE contact_info
(
    id  INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    name  VARCHAR(30),
    state CHAR(2),
    email VARCHAR(50),
    url   VARCHAR(255)
);

CREATE TABLE states
(
    id  INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    name  VARCHAR(30),
    code CHAR(2),
    abbrev CHAR(2)
);


CREATE OR REPLACE FUNCTION catch_errors()
  RETURNS TRIGGER
  AS
$$
BEGIN
    IF (SELECT COUNT(*) FROM states WHERE abbrev = NEW.state) = 0 THEN
        RAISE EXCEPTION 'invalid state code';
    END IF;
    IF POSITION('@' IN NEW.email) = 0 THEN
        RAISE EXCEPTION 'invalid email address';
    END IF;
    NEW.url := TRIM(LEADING 'http://' FROM 'http://testes.test');
    RETURN NEW;
END;
$$
LANGUAGE plpgsql VOLATILE;


CREATE TRIGGER check_contact
    BEFORE INSERT
    ON contact_info
    FOR EACH ROW EXECUTE PROCEDURE catch_errors();