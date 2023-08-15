import   axios   from 'axios';

const baseUrl  = 'http://localhost:8000/api'

export  async function getAll(){
    let villas;
    await axios
            .get(`${baseUrl}/get`)
            .then(response => {
                villas = response.data["data"];
            });
    
    return villas;
};

export async function getById(id){
    let villa;
    await axios
            .get(`${baseUrl}/get/${id}`)
            .then(response => {
                villa = response.data["data"];
                console.log('villa '+villa)
            });
    return villa;
};
