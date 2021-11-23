import axios from "axios";

const baseURL = "http://localhost:8080/api/v1/person/";

class PersonService {

    findAll = async () => {
      return await axios.get(baseURL).then(res => res);
    };

    getPersonById = async (id) => {
        return await axios.get(baseURL + id).then(res => res);
    };

    savePerson = async (data) => {
        return await axios.post(baseURL, data).then(res => res);
    };

    updatePerson = async (data) => {
        return await axios.put(baseURL, data).then(res => res);
    };

    deletePersonById = async (id) => {
        return await axios.delete(baseURL + id).then(res => res);
    };

}

export default PersonService;