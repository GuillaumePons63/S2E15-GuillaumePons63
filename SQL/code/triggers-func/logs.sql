-- Fonctions qui vont créer des lignes dans la table des logs 30 jours en avance, et incrément log_count quand on insert une erreur dans les logs
BEGIN;

DROP TABLE IF EXISTS "logs", "log_counts";
DROP FUNCTION IF EXISTS "create_logs";
DROP FUNCTION IF EXISTS "log_trigger";

-- create logs table
CREATE TABLE logs (
  id SERIAL PRIMARY KEY,
  timestamp TIMESTAMP NOT NULL,
  message TEXT NOT NULL,
  is_error BOOLEAN NOT NULL DEFAULT false
);

-- create log_counts table
CREATE TABLE log_counts (
  date DATE PRIMARY KEY,
  count INTEGER NOT NULL
);

-- create function to create logs and update log_counts table
CREATE OR REPLACE FUNCTION create_logs()
RETURNS VOID AS $$
DECLARE
  start_date DATE := NOW();
  log_count INTEGER := 0;
BEGIN
  INSERT INTO log_counts (date, count)
  SELECT
    start_date + i * INTERVAL '1 DAY',
    0
  FROM generate_series(0, 29) AS i;

  SELECT count(*) INTO log_count
  FROM logs
  WHERE is_error = TRUE
  AND EXTRACT(YEAR FROM timestamp) = EXTRACT(YEAR FROM now())
  AND EXTRACT(MONTH FROM timestamp) = EXTRACT(MONTH FROM now())
  AND EXTRACT(DAY FROM timestamp) = EXTRACT(DAY FROM now());

  IF log_count > 0 THEN
    INSERT INTO log_counts (date, count)
    VALUES (start_date, log_count)
    ON CONFLICT (date) DO UPDATE SET count = log_counts.count;
  END IF;
END;
$$ LANGUAGE plpgsql;

-- create trigger to update log_counts table when a new log is added
CREATE OR REPLACE FUNCTION log_trigger() RETURNS TRIGGER AS $$
DECLARE
  log_count INTEGER := 0;
BEGIN
  IF NEW.is_error THEN
    SELECT count(*) INTO log_count
    FROM logs
    WHERE is_error = TRUE
    AND EXTRACT(YEAR FROM timestamp) = EXTRACT(YEAR FROM now())
    AND EXTRACT(MONTH FROM timestamp) = EXTRACT(MONTH FROM now())
    AND EXTRACT(DAY FROM timestamp) = EXTRACT(DAY FROM now());

    IF log_count > 0 THEN
      INSERT INTO log_counts (date, count)
      VALUES (CURRENT_DATE, log_count)
      ON CONFLICT (date) DO UPDATE SET count = log_count;
    END IF;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- create trigger on logs table to update log_counts table
CREATE TRIGGER log_insert_trigger
AFTER INSERT ON logs
FOR EACH ROW
EXECUTE FUNCTION log_trigger();



COMMIT;