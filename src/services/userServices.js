import axios from 'axios';

const service = {
    post(data){
       return axios.post('http://localhost:9000/api/create-user', data)
    },
    
}

export default service