import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID e808a74feaf6659226e0efc948c5ad7c510610eece805ade73210381b71e6496'
    }
});