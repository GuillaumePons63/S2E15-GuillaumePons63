import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { CategoryContext } from '../../../contexts/categories';
import { GET_CATEGORIES } from '../../../contexts/categories/types';

const CreateCategory = () => {
    const [categoriesState, dispatchCats] = useContext(CategoryContext);
    const [formData, setFormData] = useState({ name: '' });

    useEffect(() => {
        getCategories();
    }, []);

    function onChangeHandler(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function getCategories() {
        axios
            .get('/api/categories')
            .then(res => {
                dispatchCats({ type: GET_CATEGORIES, payload: res.data });
            })
            .catch(e => console.error(e));
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        // create some categories
        console.log(formData);
        axios
            .post('/api/categories/create', formData)
            .then(() => getCategories());
    }

    const { name } = formData;
    const categories = categoriesState.categories;

    return (
        <div className="row">
            <div className="col-md-6">
                <h2>Ajouter une catégorie</h2>
                <form className="row g-3 mb-5" onSubmit={onSubmitHandler}>
                    <div className="col-md-8">
                        <label htmlFor="name" className="form-label">
                            Category Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                            Create
                        </button>
                    </div>
                </form>
            </div>

            <div className="col-md-3">
                <h2 className="text-center">Catégories</h2>
                <hr />
                {/* MAP ici pour afficher toutes les catégories */}
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Catégorie</th>
                            <th>Mettre à jour</th>
                            <th>Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories &&
                            categories.map(category => (
                                <tr key={category.id}>
                                    <td>{category.name}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-danger btn-sm mx-3"
                                        >
                                            Supprimer
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-sm mx-3"
                                        >
                                            Update
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CreateCategory;
