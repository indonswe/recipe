import React, {Fragment, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import PersonService from '../service/PersonService';

import { useForm } from 'react-hook-form';

    

const UpdateThePerson = () => {

    const params = useParams();
    const [person, setPerson] = useState({id: 0, firstName: '', lastName: '',email: '', title: ''});
    const [message, setMessage] = useState({value: '', type: ''});
    const history = useHistory();
    const [reload, setReload] = useState(false);


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

    const Form = () => {

        const {register, handleSubmit, reset, formState: {errors} } = useForm();

        const savePerson = (data) => {
            console.log(data);
            data.id = person.id;
            console.log(data);
            // call  API
            const service = new PersonService();
            service.updatePerson(data).then(res => {
                if(res.status === 201){
                    // show message
                    setMessage({value: 'Operation is done for person Id:' + res.data.id , type: 'success'});
                     // update the state = reload the useEffect
                     setReload(!reload);
                }else {
                    // show error message
                    setMessage({value: 'Error:'+ res.status, type: 'danger'});
                }
            });

            
                //history.push(`/details/${data.id}`);
            history.push(`/crud/`);
            
           
        }


        return(
            <Fragment>
                <form className="form-control m-2 p-3" onSubmit={handleSubmit(savePerson)}>
                    <div className="row mb-3">
                        <div className="col-6">
                            <input type="text" className="form-control" {...register("firstName", {required: true})} placeholder={person.firstName} />
                            {errors.firstName && <span className="text-danger">FirstName is Required!</span>}
                        </div>
                        <div className="col-6">
                            <input type="text" className="form-control" {...register("lastName", {required: true})} placeholder={person.lastName} />
                            {errors.lastName && <span className="text-danger">LastName is Required!</span>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control" {...register("email", {required: true})} placeholder={person.email} />
                            {errors.email && <span className="text-danger">Email is Required!</span>}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control" {...register("title")} placeholder={person.title} />
                        </div>
                    </div>  
                    <button type="submit" className="btn btn-success">Update</button>
                    <button type="button" className="btn btn-danger" onClick={()=> reset() }>Reset</button>
                </form>
            </Fragment>
        );
    };

    return (
        <div>
           <Form/> 
        </div>
    );
};

export default UpdateThePerson;