import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import PersonService from '../service/PersonService';

///

const PersonDetails = () => {
    const params = useParams();
    const [ingredient, setIngredient] = useState({ingredientId: 0, ingredientName: ''});
    const [message, setMessage] = useState({value: '', type: ''});
    const history = useHistory();

    useEffect(()=> {
        const personService = new PersonService();
        personService.getPersonById(params.id).then(res => {
            //update state
            console.log("PERSON:" , res);
            if(res.status === 200){
                console.log(res.data);
                setIngredient(res.data);
            }else {
                // update error state
                setMessage({value: 'API ERROR: '+ res.status, type: 'danger'})
            }
        });
    }, []);
    
    return (
        <div className="container">
            <div className="card">
                <div className="card-header bg-dark text-white">
                    Person Details
                </div>
                <div className="card-body">
                    <h5 className="card-title">Title: {ingredient.ingredientId}</h5>
                    <p className="card-text">ID: {ingredient.ingredientId}</p>
                    <p className="card-text">Name: {ingredient.ingredientName}</p>
                    
                </div>
                <div className="card-footer">
                    <button className="btn btn-outline-danger" onClick={()=> history.push('/crud')}>Back</button>
                </div>
            </div>
        </div>
    );
};

export default PersonDetails;