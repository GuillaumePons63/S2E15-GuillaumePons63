-- Description: Récupération des fonctions stockées
SELECT proname AS function_name, 
       pg_namespace.nspname AS schema_name,
       proargtypes, 
       prorettype, 
       prosrc
FROM pg_proc
JOIN pg_namespace ON pg_namespace.oid = pg_proc.pronamespace
WHERE pg_namespace.nspname NOT IN ('pg_catalog', 'information_schema');

-- Description: Récupération des triggers
SELECT 
    n.nspname AS schema_name,
    c.relname AS table_name,
    r.rulename AS rule_name,
    pg_get_ruledef(r.oid) AS rule_definition
FROM 
    pg_rewrite r
JOIN pg_class c ON c.oid = r.ev_class
JOIN pg_namespace n ON n.oid = c.relnamespace
WHERE 
    r.ev_type = '1' -- only for rules, not for triggers
ORDER BY 
    n.nspname, c.relname, r.rulename;
