import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <Fragment>
            <h2>Page accueil Dashboard</h2>
            <p>Bienvenue Mr le Président</p>
            <ul>
                <li>
                    <Link to="products">Créer un produit</Link>
                </li>
                <li>
                    <Link to="categories">Créer une catégorie</Link>
                </li>
            </ul>
        </Fragment>
    );
};

export default Welcome;
