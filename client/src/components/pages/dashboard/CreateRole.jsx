import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

const CreateRole = () => {
    const [formData, setFormData] = useState({ name: '' }); // State pour le formulaire
    const [editMode, setEditMode] = useState(false);
    const [roles, setRoles] = useState([]);

    function onChangeHandler(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        axios.get('/api/roles').then(res => setRoles(res.data));
    }, []);

    function createRole(data) {
        axios.post('/api/roles/create', data).then(res => {
            console.log(res.data);
            console.log(res.data.role);
            setRoles([...roles, res.data.role]);
        });
    }

    /**
     * @desc fonction qui va permettre de créer ou de mettre à jour les rôles
     * @param e event
     */
    function onSubmitHandler(e) {
        e.preventDefault();

        if (!formData.name || formData.name === '') {
            setEditMode(false);
            setFormData({ name: '' });
            return false;
        }

        if (!editMode) {
            createRole(formData);
        } else {
            //updateRole(formData);
        }

        setFormData({ name: '' });
    }

    const { name } = formData;

    return (
        <Fragment>
            <section className="row">
                <div className="col-md-6">
                    <h2>Ajouter un rôle</h2>
                    <form className="row g-3 mb-5" onSubmit={onSubmitHandler}>
                        <div className="col-md-8">
                            <label htmlFor="name" className="form-label">
                                Rôle Name
                            </label>
                            <div className="input-group input-group-sm">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    value={name}
                                    onChange={onChangeHandler}
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">
                                Create
                            </button>
                        </div>
                    </form>
                </div>

                <div className="col-md-3">
                    <h2 className="text-center">Rôle</h2>
                    <hr />
                    {/* MAP ici pour afficher toutes les catégories */}
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Rôle</th>
                                <th>Mettre à jour</th>
                                <th>Supprimer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {roles &&
                                roles.map(role => (
                                    <tr key={role.id}>
                                        <td>{role.name}</td>
                                        <td>
                                            <button
                                                onClick={() => null}
                                                type="button"
                                                className="btn btn-primary btn-sm mx-3"
                                            >
                                                Update
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => null}
                                                type="button"
                                                className="btn btn-danger btn-sm mx-3"
                                            >
                                                Supprimer
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </section>
            <hr />
        </Fragment>
    );
};

export default CreateRole;
