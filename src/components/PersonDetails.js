import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import PersonService from '../service/PersonService';

///

const PersonDetails = () => {
    const params = useParams();
    const [person, setPerson] = useState({id: 0, firstName: '', lastName: '',email: '', title: ''});
    const [message, setMessage] = useState({value: '', type: ''});
    const history = useHistory();

    useEffect(()=> {
        const personService = new PersonService();
        personService.getPersonById(params.id).then(res => {
            //update state
            console.log("PERSON:" , res);
            if(res.status === 200){
                console.log(res.data);
                setPerson(res.data);
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
                    <h5 className="card-title">Title: {person.title}</h5>
                    <p className="card-text">ID: {person.id}</p>
                    <p className="card-text">Name: {person.firstName} {person.lastName}</p>
                    <p className="card-text">Email: {person.email}</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-outline-danger" onClick={()=> history.push('/crud')}>Back</button>
                </div>
            </div>
        </div>
    );
};

export default PersonDetails;