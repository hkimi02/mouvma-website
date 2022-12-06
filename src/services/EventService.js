import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/hkimi02/Hello-World-vue',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents() {
        return apiClient.get('/events');
    }
}