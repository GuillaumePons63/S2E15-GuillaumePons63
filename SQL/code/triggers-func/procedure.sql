DROP PROCEDURE IF EXISTS part_of_day;

CREATE OR REPLACE PROCEDURE part_of_day(INOUT val TEXT DEFAULT null, INOUT val2 TEXT DEFAULT null)
LANGUAGE plpgsql
AS $$
DECLARE cur_time TIME := CURRENT_TIME(0); -- (0) Affiche 12:00:00 Si 12h tapantes
DECLARE day_part TEXT;
BEGIN

IF cur_time < '12:00:00' THEN
    day_part = 'Matin';
ELSEIF cur_time > '12:00:00' AND cur_time < '15:00:00' THEN
    day_part = 'Journée';
ELSE
    day_part = 'Soir';
END IF;
SELECT day_part INTO val;
SELECT cur_time INTO val2;
END;

$$;

CALL part_of_day();