import React, { useEffect, useContext, Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import DOMPurify from 'dompurify';
import { ProductContext } from '../../contexts/products';
import { CartContext } from '../../contexts/cart';
import { GET_ONE_PRODUCT } from '../../contexts/products/types';
import { ADD_TO_CART } from '../../contexts/cart/types';
import { formatPrice, ucfirst } from '../../utils/helpers';

const ProdPage = () => {
    const { id } = useParams();

    const [productState, dispatch] = useContext(ProductContext);
    const [, dispatchCart] = useContext(CartContext);

    useEffect(() => {
        // GET_ONE_PRODUCT
        // url : `/api/products/${id}`
        axios.get(`/api/products/${id}`).then(res => {
            dispatch({ type: GET_ONE_PRODUCT, payload: res.data });
        });
    }, [dispatch, id]);

    const addToCart = () => {
        // Ajouter les produits au localStorage
        const { product } = productState;

        dispatchCart({ type: ADD_TO_CART, payload: product.id });
    };

    const product = productState.product;

    return (
        <Fragment>
            <div className="breadcrumbs">
                <div className="container">
                    <Link to="/shop">Home</Link>
                    <i className="fa fa-chevron-right breadcrumb-separator" />
                    <span>Shop</span>
                    <i className="fa fa-chevron-right breadcrumb-separator" />
                    <span>{ucfirst(product.title)}</span>
                </div>
            </div>

            <div className="product-section container">
                <div className="product-section-image">
                    <img src={product.image} alt="product" />
                </div>
                <div className="product-section-information">
                    <h1 className="product-section-title">
                        {ucfirst(product.title)}
                    </h1>
                    <div className="product-section-subtitle">
                        15 inch, 1TB SSD, 32GB RAM
                    </div>
                    <div className="product-section-price">
                        {formatPrice(product.priceHT)} €
                    </div>

                    <div
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(product.description),
                        }}
                    />

                    <p>&nbsp;</p>

                    <Link
                        to={`/product/${product.id}`}
                        className="button"
                        onClick={addToCart}
                    >
                        Ajouter au panier
                    </Link>
                </div>
            </div>
        </Fragment>
    );
};

export default ProdPage;
