CREATE OR REPLACE FUNCTION calculate_order_price(order_id INTEGER)
RETURNS TEXT[] AS $$
DECLARE
    total_price NUMERIC := 0;
    vat_total NUMERIC := 0;
    order_item RECORD;
    vat_t TEXT[];
BEGIN
    FOR order_item IN
        SELECT item_price, vat_rate, quantity
        FROM order_items AS oi
        WHERE oi.order_id = $1
    LOOP
        total_price := total_price + order_item.item_price * order_item.quantity;
        vat_total := vat_total + order_item.item_price * order_item.vat_rate / 100 * order_item.quantity;
    END LOOP;

    SELECT array[(total_price + vat_total), total_price, vat_total as vat_cents] INTO vat_t;

    RETURN vat_t;
END;
$$ LANGUAGE plpgsql;
