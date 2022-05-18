import axios from 'axios';

export default axios.create({

    baseURL: 'https://api.spaceflightnewsapi.net/v3',
    timeout: 100000,
    headers: { 'Content-type': 'application/json'}     
    
});

