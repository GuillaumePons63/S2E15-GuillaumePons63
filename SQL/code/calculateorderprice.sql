CREATE OR REPLACE FUNCTION calculate_order_price(order_id INTEGER)
RETURNS NUMERIC[] AS $$
DECLARE
    total_price DECIMAL(10,2) := 0;
    tva_total NUMERIC := 0;
    order_item RECORD;
    result NUMERIC[];
BEGIN
    FOR order_item IN
        SELECT item_price, vat_rate, quantity
        FROM order_items AS oi
        WHERE oi.order_id = $1
    LOOP   
        total_price := total_price + order_item.item_price * order_item.quantity;
        tva_total := tva_total + order_item.item_price * order_item.vat_rate/100 * order_item.quantity;
    END LOOP;
    total_price := ROUND(total_price,2);
     tva_total := ROUND(tva_total, 2); 

SELECT array[(total_price + tva_total), total_price, tva_total] INTO result;

RETURN result;
END;
$$ LANGUAGE plpgsql;