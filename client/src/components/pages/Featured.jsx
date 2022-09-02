import img from '../../assets/img/macbook-pro.png';
import otherimg from '../../assets/img/kenshiro.jpg';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

const Featured = () => {
    return (
        <Fragment>
            <header className="with-background">
                <div className="hero container">
                    <div className="hero-copy">
                        <h1>
                            Bienvenue dans le monde merveilleux des mises à jour
                            qui forcent à relire toute la doc
                        </h1>

                        <p>
                            Des produits, Des categories, un panier et REDIS sur
                            le serveur
                        </p>
                        <div className="hero-buttons">
                            <a href="!#" className="button button-white">
                                Blog Post
                            </a>
                            <a href="!#" className="button button-white">
                                GitHub
                            </a>
                        </div>
                    </div>

                    <div className="hero-image">
                        <img src={otherimg} alt="heropages" />
                    </div>
                </div>
            </header>

            <div className="featured-section">
                <div className="container">
                    <h1 className="text-center">MERN Ecommerce</h1>

                    <p className="section-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolore vitae nisi, consequuntur illum dolores
                        cumque pariatur quis provident deleniti nesciunt officia
                        est reprehenderit sunt aliquid possimus temporibus enim
                        eum hic.
                    </p>

                    <div className="text-center button-container">
                        <a href="!#" className="button">
                            Featured
                        </a>
                        <a href="!#" className="button">
                            On Sale
                        </a>
                    </div>

                    <div className="products text-center">
                        <div className="product">
                            <a href="!#">
                                <img src={img} alt="product" />
                            </a>
                            <a href="!#">
                                <div className="product-name">MacBook Pro</div>
                            </a>
                            <div className="product-price">$2499.99</div>
                        </div>
                        <div className="product">
                            <a href="!#">
                                <img src={img} alt="product" />
                            </a>
                            <a href="!#">
                                <div className="product-name">MacBook Pro</div>
                            </a>
                            <div className="product-price">$2499.99</div>
                        </div>
                        <div className="product">
                            <a href="!#">
                                <img src={img} alt="product" />
                            </a>
                            <a href="!#">
                                <div className="product-name">MacBook Pro</div>
                            </a>
                            <div className="product-price">$2499.99</div>
                        </div>
                        <div className="product">
                            <a href="!#">
                                <img src={img} alt="product" />
                            </a>
                            <a href="!#">
                                <div className="product-name">MacBook Pro</div>
                            </a>
                            <div className="product-price">$2499.99</div>
                        </div>
                        <div className="product">
                            <a href="!#">
                                <img src={img} alt="product" />
                            </a>
                            <a href="!#">
                                <div className="product-name">MacBook Pro</div>
                            </a>
                            <div className="product-price">$2499.99</div>
                        </div>
                        <div className="product">
                            <a href="!#">
                                <img src={img} alt="product" />
                            </a>
                            <a href="!#">
                                <div className="product-name">MacBook Pro</div>
                            </a>
                            <div className="product-price">$2499.99</div>
                        </div>
                        <div className="product">
                            <a href="!#">
                                <img src={img} alt="product" />
                            </a>
                            <a href="!#">
                                <div className="product-name">MacBook Pro</div>
                            </a>
                            <div className="product-price">$2499.99</div>
                        </div>
                        <div className="product">
                            <a href="!#">
                                <img src={img} alt="product" />
                            </a>
                            <a href="!#">
                                <div className="product-name">MacBook Pro</div>
                            </a>
                            <div className="product-price">$2499.99</div>
                        </div>
                    </div>

                    <div className="text-center button-container">
                        <Link to="/shop" className="button">
                            View more products
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Featured;
